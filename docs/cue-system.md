---
layout: default
id: cue-system
title: cue system
parent: Repository
nav_order: 
---

# Table of Contents
1. [Overview](#overview)
2. [History - Dev With Us](#history---dev-with-us)
3. [Building Cues](#building-cues)
    1. [Cue Deployment Server](#cue-deployment-server)
4. [Cueing Data](#cueing-data)
    1. [Project Data Anatomy](#project-data-anatomy)
    2. [userList & userMap](#userlist-&-usermap)
    3. [listCue](#listcue)
    4. [Grouping Cues](#grouping-cues)
    5. [Socket Cues](#socket-cues)
    6. [objMap](#objmap)
    7. [animMap](#animmap)
    8. [Cueing Shortcuts](#cueing-shortcuts)
6. [Paper Tech](#paper-tech)
        
----------------------------------------------------------------------------------------

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
Projects have 5 important parts to manage cueing data: `userList`, `userMap`, `listCue`,  `objMap`, `animMap`. The following paragraphs cover the individual parts of cueing proejct data. Here is an empty sample of the data...
```json
{
    "SampleProjectID" : {
      "userList": [],
      "userMap":{},
      "listCue": [], 
      "objMap": {},
      "animMap": {}      
    }
}
```

### userList & userMap
The existence of both the userList and userMap is a current, unfortunate redundancy that will hopefully be resolved in the near future. The `userList` is a simple array of all the role names for a project (strings entered with the URL flag `?r=` when connecting), which is used to associate project data with individual users of a project.
```json
"userList": ["mikeNPCSM", "cinematic", "brnd", "brnd2", "part1", "part2", "part3", "part4"]
```
The `userMap` is more complex, associating indiviudal project role names with their desired cueing role, desired display name, and whether they are a performer. The role name associates cues with individual users, the display name is automatically set in Mozilla Hubs when a user connects, and the performer true/false parameter allows the user to be grouped with other performers in cueing.
```json
"userMap":{
          "mikeNPCSM": {"name":"___","role":"stagemanager", "performer": false},
          "cinematic" : {"name": "camera", "role": "cinematic", "performer": false},
          "brnd": {"name": "Brendan", "role": "brnd", "performer": true},
          "brnd2": {"name": "Brendan2", "role": "stagemanager", "performer": true},
          "part1": {"name":"part1","role":"participant", "performer": false},
          "part2": {"name":"part2","role":"participant", "performer": false},
          "part3": {"name":"part3","role":"participant", "performer": false},
          "part4": {"name":"part4","role":"participant", "performer": false}
}
```

### listCue
`listCue` is a simple array containing all individual cues for your project. Their order does not matter functionally, however it will change the order in which they are displayed on your viewport. Here is a sample cue ...
```json
  {
    "name": "Sample_Spawn",
    "role": "stagemanager",
    "target": { 
      "type": "glb",
      "dest": "url",
      "src": "https://jigsawhubs-1-assets.onboardxr.live/files/1d835ed7-5b88-4711-bbbc-479ee9f4f626.glb"
    },
    "action": {
      "type": "spawn_item",
      "pos": {"x": 0, "y": 0, "z": 0},
      "rot": {"x": 0, "y": 0, "z": 0},
      "scale": {"x": 1, "y": 1, "z": 1}
    },
    "trig": {
      "type": "button",
      "groupChain": "Sample_group",
      "time": 0
    }
  }
```
You can see there are 5 main parts...
`name` - the name of the cue to display on the cueing interface.
`role` - the role to associated the cue with. NOTE: This is not the same as the role name. This is the value specified by the `role` parameter in `userMap`.
`target` - information about the cueable
`action` - parameters for the cue
`trig` - delay and grouping information

The parameters within these 5 parts, especially `target` and `action` will vary cue to cue. See sample cues below to get clearer information. The most important parameter determining the type of cue is the `type` parameter in `action`.

### Grouping Cues
The `groupChain` parameter in `trig` will allow you to specify the group for a cue to be associated. If you choose to add the `groupChain` parameter to your cue (it is not required) it will no longer be rendered as an individual cue in the cueing interface, it will only be triggered with its group. `groupChain`'s value MUST contain "group" as part of the string naming the group.

### Socket Cues
Most cues listed in the samples below are actually cues within cues which utilize the stage system's `action` `type: call_method_from_object` to pass cues to an external server which routes them to the correct user. These kinds of cues are useful due to the ability to control which connected users receive them (instead of everyone connected to a URL at once). The routing is controled by the parameter `action` -> `_cue` -> `target` -> `role` parameter. Additionally, if you want to send your cue to an individual, you can do so by writing "individual" under this `role` parameter, and by adding the optional `name` parameter immediately next to it. This name should correspond to the display name of the user you want to target. LASTLY, in order to prevent cues being broadcast to unnecessary scenes, you must include the `sceneLink` parameter within `_cue` with your environment's scene url.
```json
  {
    "name": "Sample_Spawn_Item",
    "role": "stagemanager",
    "target": { 
      "type": "glb",
      "dest": "url",
      "src":  "https://jigsawhubs-1-assets.onboardxr.live/files/46ae2a98-68c6-4350-9a3b-ed0472c49922.glb"
    },
    "action": {
      "type": "spawn_item",
      "pos": {"x": 0, "y": 10, "z": 4},
      "rot": {"x": 0, "y": 0, "z": 0.9},
      "scale": {"x": 2, "y": 2, "z": 2}
    },
    "trig": {
      "type": "button",
      "groupChain" : "Tutorial_1_group",
      "time": 0
    }
  }
```

### objMap
TBD, this map can be left empty, but will soon be used to manage smart object loading for cues.

### animMap
The `animMap` is an object exported from the [theatreJS](https://www.theatrejs.com/) studio editor when editing animations using "?t=obxtheatrejs" in your URL. For more information on using the studio editor, see the [theatreJS docs](https://www.theatrejs.com/docs/latest/manual/Studio). We have integrated the editor and core engine to allow for more complex animation editing. There are three important cues/cueing parameters to know about when using theatreJS for animations.
1. If you wish to animate an object using the editor, you should add the `sheets` array parameter to the `action` portion of your spawn cue to specify the sheets your object should be added to, like so...
```json
  {
    "name": "Test_Spawn_And_Add_To_Theatre_Sheets",
    "target": { 
      "type": "glb",
      "dest": "url",
      "src":  "https://jigsawhubs-1-assets.onboardxr.live/files/3ae6b25b-30e0-48f3-a147-75df2e3e41ec.glb"
    },
    "action": {
      "type": "spawn_item",
      "sheets": ["Sheet1", "Sheet2", "Sheet3"],
      "applyGravityOnSpawn": false,
      "pos": {"x": 0, "y": 10, "z": 0},
      "rot": {"x": 0, "y": 0, "z": 0},
      "scale": {"x": 1, "y": 1, "z": 1}
    },
    "trig": {
      "type": "button",
      "groupChain" : "Test_group",
      "time": 0
    }
  }
```
2. If you would like to add your avatar to a sheet, use the following cue...
```json
  {
    "name": "Avatar_Sheets",
    "role": "stagemanager",
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Avatar_Sheets",
        "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
        "target": { 
          "role": "general"
        },
        "action": {
          "type": "avatar_sheets",
          "sheets": ["Sheet1", "Sheet2", "Sheet3"]
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain" : "Avatar_Sheets_group",
      "time": 0
    }
  }
```
3. You can cue individual sheets to run from your animMap using the following cue...
```json
  {
    "name": "Test_theatre_animation",
    "role": "stagemanager",
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Test_theatre_animation",
        "sceneLink": "sceneurl",
        "target": {
          "role": "individual", 
          "name": "___"
        },
        "action": {
          "type": "theatre_animation",
          "sheet": "NPC_SM_ToS_group",
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain" : "Test_group",
      "time": 0
    }
  }
```

### Cueing Shortcuts
If you do not wish to constantly deploy your code, you can edit your file and use the following function in the developer tools to test your individual cue...
`sockSys.cueSocket(PASTE _cue OBJECT HERE)`

## Paper Tech
TBD