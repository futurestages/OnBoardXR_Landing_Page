---
layout: default
id: scenes
title: scenes
parent: Repository
nav_order: 
---

## Scenes
A `Scene` is how we refer to 3D worlds or environments designed and published by our Creators. Effectively, this is the customizeable "Stage Area" for our Creators to rehearse and perform their work in virtual reality. Scenes function similary to a website template in establishing the layout and design of the virtual experience. 

## Spoke
Mozilla Hubs provides [a cloud-based world-building tool, called Spoke](https://hubs.mozilla.com/docs/spoke-creating-projects.html), which empower Creators to Create or Upload new `Scenes`. This includes a Library of Default Scenes created by the Community, a basic Architecture Kit, integration with Sketchfab, and dozens of Elements to quickly build your own environment (lights, media, spawn points, etc).

It is free to create a `+ New Project` at [https://hubs.mozilla.com/spoke](https://hubs.mozilla.com/spoke) and either `Remix` an existing Community Scene, `Create an Empty Project` or `Import from Blender` to upload a .blend file. 

We advise *against* directly uploading Blender projects if you wish to collaborate with other team members as only the creator (or uploader) has access to their Spoke Project(s) and there is no ability to adjust `Elements` online if you use the `Import from Blender` option. 

However, any Scene created *within* Spoke can **`Export Legacy Spoke Project` under `File > Export`** and send to another user to `Import Legacy Spoke Project` for collaboration or troubleshooting. Please also note the URL while working in Spoke, ending in `/spoke/projects/eX@mp1e` This is the `Project URL` for your `Scene`.

Mozilla provides [documentation and best practices](https://hubs.mozilla.com/docs/spoke-user-interface.html) for Spoke. When you are satisfied with your `Scene` please click the `Publish to Hubs` blue button. You will be prompted to provide a `Scene Name` and checkboxes to `Allow Remixing` and `Allow Promotion`. (Checking these boxes allows other Community Members access to create their own Project using your template, but *will not* alter your original Project.) Once complete, click `Save and Publish`. This will generate a `Performance Check` offering suggestions for optimzing your Scene. Please click `Publish Scene` to proceed with publishing. When publishing is complete, a prompt will allow you to `View Your Scene`. Please note the URL of this new page, ending in `/scenes/ExAmL3` This is the `Scene ULR` for your `Scene`. From this page, Creators may `Create a [Room](./glossary-room.md) with this Scene` or `Edit in Spoke`.

## 3D Software
Creators can also use more robust 3D modeling software to build more elaborate Scenes, with the most successful workflow being [Blender](https://blender.org). Before getting started, Creators should download and install the [Mozilla Hubs Blender AddOn](https://hubs.mozilla.com/labs/what-is-the-blender-add-on/) in their version of Blender, under `Edit > Preferences > Add-ons`. This provides access to many advanced features and tools under the `Object Propoerites` tab (the orange square icon). 

Creators with advanced 3D experience should be aware that `Scenes` appear very differently in Blender than they do in Mozilla Hubs. We recommend exporting your work *early and often* to test upload to `Spoke` to determine how Hubs rendering will compress/alter your intended shaders.
From [Mozilla's blog](https://hubs.mozilla.com/docs/system-overview.html):
> The front-end is built with React for 2D components and Three.js and A-Frame for the 3D scene. The 3D content is synced across clients using networked aframe. Physics run on the client using Ammo.js/Wasm. *Update 2022: Mozilla Hubs plans to replace AFRAME components & systems with [BitECS](https://github.com/mozilla/hubs/pull/5536)*


## Scene Links

## Scene Switching
