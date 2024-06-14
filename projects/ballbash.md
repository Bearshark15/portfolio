---
priority: 6
title: Ball Bash
description: Local multiplayer party racing game.
thumbnail: /ballbash/thumbnail.png
bannerImage: /ballbash/page_bg_raw.jpg
logoImage: /ballbash/logo.png
demoLink: https://store.steampowered.com/app/2437980/Ball_Bash/
published: true
---

# Background

BallBash is a local party racing game for up to 4 people. I worked on this game outside of my studies at Uppsala, however the project was started by one of my classmates as part of a production course that I wasn’t taking at the time. At the start of the game the player chooses a character to play all of which have a set of abilities available to them represented by a deck of cards. The players then race against each other while avoiding obstacles and using their abilities to try and get ahead. The game also features runtime generated levels and environments. On this project most of my work has been on the different abilities in the game as well as the level generation system. 

## Ability System

This is an ongoing project, and it has gone through a few iterations and redesigns, a major one being the ability system. In the beginning of the project the idea was that the player would be able to create a set of abilities, represented by a deck of cards, in the in-game menu and select which one they wanted to use along with a character skin before the game started. This has later been changed to characters with their own predefined set abilities similar to how a hero shooter like Overwatch handles their characters. The players have three abilities readily available at any given time and can use them as long as they have accumulated enough energy to do so.

Throughout this project I have made extensive use of Unity's ScriptableObject's and in this system I made three core classes deriving from ScriptaleObject: the `Character` class, the `Ability` class, and the `AbilityDeck` class. I choose this approach to make it easier for the designers to create and manage all the different character definitions and ability combinations in the editor. 

> Note: the following code examples are simplified and does not contain all the methods and fields that are in the games actual code base. They are there to help explain and give an overview of the Ability System

### The Character class

```csharp
public class Character : ScriptableObject
{
    [SerializeField] private string m_name;
    [SerializeField, TextArea] private string m_description;
    [SerializeField] private GameObject m_icon;
    [Space]
    [SerializeField] private Material[] m_outsideSkin;
    [SerializeField] private Mesh m_outsideModel;
    [SerializeField] private Material m_insideSkin;
    [SerializeField] private Mesh m_insideModel;
    [Space]
    [SerializeField] private AbilityDeck m_deck;
}
```

The Character and AbilityDeck classes are simple data containers with some utility methods for retrieving data from them. The Character class has fields that define what a character is. In this game it's the characters name and description, it's appearance based on meshes and materials, and the abilities it can use. 

### The AbilityDeck class

```cs
public class AbilityDeck : ScriptableObject, IEnumerable<Ability>
{
    [SerializeField] private bool m_shuffleAtStart;
    [SerializeField] private List<Ability> m_abilities;
}
```

The AbilityDeck class is even simpler as it's just a wrapper around a List to which the designers can add different abilities to create different decks. It also has a an option for shuffling the deck when the game starts. Once a deck as been created it can be added to one of the Character scriptable object in the editor. 

### The Ability class

```csharp
public abstract class Ability : ScriptableObject, ICloneable
{
    public enum AbilityState
    {
        Ready, Active, Swap 
    }

    [SerializeField] protected AbilityProperties m_properties;
    [SerializeField] protected GameObject m_effectPrefab;
    [Space]
    [SerializeField] protected GameObject m_3dPrefab;

    public AbilityProperties Properties => m_properties;

    public bool IsTriggered { get; private set; }

    public AbilityState State { get; private set; }

    protected virtual void OnBegin() {}

    protected virtual void OnActive() {}

    protected virtual void OnEnd() {}

    public abstract object Clone();
}
```

The Ability class is more complicated than the other two. It's is setup like a state machine with three different states: **Ready** (the ability is ready to be used), **Active** (is currently in use), and **Swap** (should be swapped out). The Ability class it self is an abstract class that has several concrete implementations, one for each ability in the game. The behaviour that controls what an ability does is written in the concrete implementations while the logic for the state machine is in the base Ability class. 

The updating of the abilities is done by a MonoBehaviour sitting on the player. It's called the PlayerAbilityManager and it's responsible for storing all the abilities available to the player, triggering abilities when the player presses the designated buttons, and updating the abilities. 

