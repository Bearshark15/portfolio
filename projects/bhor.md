---
priority: 1
title: Bhor
description: 2D Shoot 'em up game.
thumbnail: /bhor/thumbnail.png
bannerImage: /bhor/banner.png
logoImage: /bhor/logo.png
demoLink: https://kuehldy.itch.io/bhor
published: false
---

# Background

Bhor was the first project I worked on in my first year at Uppsala University. It was part of one of the production courses I took and I worked on it with five of my classmates. It's a 2D shoot 'em up game where you are a construction worker that's attacked by aliens during work. You have to fight your way through the construction site with your only weapons being a nail gun and a magical construction hammer that can electrocute and stun your enemies.

I was one of the programmers on this project and worked many parts of the code but spent most of my time on the enemy behaviour. 

### Finite State Machine (FSM)

I decided to use the state pattern when writing the logic for the enemies. This was based on a book we read as part of a C++ programming course I was taking concurrently called [Game Programming Patterns](https://gameprogrammingpatterns.com/contents.html). Since these were going to be very simple AI's i thought an FSM would be a good fit, on the other hand they were so simple that an FSM might have even been overkill. Still I decided to do it because after reading the book i was very interested in trying it and i wanted to try doing something I hadn't done before.

This was going to be a stack based state machine were each state was contained within it's own class. When switching between states I pushed the new state onto the stack and the state at the top of the stack would become the new state. This way I could implement the undo functionality by simply popping states off the stack. To start I created an interface called `IState` that all of my concrete states implemented.

```csharp
public interface IState
{
    public void StartState(Animator _animator, EnemyController _ctx);
    public void UpdateState();
    public void OnCollision(Collision2D _col);
    public void ExitState();
}
```

I made four concrete states that implemented the `IState` interface which where: `AttackState`, `MoveState`, `DeathState`, and `StunState`. 

Attack and Move are pretty self explanatory; when in the Move state the alien move towards the player. I used Unity's NavMesh system for navigation. When the alien was a certain distance from the player it entered the Attack state and based on what type of weapon it had it would attack the player in different ways. 

The Death state was was only entered when the health points of the alien reached zero. All it did was trigger and animation and then it destroyed the Alien game object. The Stun state was entered when the alien was hit by the players stun attack. This state was also very simple, it triggered and animation for the stun effect, did nothing for a few seconds, and then it called Undo on the state machine to go back to the state it was in before being stunned. 