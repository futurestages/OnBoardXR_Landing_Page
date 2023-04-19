---
layout: default
id: cueing-examples
title: cueing examples
parent: Repository
nav_order: 
---

# Table of Contents
1. [Cueing Examples](#cueing-examples)
    1. [Load Objects](#load-objects)
        1. [spawn_item](#spawn_item)
        2. [spawn_prop](#spawn_prop)
        3. [load_360_image](#load_360_image)
        4. [spawn_360_gif](#spawn_360_gif)
        5. [share_camera](#share_camera)
        6. [socket_spwan_object](#socket_spawn_object)
    2. [Delete Objects](#delete-objects)
        1. [delete](#delete)
    3. [Object Commands](#object-commands)
        1. [play_360_gif](#play_360_gif)
        2. [remote_scale_audio](#remote_scale_audio)
        3. [remote_morph_audio](#remote_morph_audio)
        4. [change_material_color](#change_material_color)
        5. [remove_interaction](#remove_interaction)
        6. [apply_gravity](#apply_gravity)
    4. [Animations](#animations)
        1. [move](#move)
        2. [track_object](#track_object)
        3. [recall_audience](#recall_audience)
        4. [manipulate_skybox_360](#manipulate_skybox_360)
        5. [socket_manipulate_object](#socket_manipulate_object)
        6. [socket_fade_skybox_opacity](#socket_fade_skybox_opacity)
        7. [change_animation](#change_animation)
        8. [lock_waypoint](#lock_waypoint)
        9. [theatre_animation](#theatre_animation)
    5. [Avatar Commands](#avatar-commands)
        1. [jump_to_waypoint](#jump_to_waypoint)
        2. [change_avatar](#change_avatar)
        3. [manipulate_avatar](#manipulate_avatar)
        4. [avatar_change_back](#avatar_change_back)
        5. [hop_to_spawn_point](#hop_to_spawn_point)
    6. [Settings and Permissions](#settings-and-permissions)
        1. [socket_toggle_flight](#socket_toggle_flight)
        2. [socket_toggle_movement](#socket_toggle_movement)
        3. [change_rolloff](#change_rolloff)
        4. [change_scene](#change_scene)
    7. [Meta Cueing](#meta-cueing)
        1. [call_global_function](#call_global_function)
        2. [webapp_cue](#webapp_cue)
        3. [avatar_sheets](#avatar_sheets)
        
----------------------------------------------------------------------------------------

# Cueing Examples
### Load Objects
_Load object files into the scene with transform parameters..._
##### `spawn_item`
NON-SOCKET
```json
  {
    "name": "Spawn_Networked",
    "role": "stagemanager",
    "target": { 
      "type": "glb",
      "dest": "url",
      "src": "https://jigsawhubs-1-assets.onboardxr.live/files/46ae2a98-68c6-4350-9a3b-ed0472c49922.glb"
    },
    "action": {
      "type": "spawn_item",
      "pos": {"x": 0, "y": 10, "z": 4},
      "rot": {"x": 0, "y": 0, "z": 0.9},
      "scale": {"x": 2, "y": 2, "z": 2}
    },
    "trig": {
      "type": "button",
      "groupChain" : "Test_group",
      "time": 0
    }
  }
```
SOCKET
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
##### `spawn_prop`
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
##### `load_360_image`
```json
  {
    "name": "Load_360_Image",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Load_360_Image",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "general" 
        },
        "action": { 
          "type": "load_360_image",
          "src": "https://xrtheater-assets.xrtheater.live/files/be8aac0d-cef1-464e-9026-2eb76e863062.png",
          "position": {"x": 23, "y": 0, "z": -34},
          "scale": {"x": 20, "y": 20, "z": 20}
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain" : "Load_360_Image_group",
      "time": 0
    }
  }
```
##### `spawn_360_gif`
```json
  {
    "name": "Spawn_360_Gif",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Spawn_360_Gif",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": ["participant"]
        },
        "action": { 
          "type": "spawn_360_gif",
          "src": "https://jigsawhubs-1-assets.onboardxr.live/files/5fb239de-5970-4e18-8106-e16d67f17b1a.gif"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain" : "Spawn_360_Gif_group",
      "time": 0
    }
  }
```
##### `share_camera`
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
##### `socket_spawn_object`
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

### Delete Objects
_Delete object files from the scene..._
##### `delete`
NON-SOCKET
```json
  {
    "name": "Delete",
    "role": "stagemanager",
    "target": { 
      "type": "glb",
      "src": "Object_to_delete"
    },
    "action": {
      "type": "delete"
    },
    "trig": {
      "type": "button",
      "groupChain": "Delete_group",
      "time": 0
    }
  }
```
SOCKET
```json
  {
    "name": "Socket_Delete",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Socket_Delete",
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
      "groupChain": "Socket_Delete_group",
      "time": 0
    }
  }
```

### Object Commands
_Manipulate parameters and active components on objects in your scene..._
##### `play_360_gif`
```json
  {
    "name": "Play_360_Gif",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Play_360_Gif",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "general"
        },
        "mapItem": "360_gif_to_fade",
        "fadeDuration": 5000,
        "fadeDelay": 5000
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Play_360_Gif_group",
      "time": 0
    }
}
```
##### `remote_scale_audio`
```json
  {
    "name": "Scale_Audio",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Scale_Audio",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "role":"remoteAudioTest",
        "target": { 
          "role": "performer"
        },
        "action": {
          "type": "remote_scale_audio",
          "minValue": 30,
          "maxValue": 50,
          "itemName": ["Spawn_Networked"],
          "remoteAnalyserNetId": "avatar-rig"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Scale_Audio_group",
      "time": 0
    }
  }
```
##### `remote_morph_audio`
```json
{
    "name": "Morph_Audio",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Morph_Audio",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "role": "remoteAudioTest",
        "target": { 
          "role": "general"
        },
        "action": {
          "type": "remote_morph_audio",
          "minValue": 0,
          "maxValue": 4,
          "name": "Morph_Name",
          "itemName": ["Item_To_Morph"],
          "remoteAnalyserNetId": "avatar-rig"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain" : "Morph_Audio_group",
      "time": 0
    }
  }
```
##### `change_material_color`
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
##### `remove_interaction`
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
##### `apply_gravity`
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

### Animations
_Animate transform and other parameters on objects and avatars..._
##### `move`
```json
  {
    "name": "Move",
    "role": "stagemanager",
    "target": { 
      "type": "glb",
      "dest": "local",
      "src": "Item_to_move"
    },
    "action": {
      "type": "move",
      "duration": 2000,
      "loop": true,
      "pos": {"x": 3, "y": 3, "z": 3},
      "rot": {"x": 0, "y": 39, "z": 0},
      "scale": {"x": 2, "y": 2, "z": 2}
    },
    "trig": {
      "type": "button",
      "groupChain": "Move_group",
      "time": 0
    }
  }
```
##### `track_object`
```json
  {
    "name": "Track_Object",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Track_Object",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": {
          "role": "general"
        },
        "action": {
          "type": "track_object",
          "mapItem": "Item_to_track",
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
    "trig": {
      "type": "button",
      "groupChain": "Track_Object_group",
      "time": 0
    }
}
```
##### `recall_audience`
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
##### `manipulate_skybox_360`
```json
  {
    "name": "Manipulate_Skybox_360",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Manipulate_Skybox_360",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "general",
          "aspect": "scale"
        },
        "action": { 
          "type": "manipulate_skybox_360",
          "mapItem": "Skybox_Item",
          "anime": {
            "targets": "",
            "delay" : 0,
            "loop": false,
            "autoplay": false,
            "easing": "easeInSine",
            "duration": 5000
          },
          "timelines": [
            {"x": 4500, "y": 4500, "z": 4500}
          ]
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Manipulate_Skybox_360_group",
      "time": 0
    }
}
```
##### `socket_manipulate_object`
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
##### `socket_fade_skybox_opacity`
```json
  {
    "name": "Fade_Skybox_Opacity",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Fade_Skybox_Opacity",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "general" 
        },
        "action": { 
          "type": "socket_fade_skybox_opacity",
          "mapItem" : "Skybox_to_fade",
          "fadeDuration" : 3000
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain" : "Fade_Skybox_Opacity_group",
      "time": 0
    }
  }
```
##### `change_animation`
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
##### `lock_waypoint`
```json
  {
    "name": "Lock_Waypoint",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Lock_Waypoint",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "general" 
        },
        "action": { 
          "type": "lock_waypoint",
          "waypoint": "Waypoint",
          "recallAud": true,
          "maxDist": 0.001,
          "anime": {
            "targets": "",
            "delay" : 1000,
            "loop": false,
            "autoplay": true,
            "easing": "easeOutSine",
            "duration": 7500
          },
          "timelines": [
            {"x": -47.389263582373, "y": 2.876098918548304, "z": -7.5257407256272264, "duration": 10000, "delay": 1000}
          ]
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Lock_Waypoint_group",
      "time": 0
    }
  }
```
##### `theatre_animation`
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


### Avatar Commands
_Change avatars and the transform positions of individual avatars..._
##### `jump_to_waypoint`
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
##### `change_avatar`
NON-SOCKET
```json
  {
    "name": "Change_Avatar",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "change_avatar",
      "link":"https://jigsawhubs-1-assets.onboardxr.live/files/0aae1be0-93e4-4aa4-b815-7391dd187f7b.glb"
    },
    "trig": {
      "type": "button",
      "groupChain": "Change_Avatar_group",
      "time": 0
    }
  }
```
SOCKET
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
##### `manipulate_avatar`
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
##### `avatar_change_back`
```json
  {
    "name": "Avatar_Change_Back",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Avatar_Change_Back",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "general" 
        },
        "action": { 
          "type": "avatar_change_back"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Avatar_Change_Back_group",
      "time": 0
    }
  }
```
##### `hop_to_spawn_point`
```json
  {
    "name": "Hop_To_Spawn_Point",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": { 
        "name": "Hop_To_Spawn_Point",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "ghost" 
        },
        "action": { 
          "type": "hop_to_spawn_point"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Hop_To_Spawn_Point_group",
      "time": 0
    }
  }
```

### Settings and Permissions
_Change the settigns and permissions of users..._
##### `socket_toggle_flight`
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
##### `socket_toggle_movement`
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
##### `change_rolloff`
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
##### `change_scene`
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


### Meta Cueing
_Used to manipulate the cueing system or called by cueing system internally..._
##### `call_global_function`
```json
  {
    "name": "Call_Global_Function",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Call_Global_Function",
        "sceneLink": "https://onboardxr.live/scenes/p8nYMHH/avocadoadventuresteps1-7",
        "target": { 
          "role": "general" 
        },
        "action": {
          "type": "call_global_function",
          "function_name": "handleCueObjectAnim",
          "mapItem": "Item_To_Anim", 
          "pause": false
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Call_Global_Function_group",
      "time": 0
    }
  }
```
##### `webapp_cue`
_Webapp cue do not need a type, simply send to role mobilewebapp_
```json
  {
    "name": "Webapp_Cue",
    "role": "stagemanager",
    "target": {},
    "action": {
      "type": "call_method_from_object",
      "object_name": "sockSys",
      "function_name": "cueSocket",
      "_cue": {
        "name": "Webapp_Cue",
        "sceneLink": "https://onboardxr.live/scenes/DsJhAka/npc-a-openingrebuild1125",
        "target": { 
          "type": "glb",
          "role": "mobilewebapp"
        },
        "action": {
          "cuedPopup": false,
          "cuedPopupURL": "https://jigsawhubs.github.io/Jigsaw_data/image/IMG_3673.gif"
        }
      }
    },
    "trig": {
      "type": "button",
      "groupChain": "Webapp_Cue_group",
      "time": 0
    }
  }
```
##### `avatar_sheets`
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
