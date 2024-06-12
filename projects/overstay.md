---
priority: 5
title: OverStay
description: 3D puzzle game.
thumbnail: /overstay/thumbnail.png
bannerImage: /overstay/OverStay.png
logoImage: /overstay/logo.png
demoLink: https://vlada-morgun.itch.io/overstay
published: false
---

# Background

OverStay was a game I worked on as part of a production course at Uppsala University. The game is a puzzle game where the main mechanic the player can utilize is the
ability to leave anchor points in time that they can go back to. Once the
player leaves an anchor point, they have up to 15 seconds to perform a set of
actions before they are “pulled back in time”. Once they’re back they can see
their past self perform the actions they performed 15 seconds ago. The player
can have up to three anchor points. Throughout the game, the player must use this ability to solve several puzzles designed in a way that would usually require two to three players to complete. I worked as one of the programmers on this game along with eight of my classmates. The team consisted of three artists, three designers, and three programmers and we made the game using the Unity game engine.

### Time Travel

On this project, I spent most of my time working on the main mechanic, which was the
time anchors which, in practice, were saving/recording the state of designated
objects as well as the player and “re-playing” them.

When we started working on the project, I considered two different options when writing this mechanic, the first was recording only the player inputs, and the second
was recording the state (i.e. position, rotation, scale, etc.) of designated objects every frame. I had some performance and memory concerns with both options as it meant storing possibly thousands of objects in memory at once, depending on the frame rate. However, this mostly applied to the second option as it meant storing the state of multiple objects at once while the first option was only concerned with the input state of the player.

Despite the performance concerns I decided to go with the second option to avoid possible inconsistencies caused by the physics engine. This was also a concern we had in the beginning because we were using physics for moving objects at the time and
we wanted recorded events to replay exactly as the player had done them, or as
close as we could get since this was a core theme of our game.

To make this mechanic I wrote two primary MonoBehaviours the *StateRecorder* and *ReplayObject*. The purpose of the *StateRecorder* was to record the state of objects
while the *ReplayObject* was tasked with setting the state of objects when the player triggers a replay. Both were abstract classes and concrete implementations were made for each type of object. Additionally, I made a MonoBehaviour called PlaybackController that handles the actual replaying of the state.

I also made some simple classes (i.e. not MonoBehaviours or ScriptableObjects) for storing information about the state of objects. These were the *ObjectData* class, *StateRecording* class, and *TimeLine* class. 

The *ObjectData* class is the class responsible for storing the state of an object, the class is abstract, and I made a concrete implementation for each type of object since they all had slightly different data that needed to be saved. 

The StateRecording is a wrapper around a collection and stores all the *ObjectData* objects in order. 

The TimeLine class stores all the *StateRecording* objects created by all the active *StateRecorder* components in a C# Dictionary with the *StateRecorder* as the key and the *StateRecording* as the value.

When the player chooses to replay their recorded timelines a *PlaybackController* would take the objects *StateRecording* and a reference to the *ReplayObject* component and start setting the state of the object until the end of the recording. 

In most cases, the StateRecorder and ReplayObject components were sitting on the same game object. Meaning, the game object the state was saved from was also the game object the state was being applied to when replaying. However, in the case of the player we need the ReplayObject component to sit on a separate game object since we wanted the player to see their past self doing the actions they recorded and it would be weird trying to move the player character while the game is setting its position somewhere else at the same time. The these cases a new game object with a ReplayObject component was instantiated and used for replaying the timeline.