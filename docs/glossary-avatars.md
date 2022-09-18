---
layout: default
id: avatars
title: avatars
parent: Repository
nav_order: 
---

## Avatars
An `Avatar` is how we refer to [the graphic image that represents a user in the virtual world](https://www.xrtoday.com/virtual-reality/what-is-an-avatar-in-the-metaverse/). Every user in the virtual world is represented by a virtual object, comprised of a `3D Mesh,` decorated by `Texture(s)` and controlled by a `Rig.` These three components may be customized to allow users to represet themselves in creative ways, however these components must adere to specific technical guidelines to function within the virtual experience. 

- The 3D Mesh is a figure or form of the 3D model. 
- The Texture is the material used to colorize the model.
- The Rig is a platform-specific skeleton that interprets tracking data and expresses those movements on the 3D Mesh.

Every user who joins a virtual experience is embodied by an avatar `Rig`, even in cases where the `3D Mesh` is only a pair of hands or the `Texture` is set to be Invisible. Creators have an incredible opportunity *and responsibility* to thoughtfully prepare how they and their audience are embodied in virtual space. 

If you are already familiar with `Avatar` basics and looking for [tips on Optimization, please click here](./glossary-optimization.md).  

## Default Avatars
As an open-source platform, Mozilla Hubs offers several default avatars and documentation on quick customizations to re-skin a default avatar. 
- [Mozilla Default Avatar Blender File](https://github.com/MozillaReality/hubs-avatar-pipelines/tree/master/Blender/AvatarBot)
- [Mozilla's Quick Avatar Customization](https://hubs.mozilla.com/docs/intro-avatars.html)
- [Mozilla's Advanced Avatar Customization](https://hubs.mozilla.com/docs/creators-advanced-avatar-customization.html)

## Changing & Adding Avatars
A Creator can change or upload their Avatar under the `⋮` menu button and clicking `Change Name and Avatar`. This reveals three libraries for `Featured`, `My Avatars`, and `Newest.` Avatars available to all users appear under `Featured` and must be approved and featured by Admin. Creators may access Avatars they have uploaded under `My Avatars` when signed in using their email address. 

To add an Avatar, a Creator first needs to export their customized Avatar as a .GLB file select `+ Create Avatar` to upload this file. Please check the box for `☐ Allow Promotion` before clicking `Save`. Upon saving, we recommend *right-clicking* on the thumbnail of your newly uploaded avatar and select `Copy Link Address`. This is the `Avatar URL` and we recommend you store this information somewhere safe.

Avatar .GLB files may also be uploaded in [`Spoke`](./glossary-scene.md) under `My Assets`. After successful upload, you may right click on the thumbnail of the avatar asset and select `Copy URL`. This provides a [`hosted link`](./cue-system.md) for the avatar that may be queried by the [`cue system`](./cue-system.md).

## Ready Player Me
A Creator can generate a quick, free Avatar using a photograph at [ReadyPlayer.me](https://readyplayer.me/). This site generates an avatar on it's own generic Rig that can be automatically transferred to hundreds of different platforms, [for example Mozilla Hubs](https://blog.readyplayer.me/mozilla-hubs-custom-3d-avatar/).

## Audience Avatars
Audience Avatars have been used to denote an attendee's [`ticket tier`](./glossary-tickets.md/) or [desired level of interaction](./glossary-tickets.md/#audience-avatars). Creators can also create an Audience Avatar that is specific to their show using the same pipeline as their own customized avatar. 

## Best Practices
Avatars can quickly stress the virtual system with exponential poloygons, materials, or file size. A [`Scene`](./glossary-scene.md) or [`Room`](./glossary-room.md) may run smoothly until a "heavy" avatar gets used by several users. *(Ask anyone from [`OnBoardXR: Below Decks`](./obxr-below-deck.md) about the "ballerina incident.")*. Below please find some best practices for customizing Avatars:

### Always export from a Blender Project
Importing an existing .GLB back into Blender frequently generates a known bug of duplicating polygons/triangles and disrupting the hand-tracking. This unintentionally increases avatar file size and some users experience `hand blinking` where the 3D Mesh of the avatar's hands becomes invisible intermitently. By making changes in your original Blender project and exporting new .GLB files, you can avoid some of these errors. 

### Reduce & Bake Materials
We never want to limit creativity, however detailed multi-layered and high-resolution materials quickly increase file size. If you're using several shader nodes and materials, once you are ready to export, `Add` a new `Image Texture` and highlight it before clicking on the `Render Properties` (camera icon). Change your `Render Engine` to `Cycles` and a `Bake` drop down will appear (usually below `Performance`). Set to `Combined` and click `Bake` to generate a single image of your shader nodes. Now you can use this image as the sole `Material` for the avatar. We also recommend you `Save a Copy` of this Baked Image.
