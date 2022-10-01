---
layout: default
id: optimization
title: optimization
parent: Repository
nav_order: 
---

## Optimization
Many virtual platforms have known limitations for smooth or optimal performance on consumer devices. Below are resources frequently used by OnBoardXR team members to create the most efficient 3D assets for [`Scenes`](./glossary-scene.md) and [`Avatars`](./glossary-avatar.md) 

### Previewing 3D Assets
It can be difficult to quickly preview or open a 3D file on your computer. These two websites allow you to drag and drop a 3D model for previewing:
- [Don McCurdy's GLTF Viewer](https://gltf-viewer.donmccurdy.com/)
- [BabylonJS Previewer](https://sandbox.babylonjs.com/)

### Always export from a Blender Project
Importing an existing .GLB back into Blender frequently generates a known bug of duplicating polygons/triangles and disrupting the rigging of avatars. This unintentionally increases file sizes and some users experience `hand blinking` where the 3D Mesh of the avatar's hands becomes invisible intermitently. 

By making all changes from your original Blender project and exporting a new .GLB files, you can avoid some of these errors. We recommend completing every build session by choosing `Save A Copy` from Blender and including the date (i.e. `projectName_assetName_00_00_0000.blend` in the filename of your project to stay organized.

### Reduce & Bake Materials
- [How to Bake Texture](https://www.youtube.com/watch?v=LLQFopN--LY)
- [UV Wrapping](https://www.youtube.com/watch?v=kZaa8MJyGBs)

We never want to limit creativity, however detailed multi-layered and high-resolution materials quickly increase file size. If you're using several shader nodes and materials, once you are ready to export, `Add` a new `Image Texture` and highlight it before clicking on the `Render Properties` (camera icon). Change your `Render Engine` to `Cycles` and a `Bake` drop down will appear (usually below `Performance`). Set to `Combined` and click `Bake` to generate a single image of your shader nodes. Now you can use this image as the sole `Material` for the avatar. We also recommend you `Save a Copy` of this Baked Image.

Community Member [`Anais Ron`](./active-replica.md) guided [a workshop on optimizing materials here](https://youtu.be/ig-HVbWqZLA). 

### Mixing 2D and 3D Elements
One of our most popular early prototypes was [`Singing Inside a Painting`](https://youtu.be/K7MqCO72hEE?t=77) where a performer individually cut out all the items in a 2D painting and stacked them in 3D space. This use of perspective and low-cost images is also used in [photospheres](./glossary-360.md/#photospheres--hdris) appearing on the horizon of a scene.

By breaking down your `Scene` into areas the audience will or will not interact / travel, 2D elements can work like ["Paper Cut Lightbox](https://en.everybodywiki.com/Lightbox_Papercraft) techniques to make the surrounding area feel more immersive. 

[An example by Clément Fromentin here.](https://sketchfab.com/3d-models/brawlout-stage-jungle-treetop-227e76f0a7cc4647b6b18f42daf30222)

### UV Scrolling Animation & Sprites
- [Mozilla Hubs UV Scroll](https://hubs.mozilla.com/labs/animating-textures-using-the-uv-scroll-component-part-3/)

### Environment Settings
Mozilla continues to update their Blender Addon for advanced features to optimize lighting, emissives, and environment settings `Scenes`.
- [Mozilla *New* Environment Settings](https://www.youtube.com/watch?v=M2gSduQ6x8k&t=804s)
- [Mozilla *Updated* Lightmapping](https://hubs.mozilla.com/labs/ez-bake-lightmapping/)
- [Mozilla Bloom Feature]()

## Substance Painting
Community Member [`Carla Knopp`]() guided [a workshop on Vertex and Substance Painting here](https://www.youtube.com/watch?v=gAyC0SGv0go). 


