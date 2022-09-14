---
layout: default
id: 360
title: 360
parent: Repository
nav_order: 
---

## 360 Video & Images
A 'sibling' medium to virtual reality is 360 film and images, often formated in [Equirectangular Projection](https://en.wikipedia.org/wiki/360-degree_video), whereby the user is surrounded by a media in every direction. This is *not* a three dimensional space or asset that the user can *explore*, but can feel similarly immersive. 

## Photospheres & HDRIs
The most simple application of 360 content is to add one or more media clips to a [Scene](./scenes.md) and toggle the Projection Setting from `Flat` to `Equirectangular' in the Asset Properties window. 

When this setting is applied, the content wraps or folds itself into a `sphere` in your Scene. If a user walks inside the sphere, the content will appear around them. 

This feature can be used to create Scenes that appear much larger than they are by surroudning the 3D elements with a High Dynamic Range Image (HDRI) that appears on the horizon. This method is borrowed from video game development whereby the player may be inside a spaceship of highly detailed 3D assets, but the galaxies or planets seen outside the window do not need to be interactable and can appear as a Equirectangular image surrounding the scene.

## Capturing 360 Assets
There are [many mobile apps](https://topfirms.co/blog/360-degree-camera-apps-for-android-iphone) that will record and `stitch` 360 media from consumer devices. There are also [dedicated cameras](https://www.pcmag.com/picks/the-best-360-cameras) that capture stunning 360 content. 

If you are using 3D software, like Blender, to create environments, you may [render a 360 image of the surrounding environment](https://www.youtube.com/watch?v=w_pAVCv64gw&t=35s). This allows you to save on file size and polygons for areas your users will not explore. 

## Livestreaming 360
OnBoardXR has presented multiple protoypes of [Koryn Wicks](./koryn-wicks.md), as a thought leader in the integration of 360 dance films in virtual reality spaces, often livestreaming dancers around the audience. Since ['Jettison'](./jettison.md), we have found stable results using [Mux](https://www.mux.com) to stream both 2D and 360 video into webVR. 
