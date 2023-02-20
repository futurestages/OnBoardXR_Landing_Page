---
layout: default
id: cue-system
title: cue system
parent: Repository
nav_order: 
---

# Cue System
## Overview
TBD

## History - Dev With Us
TBD

## Building Cues
### Cue Deployment Server
Cueing data is currently hosted on Firestore and is writable for approved users via [this experimental deployment UI](https://github.com/XHARBOR/ThePortFront-TMP) meant to run locally on your device. Currently, cue building requires you to interface directly with the JSON, but this is only temporary while we work on the cue building interface. Check out the experimental repo for instructions on how to get started and contact michaelhmorran@gmail.com with any questions.

## Cueing Data
### Project Data Anatomy
### Users
### Cues & Grouping
### Objects
### Animations

## Paper Tech
TBD

## Sample Cues

### Load Objects
_Load object files into the scene with transform parameters..._
##### `spawn_item`
##### `spawn_prop`
##### `load_360_video`
##### `load_360_image`
##### `spawn_particle_emitter`
##### `spawn_fog`
##### `spawn_360_gif`
##### `share_camera`


### Delete Objects
_Delete object files from the scene..._
##### `delete`
##### `delete_socket_obj`


### Object Commands
_Manipulate parameters and active components on objects in your scene..._
##### `play_360_cutscene`
##### `manipulate_particle_emitter`
##### `manipulate_fog`
##### `cue_object_animation`
##### `play_360_gif`
##### `socket_spawn_object`
##### `remote_scale_audio`
##### `remote_morph_audio`
##### `change_material_color`
##### `remove_interaction`
##### `apply_gravity`


### Animations
_Animate transform and other parameters on objects and avatars..._
##### `move`
##### `track_object`
##### `recall_audience`
##### `manipulate_skybox_360`
##### `manipulate_360_image`
##### `socket_manipulate_object`
##### `socket_fade_skybox_opacity`
##### `change_animation`
##### `lock_waypoint`
##### `theatre_animation`


### Avatar Commands
_Change avatars and the transform positions of individual avatars..._
##### `jump_to_waypoint`
##### `change_avatar`
##### `manipulate_avatar`
##### `avatar_change_back`
##### `hop_to_spawn_point`


### Settings and Permissions
_Change the settigns and permissions of users..._
##### `socket_toggle_flight`
##### `socket_toggle_movement`
##### `change_rolloff`


### Meta Cueing
_Used to manipulate the cueing system or called by cueing system internally..._
##### `call_global_function`
##### `webapp_cue`
##### `pause_object_anim_on_spawn`
##### `reflector_remote_scale_audio`
##### `avatar_sheets`
