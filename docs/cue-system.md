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
7. [Cueing Types and Samples](#cueing-types-and-samples)
    1. [Load Objects](#load-objects)
        i. [spawn_item](#spawn_item)
        ii. [spawn_prop](#spawn_prop)
        iii. [load_360_image](#load_360_image)
        iv. [spawn_360_gif](#spawn_360_gif)
        v. [share_camera](#share_camera)
        vi. [socket_spwan_object](#socket_spawn_object)
    2. [Delete Objects](#delete-objects)
        i. [delete](#delete)
    3. [Object Commands](#object-commands)
        i. [play_360_gif](#play_360_gif)
        ii. [remote_scale_audio](#remote_scale_audio)
        iii. [remote_morph_audio](#remote_morph_audio)
        iv. [change_material_color](#change_material_color)
        v. [remove_interaction](#remove_interaction)
        vi. [apply_gravity](#apply_gravity)
    4. [Animations](#animations)
        i. [move](#move)
        ii. [track_object](#track_object)
        iii. [recall_audience](#recall_audience)
        iv. [manipulate_skybox_360](#manipulate_skybox_360)
        v. [socket_manipulate_object](#socket_manipulate_object)
        vi. [socket_fade_skybox_opacity](#socket_fade_skybox_opacity)
        vii. [change_animation](#change_animation)
        iix. [lock_waypoint](#lock_waypoint)
        ix. [theatre_animation](#theatre_animation)
    5. [Avatar Commands](#avatar-commands)
        i. [jump_to_waypoint](#jump_to_waypoint)
        ii. [change_avatar](#change_avatar)
        iii. [manipulate_avatar](#manipulate_avatar)
        iv. [avatar_change_back](#avatar_change_back)
        v. [hop_to_spawn_point](#hop_to_spawn_point)
    6. [Settings and Permissions](#settings-and-permissions)
        i. [socket_toggle_flight](#socket_toggle_flight)
        ii. [socket_toggle_movement](#socket_toggle_movement)
        iii. [change_rolloff](#change_rolloff)
    7. [Meta Cueing](#meta-cueing)
        i. [call_global_function](#call_global_function)
        ii. [webapp_cue](#webapp_cue)
        iii. [avatar_sheets](#avatar_sheets)
        
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
  "name": "Spawn_Boulder",
  "role": "listening",
  "target": { "type": "glb",
    "dest": "url",
    "src":  "https://jigsawhubs-1-assets.onboardxr.live/files/1d835ed7-5b88-4711-bbbc-479ee9f4f626.glb"},
  "action": {"type": "spawn_item",
    "pos": {"x": 0, "y":10, "z":4},
    "rot": {"x": 0, "y":0, "z":0.9},
    "scale": {"x": 2, "y":2, "z":2}},
  "trig": {"type": "button",
    "groupChain" : "Tutorial_1_group",
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
    "name": "Spawn_Vent",
    "role": "remoteAudioTest",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "Spawn_Vent",
            "sceneLink": "sceneurl",
            "role": {},
            "target": { "type": "glb",
                "role": "individual", "name": "___",
                "dest": "url",
                "src":  "https://jigsawhubs-1-assets.onboardxr.live/files/509c8312-bf7a-43d6-8958-c43dec5f1d99.glb"},
            "action": {"type": "spawn_item",
                "pos": {"x": 0, "y":1.5, "z":0},
                "rot": {"x": 0, "y":0, "z":0},
                "scale": {"x": 1, "y":1, "z":1}}
            }
        },
    "trig": {"type": "button",
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
    "name": "NPC_SM_2_spawn_prop_omni",
    "target": { "role": "general",
        "src":  "https://jigsawhubs-1-assets.onboardxr.live/files/3ae6b25b-30e0-48f3-a147-75df2e3e41ec.glb"},
    "action": {"type": "socket_spawn_object",
        "sheets": ["NPC_test_1_group", "NPC_test_2_group", "NPC_test_3_group"],
            "applyGravityOnSpawn": false,
            "pos": {"x": 0, "y": 10, "z": 0},
            "rot": {"x": 0, "y":0, "z":0},
            "scale": {"x": 1, "y":1, "z":1}}
        },
    "trig": {"type": "button",
        "time": 0
    }
}
```
2. If you would like to add your avatar to a sheet, use the following cue...
```json
{
    "name": "test_add_avatar_animation",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "test_add_avatar_animation",
            "sceneLink": "sceneurl",
            "target": { "role": "general"},
            "action": {
                "type": "avatar_sheets",
                "sheets": ["NPC_test_1_group", "NPC_test_2_group", "NPC_test_3_group"]
            }
        }
        },
    "trig": {"type": "button",
        "time": 0
    }
}
```
3. You can cue individual sheets to run from your animMap using the following cue...
```json
{
    "name": "Test_theatre_animation",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "Test_theatre_animation",
            "sceneLink": "sceneurl",
            "role": {},
            "target": {
                "role": "individual", "name": "___"},
            "action": {
                "type": "theatre_animation",
                "sheet": "NPC_SM_ToS_group",
              }
            }
            },
    "trig": {"type": "button",
          "time": 0
      }
}
```

### Cueing Shortcuts
If you do not wish to constantly deploy your code, you can edit your file and use the following function in the developer tools to test your individual cue...
`sockSys.cueSocket(PASTE _cue OBJECT HERE)`

## Paper Tech
TBD

## Cue Types and Samples

### Load Objects
_Load object files into the scene with transform parameters..._
##### `spawn_item`
NON-SOCKET
```json
{
  "name": "Spawn_Boulder",
  "role": "listening",
  "target": { "type": "glb",
    "dest": "url",
    "src":  "https://jigsawhubs-1-assets.onboardxr.live/files/1d835ed7-5b88-4711-bbbc-479ee9f4f626.glb"},
  "action": {"type": "spawn_item",
    "pos": {"x": 0, "y":10, "z":4},
    "rot": {"x": 0, "y":0, "z":0.9},
    "scale": {"x": 2, "y":2, "z":2}},
  "trig": {"type": "button",
    "groupChain" : "Tutorial_1_group",
    "time": 0
  }
}
```
SOCKET
```json
{
    "name": "Spawn_Vent",
    "role": "remoteAudioTest",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "Spawn_Vent",
            "sceneLink": "sceneurl",
            "role": {},
            "target": { "type": "glb",
                "role": "individual", "name": "___",
                "dest": "url",
                "src":  "https://jigsawhubs-1-assets.onboardxr.live/files/509c8312-bf7a-43d6-8958-c43dec5f1d99.glb"},
            "action": {"type": "spawn_item",
                "pos": {"x": 0, "y":1.5, "z":0},
                "rot": {"x": 0, "y":0, "z":0},
                "scale": {"x": 1, "y":1, "z":1}}
            }
        },
    "trig": {"type": "button",
        "time": 0
    }
}
```
##### `spawn_prop`
```json
{
    "name": "Test_3_spawn_prop",
    "role": "test",
    "target": {"type": "glb",
        "dest": "url",
        "src":  "https://xrtheater-assets.xrtheater.live/files/2acc1a73-429b-4895-b766-b28c954a39b2.glb"},
    "action": {"type": "spawn_prop",
        "rot": {"x": 0, "y":1.57, "z":0},
        "scale": {"x": 1.2, "y":1.2, "z":1.2}},
    "trig": {"type": "button",
        "time": 0
    }
}
```
##### `load_360_image`
```json
{
    "name": "test_socket_load_360",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_socket_load_360",
            "sceneLink": "sceneurl",
            "target": { "role": "general" },
            "action": { "type": "load_360_image",
                "src" : "https://xrtheater-assets.xrtheater.live/files/be8aac0d-cef1-464e-9026-2eb76e863062.png",
                "position" : {"x": 23.486209337511696, "y":0, "z":-34.45660006785802},
                "scale" : {"x": 20, "y": 20, "z": 20}
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPCgroup6Skybox1",
        "time": 0
    }
}
```
##### `spawn_360_gif`
```json
{
    "name": "test_360_gif",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_360_gif",
            "sceneLink": "sceneurl",
            "target": { "role" : ["participant"]},
                "action": { "type": "spawn_360_gif",
                "src": "https://jigsawhubs-1-assets.onboardxr.live/files/5fb239de-5970-4e18-8106-e16d67f17b1a.gif"
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_SM_2_group",
        "time": 0
    }
}
```
##### `share_camera`
```json
{
    "name": "Test_shareCamera",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "Test_shareCamera",
            "sceneLink": "sceneurl",
            "role": {},
            "target": {"role": "individual", "name": "___"},
            "action": {"type": "share_camera",
                "position" : {"x": 0, "y":10, "z":0},
                "scale" : {"x": 10, "y": 10, "z": 10},
                "rotation" : {"x": 0, "y": 0, "z": 0}
            }
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```
##### `socket_spawn_object`
```json
{
    "name": "test_spawn_socket_object",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "test_spawn_socket_object",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "target": { "role": "general",
                "src":  "https://uploads-prod.reticulum.io/files/22c46825-f1e5-4f28-9b97-5cf78572d717.glb"},
            "action": {"type": "socket_spawn_object",
                "applyGravityOnSpawn": false,
                "pos": {"x": -48.154061404451596, "y":20.49999999999997, "z":-7.473024652855674},
                "rot": {"x": 0, "y":0, "z":0},
                "scale": {"x": 0.01, "y":0.01, "z":0.01}
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_8_descend_group",
        "time": 0
    }
}
```

### Delete Objects
_Delete object files from the scene..._
##### `delete`
NON-SOCKET
```json
{
    "name": "Test_delete",
    "role": "test",
    "target": { "type": "glb",
        "src": "Test_2_spawn_item_video"},
    "action": {"type": "delete"},
    "trig": {"type": "button",
        "time": 0
    }
}
```
SOCKET
```json
{
    "name": "test_socket_delete",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_socket_delete",
            "sceneLink": "sceneurl",
            "target": { "role": "general" },
            "action": { "type": "delete",
                "src" : "NPC_SM_2_spawn_prop_omni"
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_4_group",
        "time": 55000
    }
}
```

### Object Commands
_Manipulate parameters and active components on objects in your scene..._
##### `play_360_gif`
```json
{
    "name": "test_play_360_gif",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_play_360_gif",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "target": {"role" : ["participant"]},
                "mapItem": "NPC_SM_2_path_gif",
                "fadeDuration": 3000,
                "fadeDelay": 8000
            }
        }
    },
    "trig": {"type": "button",
        "time": 72000
    }
}
```
##### `remote_scale_audio`
```json
{
    "name": "test_scale_audio",
    "role": "remoteAudioTest",
    "target": { },
    "action": {"type": "call_method_from_object",
         "object_name": "sockSys",
         "function_name": "cueSocket",
         "_cue": {
            "name": "test_scale_audio",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "role":"remoteAudioTest",
            "target": { "role" : "individual",
                "name" : "___"
            },
            "action": {
                "type": "remote_scale_audio",
                "minValue": 1,
                "maxValue": 2,
                "itemName": ["Spawn_Vent"],
                "remoteAnalyserNetId": "avatar-rig"
            }
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```
##### `remote_morph_audio`
```json
{
    "name": "Test_morph_audio",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "Test_morph_audio",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "role":"remoteAudioTest",
            "target": { "role" : "individual",
                "name" : "Brendan"
            },
            "action": {
                "type": "remote_morph_audio",
                "minValue": 0,
                "maxValue": 4,
                "name": "Mouth_1",
                "itemName": ["NPC_SM_9_Spawn_Mouth_1"],
                "remoteAnalyserNetId": "avatar-rig"
            }
       }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_7_mouth1_group",
        "time": 0
    }
}
```
##### `change_material_color`
```json
{
    "name": "Test_changematcolor",
    "role": "remoteAudioTest",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "Test_changematcolor",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "role": {},
            "target": {"role": "individual", "name": "___"},
            "action": {"type": "change_material_color",
                "color": "dodgerblue",
                "element" : ".Terrain_Crater1glb"
            }
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```
##### `remove_interaction`
```json
{
    "name": "Test_removeinteract",
    "role": "remoteAudioTest",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "Test_removeinteract",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "role": {},
            "target": {"role": "individual", "name": "___"},
            "action": {"type": "remove_interaction",
                "element" : "Spawn_Vent"
            }
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```
##### `apply_gravity`
```json
{
    "name": "Test_applyGravity",
    "role": "remoteAudioTest",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "Test_applyGravity",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "role": {},
            "target": {"role": "individual", "name": "___"},
            "action": {"type": "apply_gravity",
                "element" : "Spawn_Vent"
            }
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```

### Animations
_Animate transform and other parameters on objects and avatars..._
##### `move`
```json
{
    "name": "Test_move_Avocado_fm_Test_1",
    "role": "test",
    "target": { "type": "glb",
        "dest": "local",
        "src": "Test_1_spawn_item_avocado"},
    "action": {"type": "move",
        "duration": 2000,
        "loop": true,
        "pos": {"x": 3, "y":3, "z":3},
        "rot": {"x": 0, "y":39.785, "z":0},
        "scale": {"x": 2, "y":2, "z":2}},
    "trig": {"type": "button",
        "time": 0
    }
}
```
##### `track_object`
```json
{
    "name": "test_track_object",
    "role": "cut",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "test_track_object",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "target": {
                "role": ["spectator", "participant"],
                "aspect": "position"
            },
            "action": {
                "type": "track_object",
                "mapItem": "NPCe_5b",
                "attr": "object3D",
                "anime": {
                    "targets": "position",
                    "delay": 1000,
                    "loop": false,
                    "autoplay": false,
                    "easing": "easeInOutSine",
                    "duration": 1000
                },
                "timelines": [
                    {
                        "x": -47.2,
                        "y": 1.44079791,
                        "z": -4.8,
                        "rx": 0,
                        "ry": 0,
                        "rz": 0,
                        "s": 0.05,
                        "duration": 72000,
                        "delay": 0,
                        "easing": "linear"
                    }
                ]
            }
        }
    },
    "trig": {"type": "button",
        "time": 25000
    }
}
```
##### `recall_audience`
```json
{
    "name": "test_recall",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "NPCe_16",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "target": { "role": ["participant"]
            },
            "action": { "type": "recall_audience",
                "waypoint" : "lanternWaypoint",
                "maxDist" : 2,
                "enableMotion" : false
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_8_group",
        "time": 0
    }
}
```
##### `manipulate_skybox_360`
```json
{
    "name": "test_socket_manipulate_skybox_360",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_manipulate_skybox_360",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "target": { "role": "general",
                "aspect": "scale"
            },
            "action": { "type": "manipulate_skybox_360",
                "mapItem" : "NPC_61A",
                "anime": {
                "targets": "",
                "delay" : 0,
                "loop": false,
                "autoplay": false,
                "easing": "easeInSine",
                "duration": 5000
            },
            "timelines" : [
                { "x": 4500, "y": 4500, "z": 4500 }
            ]
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPCgroup6Skybox2",
        "time": 0
    }
}
```
##### `socket_manipulate_object`
```json
{
    "name": "test_sock_manipulate_object",
    "role": "remoteAudioTest",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_sock_manipulate_object",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "target": { "role": "individual", "name": "Brendan", "aspect" : "position"},
            "action": { "type" : "socket_manipulate_object",
                "mapItem": "Spawn_Rock_9",
                "attr": "object3D",
                "anime" : {
                "targets": "position",
                "delay" : 0,
                "loop": false,
                "autoplay": true,
                "easing": "easeInOutSine",
                "duration": 4000
                },
            "timelines" : [
                {"x": 6.667657888801241, "y": 3.8, "z": -13.454713739238263}
            ]
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "EVERYTHING_AT_ONCE_group",
        "time": 0
    }
}
```
##### `socket_fade_skybox_opacity`
```json
{
    "name": "fade_skybox",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "fade_skybox",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "target": { "role": "general" },
            "action": { "type": "socket_fade_skybox_opacity",
            "mapItem" : "NPC_SM_2_load_360_skybox",
            "fadeDuration" : 3000}
            }
        },
    "trig": {"type": "button",
        "groupChain" : "NPC_4_group",
        "time": 74000
    }
}
```
##### `change_animation`
```json
{
    "name": "change_animation",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "change_animation",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "role": {},
            "target": { "type": "glb",
                "role": "general"},
            "action": {"type": "change_animation", "mapItem": "NPCe_18","animName" : "act.01", "networkedId": "nonNetworked"}
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_8_group",
        "time": 14000
   }
}
```
##### `lock_waypoint`
```json
{
    "name": "test_lock_waypoint",
    "role": "demo",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_lock_waypoint",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "target": { "role": "general" },
            "action": { "type" : "lock_waypoint",
                "waypoint" : "NPCWaypoint81",
                "recallAud" : true,
                "maxDist" : 0.001,
                "anime" : {
                "targets": "",
                "delay" : 1000,
                "loop": false,
                "autoplay": true,
                "easing": "easeOutSine",
                "duration": 7500
                },
            "timelines" : [
                { "x": -47.389263582373, "y": 2.876098918548304, "z": -7.5257407256272264, "duration": 10000, "delay": 1000 }
            ]
            }
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```
##### `theatre_animation`
```json
{
    "name": "Test_theatre_animation",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
        "name": "Test_theatre_animation",
        "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
        "role": {},
        "target": {
            "role": "individual", "name": "___"},
        "action": {
            "type": "theatre_animation",
            "sheet": "NPC_SM_ToS_group",
            "tracking": [
                {
                "object":"NPC_SM_2_spawn_prop_omni",
                "followers": [
                    {
                    "name": "Avatar",
                    "offset": {"x": -2.8835482597351074, "y": 3.7702087402343736, "z": -2.2604736328124773}
                    }
                ]
                }
            ]
            }
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```


### Avatar Commands
_Change avatars and the transform positions of individual avatars..._
##### `jump_to_waypoint`
NON-SOCKET
```json
{
    "name": "Test_jump_to_waypoint",
    "role": "test",
    "target": { },
    "action": {"type": "jump_to_waypoint",
        "anchor":"#SHWaypoint"},
    "trig": {"type": "button",
        "time": 0
    }
}   
```
SOCKET
```json
{
    "name": "test_socket_jump",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "test_socket_jump",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "role": "brnd",
            "target": { "role": "individual",
                "name": "Brendan"},
            "action": {"type": "jump_to_waypoint",
                "anchor":"#brndLantern"}
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_8_group",
        "time": 14500
    }
}
```
##### `change_avatar`
NON-SOCKET
```json
{
    "name": "test_change",
    "role":"naomi",
    "target": { },
    "action": {"type": "change_avatar",
        "link":"https://jigsawhubs.github.io/Jigsaw_data/avatar/NAOMI_NaomiAvatar.glb"},
    "trig": {"type": "button",
        "time": 0
    }
}
```
SOCKET
```json
{
    "name": "test_socket_change",
    "role": "none",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "test_socket_change",
            "role":"stagemanager",
            "target": { "role" : "participant"},
            "action": {"type": "change_avatar",
                "link":"https://jigsawhubs.github.io/Jigsaw_data/avatar/NPC_A_24.glb"
            }
        }
    },
    "trig": {"type": "button",
        "time": 59000
    }
}
```
##### `manipulate_avatar`
```json
{
"name": "test_manip_avatar",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_manip_avatar",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "target": { "role" : "individual", "name": "Brendan",
            "aspect" : "position" },
            "action": { "type": "manipulate_avatar",
            "attr": "object3D",
            "anime": {
                "targets": "",
                "delay" : 0,
                "loop": false,
                "autoplay": true,
                "easing": "easeInSine",
                "duration": 0
            },
            "timelines" : [
                {"x": -80.56781006268669, "y": 22.11494720458983, "z": -13.944862796980713, "duration": 15000, "easing": "linear", "delay": 0}
            ]
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_9_group",
        "time": 30000
    }
}
```
##### `avatar_change_back`
```json
{
    "name": "change_aud_avatar_back",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_avatar_change_back",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "target": { "role": "participant" },
            "action": { "type": "avatar_change_back"}
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```
##### `hop_to_spawn_point`
```json
{
    "name": "test_to_spawn",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "test_to_spawn",
            "sceneLink": "https://onboardxr.live/scenes/6AMAAZT/npc-staircase-20230205",
            "target": { "role": "ghost" },
            "action": { "type": "hop_to_spawn_point"}
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```

### Settings and Permissions
_Change the settigns and permissions of users..._
##### `socket_toggle_flight`
```json
{
    "name": "toggle_flight",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "toggle_flight",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "target": { "role": "individual", 
            "name": "Brendan" },
            "action": { "type": "socket_toggle_flight",
                "flight" : true}
            }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_ToS_group",
        "time": 1500
    }
}
```
##### `socket_toggle_movement`
```json
{
    "name": "toggle_movement",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "toggle_movement",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "target": { "role": "participant" },
            "action": { "type": "socket_toggle_movement",
                "movement" : true
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_ToS_group",
        "time": 1500
    }
}
```
##### `change_rolloff`
```json
{
    "name": "change_rolloff",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": { 
            "name": "change_rolloff",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "target": { "role": "general" },
            "action": { "type": "change_rolloff",
                "names": ["Brendan"],
                "rolloff": 9999999,
                "refDistance": 0.0000001
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "groupLGTTBBackup",
        "time": 0
    }
}
```


### Meta Cueing
_Used to manipulate the cueing system or called by cueing system internally..._
##### `call_global_function`
```json
{
    "name": "global_function",
    "role": "none",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "global_function",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "target": { "role": "general" },
            "action": {"type": "call_global_function",
                "function_name":"handleCueObjectAnim",
                "mapItem": "NPC_SM_6_corpse_rock_1", 
                "pause": false
            }
        }
    },
    "trig": {"type": "button",
        "time": 33000
    }
}
```
##### `webapp_cue`
_Webapp cue do not need a type, simply send to role mobilewebapp_
```json
{
    "name": "webapp_cue",
    "role": "stagemanager",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "webapp_cue",
            "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
            "role": {},
            "target": { "type": "glb",
            "role": "mobilewebapp"},
            "action": {
                "cuedPopup": false,
                "cuedPopupURL": "https://jigsawhubs.github.io/Jigsaw_data/image/IMG_3673.gif"
            }
        }
    },
    "trig": {"type": "button",
        "groupChain" : "NPC_2_group",
        "time": 47500
    }
}
```
##### `avatar_sheets`
```json
{
    "name": "add_av_to_sheets",
    "role": "test",
    "target": { },
    "action": {"type": "call_method_from_object",
        "object_name": "sockSys",
        "function_name": "cueSocket",
        "_cue": {
            "name": "add_av_to_sheets",
            "target": { "role": "general"},
            "action": {
                "type": "avatar_sheets",
                "sheets": ["NPC_test_1_group", "NPC_test_2_group", "NPC_test_3_group"]
            }
        }
    },
    "trig": {"type": "button",
        "time": 0
    }
}
```
