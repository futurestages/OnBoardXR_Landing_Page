---
layout: default
id: waypoint
title: waypoint
parent: Repository
nav_order: 
---

## Waypoints

## Audience Recall
Community Member [MattBCool]() prototyped a feature for users to `Occupy` a Waypoint in a Ferris Wheel model and "ride" as their avatar followed the moving coordinates of the waypoint, attached the Ferris Wheel. [`Non-Player Character`](./non-player-character.md) borrowed this concept to control avatars across specific coordinates, for example animating audience through a tunnel.



## Spawnpoint
When a Scene loads, Spawnpoints force visitors to enter the Scene at specific coordinates. This can be a dedicated `Spawnpoint` or a `Waypoint` labeled as Spawnpoint (by checking the `Make Spawn Point` checkbox in Spoke under the Properties window). 

If no Spawnpoint is set, visitors will enter the Scene at the origin point (0,0,0). 

If only one Spanwpoint is set, visitors will all enter at that exact point, often on top of each other.

If multiple Spawnpoints are set, visitors will be randomly distributed across those points as they enter.
