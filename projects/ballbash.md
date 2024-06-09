---
key: "6"
title: "Ball Bash"
shortDescription: "Local multiplayer party racing game."
description: ""
pageLink: ""
thumbnail: "/ballbash/thumbnail.png"
bannerImage: "/ballbash/page_bg_raw.jpg"
logoImage: "/ballbash/logo.png"
demoLink: "https://store.steampowered.com/app/2437980/Ball_Bash/"
---

# Background

BallBash is a party racing game for up to 4 people. I worked on this game outside of my studies at Uppsala, however the project was started by one of my classmates as part of a production course that I wasn’t taking at the time. At the start of the game the player gets assigned a character to play as and all the characters has a set of abilities available to them represented by the cards in the image above. The players then race against each other while avoiding obstacles and using their abilities to try and get ahead. The game also features runtime generated levels and environments.
On this project most of my work has been on the different abilities in the game as well as the level generation system. 

## Ability System

This is an ongoing project, and it has gone through a few iterations and redesigns, a major one being the ability system. In the beginning of the project the idea was that the player would be able to create a set of abilities, represented by a deck of cards, in the in-game menu and select which one they wanted to use along with a character skin before the game started. This has later been changed to characters with their own predefined set abilities similar to how a hero shooter like Overwatch handles their characters.

### Iteration 1

When I began writing the first iteration of the ability system, I wanted to use Unity’s Scriptable Object API to make the individual abilities so that all their properties would be easily accessible by the designers and easily managed in the editor. 

However, I realized an issue with this approach when I started testing. If the abilities state, properties, and behaviour were all contained within a ScriptableObject the state of an ability would be shared between the players who had the same ability in their deck. This was only an issue because of an assumption I made in the beginning which was that you couldn’t create new instances of scriptable objects at runtime but only through the context menu in the editor. 

So, what I did was keep the scriptable objects for storing only the properties of the abilities and I created a MonoBehaviour for each of the abilities and added them to the players at runtime based on which deck they choose. 
Which MonoBehaviour to add to the players was based on which deck of card (abilities) they choose before the start of the game. These decks were created by the player before hand and needed to be saved locally so that they would persist between sessions. In hindsight this was not an ideal solution, but I created an Enum of values matching the names of the MonoBehaviours. The names and order of the Enum values was essential for this system to work as I used them to build the deck and add the MonoBehaviours the players. 

When the player was building their decks in the UI, what they were doing was creating a list of these Enum values, representing each of the abilities, and then serializing them as integers in a JSON file. When the decks (i.e. JSON files) where loaded from disk the integers were cast back into there Enum counterparts, which is why the order was important. If the order changed all the deck previously created would be broken/incorrect. Before the start of the game, when the player selected their decks (the list of Enum values) I casted the Enum values to strings and used the Type.GetType method of the C# System namespace to retrieve the Type and used Unity’s AddComponent method to add the MonoBehaviour to the player. This is why it was important that the names of the Enum values matched the name of the MonoBehaviours, otherwise the whole system would break. This was far from an ideal solution, but it worked for the time being.

### Iteration 2

The second iteration of this system was in some ways like the first, however I got rid of the Enum and made all the abilities their own ScriptableObject (including properties and behaviour) deriving from the same base class. To replace the Enum that I used to make and save the decks locally I associated each ability with a GUID and made a “Ability Database” which was a List of all the abilities that would be available to the player in-game. Now when the player made the decks in the UI, instead of casting Enum values to integers and saving that, I saved the GUIDs of the abilities they chose. And when loading the decks I queried the List of available abilities for the ones with the corresponding GUIDs and added each of those abilities to the player. 
When a deck is loaded, each ability with GUIDs matching what’s stored in the decks JSON file are clone and added to the player. i.e. a new instance of the Ability ScriptableObject is created, with all the same values as the original. This was to make sure that players with the same abilities in their decks could use them at the same time without them interfering with each other. 

### Iteration 3

The third iteration of this system saw some minor changes unlike the second. It was decided that we would pivot more towards the hero shooter approach that I mentioned earlier. We would now have different characters each with a predefined set of abilities. To accommodate this, I created two new ScriptableObject, one representing an in-game character called Character, and one representing a deck of abilities called AbilityDeck. 

```C#
[CreateAssetMenu(fileName = "New Ability Deck", menuName = "Ability Deck")]
public class AbilityDeck : ScriptableObject, IEnumerable<Ability>
{
    [SerializeField] private bool m_shuffleAtStart;
    [SerializeField] private List<Ability> m_abilities;

    public void Add(Ability ability)
    {
        m_abilities.Add(ability);
    }

    public IEnumerable<Ability> GetAbilities() => m_shuffleAtStart ? 
        m_abilities.Select(a => a.Clone() as Ability).ToList().Shuffle() : 
        m_abilities.Select(a => a.Clone() as Ability);
    
    public bool Contains(Ability ability) => m_abilities.Contains(ability);

    public List<Ability> GetOriginalAbilities()
    {
        return m_abilities;
    }

    public IEnumerator<Ability> GetEnumerator()
    {
        return m_abilities.GetEnumerator();
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
```

The AbilityDeck was just a wrapper around a List to which the designers could add different abilities and create different decks. The Character, among other things, had a field for storing a AbilityDeck. This allowed the designers to created data representations of all the characters that should be in the game as well as associate collections of abilities to those characters. 
