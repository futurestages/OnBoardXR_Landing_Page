---
layout: default
id: avocado-adventure
title: The Great Avocado Adventure
parent: Repository
nav_order: 
---

# Table of Contents
1. [Introduction](#introduction)
2. [Project Data](#project-data)
3. [Cueing Objects](#cueing-objects)
4. [The Cues](#the-cues)
    1. [Change_Avatar_group](#change_avatar_group)
    2. [Recall_group](#recall_group)
    3. [Jump_To_Waypoint_group](#jump_to_waypoint_group)
    4. [Spawn_Networked_group](#spawn_networked_group)
    5. [Spawn_Prop_group](#spawn_prop_group)
    6. [Spawn_Socket_Object_group](#spawn_socket_object_group)
    7. [Move_Socket_Object_group](#move_socket_object_group)
    8. [Blender_Animation_group](#blender_animation_group)
    9. [Change_Color_group](#change_color_group)
    10. [Remove_Interaction_group](#remove_interaction_group)
    11. [Apply_Gravity_group](#apply_gravity_group)
    12. [Delete_group](#delete_group)
    13. [Spawn_Audio_group](#spawn_audio_group)
    14. [God_Mic_group](#god_mic_group)
    15. [Share_Camera_group](#share_camera_group)
    16. [Manipulate_Avatar_group](#manipulate_avatar_group)
    17. [Enable_Movement_group](#enable_movement_group)
    18. [Enable_Flight_group](#enable_flight_group)
    19. [Change_Scene_group](#change_scene_group)
    20. [Jump_To_Waypoint_Scene_2_group](#jump_to_waypoint_scene_2_group)
        
----------------------------------------------------------------------------------------

# The Great Avocado Adventure - How It Was Made
## Introduction
We made the great avocado adventure to showcase the basics of what can be done with the cue system. If you are brand new to the cueing-system, read [cueing-system](./cue-system.md). To experience the cues yourself, go to [this scene url](https://onboardxr.live/scenes/WJLehdx), click "Create a room with this scene", and add `?r=avocado` to the end of the generated url. BE ADVISED: This experience will require you to regenerate a room url for each use.

## Cueing Objects
This experience relies heavily on the CUEING OBJECT feature in Spoke, which allows cues/cue groups to be triggered when clicking on flat 3d images placed in within your scene. This feature allows you to specify which role names are able to view the cueing objects, allowing your show's performers to cue shows for themselves without interference from audience members. If you would like to check out the way this was constructed, import [this spoke file](https://github.com/XHARBOR/ThePortFront-TMP/blob/main/src/assets/avocadoScene1.spoke) at onboardxr.live/spoke.

## User Data
This project has one username specified. I've chosen to call it "avocado" and to have its `role` be the same. I have also chosen to set "performer" to `true` so that I can send cues to the performer role. REMEMBER that any usernames specified in `userMap` must be listed in the `userList` array for data to be properly loaded.
```json
{
  "greatAvocadoAdventure": {
    "userList": ["avocado"],
    "userMap": {
      "avocado": {"name": "Avocado", "role": "avocado", "performer": true}
    },
    "listCue": {},
    "objMap": {},
    "animMap": {}
  }
}
```

## The Cues
The following cues are ordered by their group names, which have been attached to the cueing objects in spoke. You will notice that the role names for each of these cues are `stagemanager`. I have done this so that the 2D cueing UI will not be visible for the anyone using the "avocado" username. In spoke, I have specified "avocado" as the role name for all cueing objects so that these cue triggers will be visible to anyone using the "avocado" username. You will also notice that all cues are sent to the role name "performer"

### `Change_Avatar_group`
This first cue simply changes the avatar of anyone using the "performer" role name in the avocado adventure scene. The main parameter here is `link` where the desired avatar .glb file is passed.
```json
  {
    "name": "Change_Avatar",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Change_Avatar",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
      "action": {
        "type": "change_avatar",
        "link": "https://jigsawhubs-1-assets.onboardxr.live/files/0aae1be0-93e4-4aa4-b815-7391dd187f7b.glb"
      }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Avatar_group",
      "time": 0
    }
  }
```

### `Recall_group`
This group recalls anyone using the "performer" role name in the avocado adventure scene to the `avocadoRecall` waypoint, which has been set in spoke. This cue brings audiences within a maximum radius (`maxDist`) of `0.01`. This is quite small, but any avatars already within this radius will NOT be recalled; only the avatars outside of the `maxDist` radius will be recalled to the waypoint. Lastly, the `enableMotion` parameter is set to `false`. This parameter is NOT intuitive, because `false` actually means that audience members will have their motion enabled (not the other way around). All recall cues animate audience over 2000ms.
```json
  {
    "name": "Recall",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Recall",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "recall_audience",
          "waypoint": "avocadoRecall",
          "maxDist": 0.01,
          "enableMotion": false
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Recall_group",
      "time": 0
    }
  }
```

### `Jump_To_Waypoint_group`
```json
  {
    "name": "Jump_To_Waypoint",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Jump_To_Waypoint",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": {
          "type": "jump_to_waypoint",
          "anchor": "#avocadoRecall2"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Jump_To_Waypoint_group",
      "time": 0
    }
  }
```
### `Spawn_Networked_group`
```json
  {
    "name": "Spawn_Networked",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
        "_cue": {
          "name": "Spawn_Networked",
          "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
          "target": {
            "type": "glb", 
            "dest": "url",
            "role": "performer",
            "src": "https://jigsawhubs-1-assets.onboardxr.live/files/46ae2a98-68c6-4350-9a3b-ed0472c49922.glb"
          },
          "action": {
            "type": "spawn_item",
            "pauseOnSpawn": true,
            "applyGravityOnSpawn" : false,
            "pos": {"x": -8.845440864562988, "y": 0.970996618270874, "z": 25.50312614440918},
            "rot": {"x": 0, "y": -1.4058846271510415, "z": 0},
            "scale": {"x": 2, "y": 2, "z": 2}
          }
        }
      },
    "trig": {
      "type": "button",
      "groupChain": "Spawn_Networked_group",
      "time": 0
    }
  }
```
### `Spawn_Prop_group`
```json
  {
    "name": "Spawn_Prop",
    "role": "stagemanager",
    "target": { 
      "type": "glb",
      "dest": "url",
      "src": "https://jigsawhubs-1-assets.onboardxr.live/files/0aae1be0-93e4-4aa4-b815-7391dd187f7b.glb"
    },
    "action": {
      "type": "spawn_prop",
      "rot": {"x": 0, "y": 0, "z": 0},
      "scale": {"x": 2, "y": 2, "z": 2}},
    "trig": {
      "type": "button",
      "groupChain": "Spawn_Prop_group",
      "time": 0
    }
  }
```
### `Spawn_Socket_Object_group`
```json
  {
    "name": "Spawn_Socket_Object",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Spawn_Socket_Object",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer",
          "src": "https://jigsawhubs-1-assets.onboardxr.live/files/0aae1be0-93e4-4aa4-b815-7391dd187f7b.glb"
        },
        "action": {
          "type": "socket_spawn_object",
          "pauseOnSpawn": true,
          "applyGravityOnSpawn" : false,
          "pos": {"x": -8.819202423095703, "y": 0.9534885883331299, "z": 29.42129898071289},
          "rot": {"x": 0, "y": -1.4058846271510415, "z": 0},
          "scale": {"x": 2, "y": 2, "z": 2}
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Spawn_Socket_Object_group",
      "time": 0
    }
  }
```
### `Move_Socket_Object_group`
```json
  {
    "name": "Position_Object",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Position_Object",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "performer", 
          "aspect": "position"
        },
        "action": { 
          "type": "socket_manipulate_object",
          "mapItem": "Spawn_Networked",
          "attr": "object3D",
          "anime": {
            "targets": "position",
            "delay" : 0,
            "loop": false,
            "autoplay": true,
            "easing": "easeInOutSine",
            "duration": 0
          },
          "timelines" : [
            {"x": 19.979122506139536, "y": 20.517221926334754, "z": 0.10544329774965633, "easing": "easeInOutSine", "duration": 8000, "delay": 0}
          ]
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Move_Socket_Object_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Scale_Object",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Scale_Object",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "performer", 
          "aspect": "scale"
        },
        "action": { 
          "type": "socket_manipulate_object",
          "mapItem": "Spawn_Networked",
          "attr": "object3D",
          "anime": {
            "targets": "scale",
            "delay" : 0,
            "loop": false,
            "autoplay": true,
            "easing": "easeInOutSine",
            "duration": 0
          },
          "timelines" : [
            {"x": 30, "y": 30, "z": 30, "easing": "easeInOutSine", "duration": 8000, "delay": 0}
          ]
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Move_Socket_Object_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Rotation_Object",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Rotation_Object",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "performer", 
          "aspect": "rotation"
        },
        "action": { 
          "type": "socket_manipulate_object",
          "mapItem": "Spawn_Networked",
          "attr": "object3D",
          "anime": {
            "targets": "rotation",
            "delay" : 0,
            "loop": false,
            "autoplay": true,
            "easing": "easeInOutSine",
            "duration": 0
          },
          "timelines" : [
            {"x": 0, "y": 18, "z": 0, "easing": "easeInOutSine", "duration": 8000, "delay": 0}
          ]
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Move_Socket_Object_group",
      "time": 0
    }
  }
```
### `Blender_Animation_group`
```json
  {
    "name": "Blender_Animation",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Blender_Animation",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "type": "glb",
          "role": "general"
        },
        "action": {
          "type": "change_animation", 
          "mapItem": "Spawn_Networked",
          "animName": "AvocadoAction", 
          "networkedId": "nonNetworked"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Blender_Animation_group",
      "time": 0
    }
  }
```
### `Change_Color_group`
```json
  {
    "name": "Change_Color",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Change_Color",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "performer"
        },
        "action": {
          "type": "change_material_color",
          "color": "red",
          "element": "Spawn_Networked"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Color_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Stop_Blender_Animation",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Stop_Blender_Animation",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "type": "glb",
          "role": "general"
        },
        "action": {
          "type": "change_animation", 
          "mapItem": "Spawn_Networked",
          "animName": "stop", 
          "networkedId": "nonNetworked"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Color_group",
      "time": 0
    }
  }
```
### `Remove_Interaction_group`
```json
  {
    "name": "Remove_Interaction",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Remove_Interaction",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "performer"
        },
        "action": {
          "type": "remove_interaction",
          "element" : "Spawn_Networked"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Remove_Interaction_group",
      "time": 0
    }
  }
```
### `Apply_Gravity_group`
```json
  {
    "name": "Apply_Gravity",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Apply_Gravity",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "performer"
        },
        "action": {
          "type": "apply_gravity",
          "element" : "Spawn_Networked"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Apply_Gravity_group",
      "time": 0
    }
  }
```
### `Delete_group`
```json
  {
    "name": "Delete",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Delete",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "delete",
          "src" : "Spawn_Networked"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Delete_group",
      "time": 0
    }
  }
```
### `Spawn_Audio_group`
```json
  {
    "name": "Spawn_Audio",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
        "_cue": {
          "name": "Spawn_Audio",
          "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
          "target": {
            "type": "glb", 
            "dest": "url",
            "role": "performer",
            "src": "https://jigsawhubs-1-assets.onboardxr.live/files/a4718d79-49ed-4533-bea0-fd58d53518fd.mp3"
          },
          "action": {
            "type": "spawn_item",
            "pos": {"x": -5.559922695159912, "y": 1.5215909481048584, "z": 8.328134536743164},
            "rot": {"x": 0, "y": -1, "z": 0},
            "scale": {"x": 1, "y": 1, "z": 1}
          }
        }
      },
    "trig": {
      "type": "button",
      "groupChain": "Spawn_Audio_group",
      "time": 0
    }
  }
```
### `God_Mic_group`
```json
  {
    "name": "God_Mic",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "God_Mic",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "general" 
        },
        "action": { 
          "type": "change_rolloff",
          "names": ["Avocado"],
          "rolloff": 0,
          "refDistance": 1
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "God_Mic_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "God_Mic_Tooltip",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
        "_cue": {
          "name": "God_Mic_Tooltip",
          "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
          "target": {
            "type": "glb", 
            "dest": "url",
            "role": "performer",
            "src": "https://jigsawhubs-1-assets.onboardxr.live/files/4bdddff4-d068-4a15-b22c-7dc77e34a5ac.png"
          },
          "action": {
            "type": "spawn_item",
            "pos": {"x": -4.47224760055542, "y": 1.5768098831176758, "z": 9.898563385009766},
            "rot": {"x": 0, "y": -1, "z": 0},
            "scale": {"x": 1.5, "y": 1.5, "z": 1.5}
          }
        }
      },
    "trig": {
      "type": "button",
      "groupChain": "God_Mic_group",
      "time": 0
    }
  }
```
### `Share_Camera_group`
```json
  {
    "name": "Share_Camera",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Share_Camera",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "performer"
        },
        "action": {
          "type": "share_camera",
          "position" : {"x": -3.5318191051483154, "y": 1.6381648778915405, "z": 11.742795944213867},
          "scale" : {"x": 1.5, "y": 1.5, "z": 1.5},
          "rotation" : {"x": 0, "y": -60, "z": 0}
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Share_Camera_group",
      "time": 0
    }
  }
```
### `Manipulate_Avatar_group`
```json
  {
    "name": "Manipulate_Avatar_Scale",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Manipulate_Avatar_Scale",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer",
          "aspect": "scale" 
        },
        "action": { 
          "type": "manipulate_avatar",
          "attr": "object3D",
          "anime": {
            "targets": "",
            "delay": 0,
            "loop": false,
            "autoplay": false,
            "easing": "linear",
            "duration": 1
          },
          "timelines": [
            {"x": 12, "y": 12, "z": 12, "delay": 0, "duration": 4000, "easing": "easeOutElastic(1, 0.5)"}
          ]
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Manipulate_Avatar_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Manipulate_Avatar_Position",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Manipulate_Avatar_Position",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer",
          "aspect": "position" 
        },
        "action": { 
          "type": "manipulate_avatar",
          "attr": "object3D",
          "anime": {
            "targets": "",
            "delay": 0,
            "loop": false,
            "autoplay": false,
            "easing": "linear",
            "duration": 1
          },
          "timelines": [
            {"x": -4.688970298519197, "y": -0.08431823261216209, "z": -1.7726578966463873, "delay": 0, "duration": 4000, "easing": "easeInOutSine"}
          ]
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Manipulate_Avatar_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Manipulate_Avatar_Disable_Movement",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Manipulate_Avatar_Disable_Movement",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "socket_toggle_movement",
          "movement" : true
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Manipulate_Avatar_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Manipulate_Avatar_Disable_Flight",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Manipulate_Avatar_Disable_Flight",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer" 
        },
        "action": { 
          "type": "socket_toggle_flight",
          "flight" : false
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Manipulate_Avatar_group",
      "time": 0
    }
  }
```
### `Enable_Movement_group`
```json
  {
    "name": "Enable_Movement",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Enable_Movement",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "socket_toggle_movement",
          "movement" : false
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Enable_Movement_group",
      "time": 0
    }
  }
```
### `Enable_Flight_group`
```json
  {
    "name": "Enable_Flight",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Enable_Flight",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer" 
        },
        "action": { 
          "type": "socket_toggle_flight",
          "flight" : true
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Enable_Flight_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Enable_Flight_Tooltip",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
        "_cue": {
          "name": "Enable_Flight_Tooltip",
          "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
          "target": {
            "type": "glb", 
            "dest": "url",
            "role": "performer",
            "src": "https://jigsawhubs-1-assets.onboardxr.live/files/713a0105-967d-4b01-905a-adf66af85b7f.png"
          },
          "action": {
            "type": "spawn_item",
            "pos": {"x": -4.902807712554932, "y": 21.401622772216797, "z": -7.276471138000488},
            "rot": {"x": 0, "y": 0.19623180092085316, "z": 0},
            "scale": {"x": 5, "y": 5, "z": 5}
          }
        }
      },
    "trig": {
      "type": "button",
      "groupChain": "Enable_Flight_group",
      "time": 0
    }
  }
```
### `Enable_Flight_group`
```json
  {
    "name": "Enable_Flight",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Enable_Flight",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer" 
        },
        "action": { 
          "type": "socket_toggle_flight",
          "flight" : true
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Enable_Flight_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Enable_Flight_Tooltip",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
        "_cue": {
          "name": "Enable_Flight_Tooltip",
          "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
          "target": {
            "type": "glb", 
            "dest": "url",
            "role": "performer",
            "src": "https://jigsawhubs-1-assets.onboardxr.live/files/713a0105-967d-4b01-905a-adf66af85b7f.png"
          },
          "action": {
            "type": "spawn_item",
            "pos": {"x": -4.902807712554932, "y": 21.401622772216797, "z": -7.276471138000488},
            "rot": {"x": 0, "y": 0.19623180092085316, "z": 0},
            "scale": {"x": 5, "y": 5, "z": 5}
          }
        }
      },
    "trig": {
      "type": "button",
      "groupChain": "Enable_Flight_group",
      "time": 0
    }
  }
```
### `Enable_Flight_group`
```json
  {
    "name": "Enable_Flight",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Enable_Flight",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer" 
        },
        "action": { 
          "type": "socket_toggle_flight",
          "flight" : true
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Enable_Flight_group",
      "time": 0
    }
  }
```
### `Change_Scene_group`
```json
  {
    "name": "Change_Scene",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Change_Scene",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "performer"
        },
        "action": {
          "type": "change_scene",
          "link":"https://onboardxr.live/scenes/WJLehdx"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Scene_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Delete_Enable_Flight_ToolTip",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Delete_Enable_Flight_ToolTip",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "delete",
          "src" : "Enable_Flight_Tooltip"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Scene_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Delete_God_Mic_ToolTip",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Delete_God_Mic_ToolTip",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "delete",
          "src" : "God_Mic_Tooltip"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Scene_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Delete_Share_Screen",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Delete_Share_Screen",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "delete",
          "src" : "Share_Camera"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Scene_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Delete_Audio",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Delete_Audio",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "delete",
          "src" : "Spawn_Audio"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Scene_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Delete_Socket_Object",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Delete_Socket_Object",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "delete",
          "src" : "Spawn_Socket_Object"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Scene_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Delete_Prop",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Delete_Prop",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "performer"
        },
        "action": { 
          "type": "delete",
          "src" : "Spawn_Prop"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Scene_group",
      "time": 0
    }
  }
```
### `Jump_To_Waypoint_Scene_2_group`
```json
  {
    "name": "Jump_To_Waypoint_Scene_2",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Jump_To_Waypoint_Scene_2",
        "sceneLink": "https://onboardxr.live/scenes/WJLehdx/avocadoadventuresteps8-12",
        "target": { 
          "role": "performer"
        },
        "action": {
          "type": "jump_to_waypoint",
          "anchor": "#TopDeck"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Jump_To_Waypoint_Scene_2_group",
      "time": 0
    }
  }
```
```json
  {
    "name": "Disable_Flight",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Disable_Flight",
        "sceneLink": "https://onboardxr.live/scenes/WJLehdx/avocadoadventuresteps8-12",
        "target": { 
          "role": "performer" 
        },
        "action": { 
          "type": "socket_toggle_flight",
          "flight" : false
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Jump_To_Waypoint_Scene_2_group",
      "time": 0
    }
  }
```