```csharp
public class PlayerAbilityManager : MonoBehaviour
{
    private Queue<Ability> m_cardQueue;
    private readonly List<Ability> m_active = new();
    private readonly Ability[] m_abilities = { null, null, null };
}
```

The abilities are managed using three collections: a Queue, a List, and an Array with three elements. In the game the players abilities are represented by a deck of cards where the Queue is the players deck and the Array is the players hand that can hold three cards max. When the game starts the Queue is populated with the abilities from an instance of the AbilityDeck class. The first three abilities are immediately popped and put in the abilities array. When the player uses an ability from their hand it's state is changed to Active and taken out of the Array and placed in the List which holds all currently active abilities. A new ability is then popped from the Queue and put in the Array at the index that just became empty/null. When an ability expires it's removed from the List, re-initialized and placed at the end of the Queue.

## Level Generation

The levels in BallBash are made up of the track the players race on and the environment around the track, both of which are generated at runtime. Of the two i was tasked with writing the logic for the track generation, and did so in collaboration with one of the other programmers on the team. The track is made up of one to three lanes and is divided into segments which are randomly puzzled together as the players progress further along the track. 

The segments consists of one to three lanes and some have obstacles, energy pickups, speed boosters, etc, placed in the lanes. The models necessary for the segments were made by the artists and then made into Unity prefabs by the designers.

To manage this I wrote three MonoBehaviours: `LevelGenerator`, `Segment`, and `SegmentObjectPool`. I also made a couple of ScriptableObject's to manage the data for the level and segments: `SegmentData` and `LevelData`.

The LevelGenerator and SegmentObjectPool work together to generate the track for the levels. The LevelGenerator decides when to place and remove segments from the level, at times based on some level specific conditions defined in the LevelData scriptable object. The SegmentObjectPool manages an object pool of segments and keeps track of all active and inactive segments in the level. When the LevelGenerator needs to place a new segment on the track it goes to the SegmentObjectPool and requests a segment that matches a set of conditions. These conditions are passed as a predicate to the SegmentObjectPool and is used to query the list of inactive segments for all segments that match the predicate. Using weighted random selection, the SegmentObjectPool selects a segment from the list and sends it to the LevelGenerator to be placed in the level.   

```csharp
[CreateAssetMenu(fileName = "New SegmentData", menuName = "Level Generation/SegmentData")]
public class SegmentData : ScriptableObject
{
    public enum Connections
    {
        One = 0, Two = 1, Three = 2
    }

    [Tooltip("Prefab of the segment to spawn")]
    public GameObject SegmentPrefab;
    [Space]
    [Tooltip("The number of connections, or lanes, the segment has at the point of entry")]
    public Connections EntryConnections;
    [Tooltip("The number of connections, or lanes, the segment has at the exit point")]
    public Connections ExitConnections;
    [Space]
    [Tooltip("The spawn weight of the segment. The higher the number the more likely it is to spawn")]
    public int SpawnWeight;
    [Space]
    [Tooltip("The length of the given segment")]
    public int SegmentLength;
}
```

The SegmentData class stores information about a specific segment that the LevelGenerator needs in order to correctly place each segment. For this the most important fields in the class are: EntryConnections, ExitConnections, and SegmentLength. 

The entry- and exit connections are the number of lanes a segment has. A segment might have only three lanes or start of with three and merge into one at the end. The LevelGenerator needs to know this as it will only place a segment that has the same amount of EntryConnections as the ExitConnections of the segment right before it. The LevelGenerator also needs to know the length of each segment in order to calculate the spawn position of the next segment. The SpawnWeight is the value used by the SegmentObjectPool when deciding which segment to give to the LevelGenerator when it requests a new segment. The higher to number, the higher the chance of it begin selected as the next segment in the track.

The LevelData class is a wrapper around a list of SegmentData objects and contains all the segments that should be included as part of a specific level.

The Segment MonoBehaviour sits on the segment prefabs themselves and passes important information to the LevelGenerator. It notifies the LevelGenerator if a segment should be removed from the track and returned to the object pool. It keeps track of when all players have pass through the segment and then marks that segment for removal. Once three or more segments are marked for removal, all of them are removed from the track and returned to the object pool.
