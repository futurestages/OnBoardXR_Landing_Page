---
layout: default
id: scenes
title: scenes
parent: Repository
nav_order: 
---

## Scenes
A `Scene` is how we refer to 3D worlds or environments designed and published by our Creators. Effectively, this is the customizeable "Stage Area" for our Creators to rehearse and perform their work in virtual reality. Scenes function similary to a website template in establishing the layout and design of the virtual experience. 

If you are already familiar with `Scene` basics and looking for [tips on Optimization, please click here](./glossary-optimization.md).  

## Spoke
Mozilla Hubs provides [a cloud-based world-building tool, called Spoke](https://hubs.mozilla.com/docs/spoke-creating-projects.html), which empower Creators to Create or Upload new `Scenes`. This includes a Library of Default Scenes created by the Community, a basic Architecture Kit, integration with Sketchfab, and dozens of Elements to quickly build your own environment (lights, media, spawn points, etc).

It is free to create a `+ New Project` at [https://hubs.mozilla.com/spoke](https://hubs.mozilla.com/spoke) and either `Remix` an existing Community Scene, `Create an Empty Project` or `Import from Blender` to upload a .blend file. 

We advise *against* directly uploading Blender projects if you wish to collaborate with other team members as only the creator (or uploader) has access to their Spoke Project(s) and there is no ability to adjust `Elements` online if you use the `Import from Blender` option. 

However, any Scene created *within* Spoke can **`Export Legacy Spoke Project` under `File > Export`** and send to another user to `Import Legacy Spoke Project` for collaboration or troubleshooting. Please also note the URL while working in Spoke, ending in `/spoke/projects/eX@mp1e` This is the `Project URL` for your Scene.

Mozilla provides [documentation and best practices](https://hubs.mozilla.com/docs/spoke-user-interface.html) for Spoke. When you are satisfied with your `Scene` please click the `Publish to Hubs` blue button. You will be prompted to provide a `Scene Name` and checkboxes to `Allow Remixing` and `Allow Promotion`. (Checking these boxes allows other Community Members access to create their own Project using your template, but *will not* alter your original Project.) Once complete, click `Save and Publish`. 

Publishing will generate a `Performance Check` offering suggestions for optimzing your Scene. Please click `Publish Scene` to proceed with publishing. When publishing is complete, a prompt will allow you to `View Your Scene`. Please note the URL of this new page, ending in `/scenes/ExAmPL3` This is the `Scene ULR` for your Scene. From this page, Creators may [`Create a Room with this Scene`](./glossary-room.md) or `Edit in Spoke`.

## 3D Software
- [Mozilla Hubs Blender AddOn Info](https://hubs.mozilla.com/labs/what-is-the-blender-add-on/)
- [Mozilla Hubs Blender AddOn Download](https://github.com/MozillaReality/hubs-blender-exporter/releases)
- [Mozilla Hubs Optimize Tips](https://hubs.mozilla.com/labs/how-to-optimize-your-scenes/)

Creators can also use more robust 3D modeling software to build more elaborate Scenes, with the most successful workflow being [Blender](https://blender.org). Before getting started, Creators should download and install the [Mozilla Hubs Blender AddOn](https://hubs.mozilla.com/labs/what-is-the-blender-add-on/) in their version of Blender, under `Edit > Preferences > Add-ons`. This provides access to many advanced features and tools under the `Object Propoerites` tab (the orange square icon). 

Creators with advanced 3D experience should be aware that `Scenes` appear very differently in Blender than they do in Mozilla Hubs. We recommend exporting your work *early and often* to test upload to `Spoke` to determine how Hubs rendering will compress/alter your intended shaders.
From [Mozilla's blog](https://hubs.mozilla.com/docs/system-overview.html):
> The front-end is built with React for 2D components and Three.js and A-Frame for the 3D scene. The 3D content is synced across clients using networked aframe. Physics run on the client using Ammo.js/Wasm. *Update 2022: Mozilla Hubs plans to replace AFRAME components & systems with [BitECS](https://github.com/mozilla/hubs/pull/5536)*

## Editing threeJS
Creators can also create and work with threejs models using the [threejs Editor](https://threejs.org/editor/)

## Scene Switching
One of the most underrated features of Mozilla Hubs is the ability to [Change Scene](https://hubs.mozilla.com/docs/hubs-room-settings.html). Under the `⋮` menu button, Creators can select `Room Info & Setttings` and click `Change Scene`. This provides a library of all the Spoke Projects available to that Creator's email address. Clicking the thumbnail of a desired Scene will change the environment of the Room to the selected Scene. Quite theatrically, Mozilla Hubs *fades to black* as it changes the Scene. 

This feature is the underlying inspiration behind the entire OnBoardXR Seasonal Showcase: Various creators can create their own scene that may be cued on-demand within the same `Room`. Just like a cabaret, the audience experiences a brief (3 second) darkness while a new Act takes over the stage. 

Creators may also change the Scene using the [`Chat`](./glossary-chat.md) by typing the command `/scene` and their desired `Scene URL`. Example: `/scene https://hubs.mozilla.com/scenes/ExAmPL3` This shortcut is the underlying inspiration behind the OnBoardXR `[cue system`](./cue-system.md) based on the discovery that scripted commands could be deployed in-browser to change the virtual world. 


