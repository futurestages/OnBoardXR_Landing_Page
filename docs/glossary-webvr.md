---
layout: default
id: webvr
title: web-based virtual reality
parent: Repository
nav_order: 1
---

## Web-Based Virtual Reality
OnBoardXR supports live events in the 3D web, coloquially referred to as the metaverse, web3, web virtual reality (webVR), extended reality (XR), and the immersive web. 

For the simplist explanation: we allow artists and audieces to join a shared 3D virtual space using the web browser of their personal, internet-connected device. This allows users without virtual reality equipment to move and look around a 3D experience, often from a 2D screen, like a computer, tablet, or phone. 

So...it's virtual reality...from your web browser. 

The capability for [WebVR was first discovered at Mozilla in 2014](https://en.wikipedia.org/wiki/WebXR) and is the foundation for their open-source, virtual reality platform called [Mozilla Hubs](https://hubs.mozilla.com/docs/welcome.html) with a companion world-building tool, [Mozilla Spoke](https://hubs.mozilla.com/spoke), and an immserive web-broser, [Firefox Reality](https://mixedreality.mozilla.org/firefox-reality/). Mozilla allows users to access and fork the Mozilla Hubs codebase on [GitHub](https://github.com/mozilla/hubs) and deploy their own [Custom Cloud]((https://hubs.mozilla.com/docs/hubs-cloud-custom-clients.html)) version on their own server. This is the underlying `codebase` of OnBoardXR.live.

## Pros & Cons
The unparralled advantage of [`web-based virtual reality`]() is *Accessibility*. Many virtual reality platforms claim that "anyone, anywhere" in the world can host or join a shared virtual reality experience, but this is not necessarily accurate as often platforms require a specific equipment, download, or app store. 

True interoperability and accessibility is only possible on the web, utilizing the devices that users already own. This is why  1/3rd of OnBoardXR audiences and artists report our show(s) as their first-ever live, virtual-reality encounter. 

The downside to accessibility is supporting device limitations, resulting in extremely limited file sizes, image resolultion and concurrent users. 

## The Basics
OnBoardXR pays for server space to deploy and run its own custom cloud of Mozilla Hubs on our GitHub. (You may notice when you go to OnBoardXR.live it takes a few seconds to open. This is to save us costs by setting the server to "sleep" when no one is using it.)

We make regular changes to our fork of the Mozilla Hubs [`codebase`]() to enable new features of our [`cue system`](./cue-system.md). 

Artists can publish a [`Scene`]() (or 3D World) using Mozilla Spoke's world-building tool and then generate a [`Room`](./glossary-role.md), providing them with a unique URL. 

Anyone who clicks or types that unique URL will be able to join the Room with the Artist and see the environment, objects, and lighting, as published in the Scene. The Artist can create as many Rooms as they wish without affecting the original Scene. If the Artist makes changes to the Scene and re-publishes, it will update *all* the Rooms using that Scene. 

Using our [`cue system`](./cue-system.md), Artists are assigned a unique [`Role`](./glossary-role.md) name which they type as an extenstion to the Room URL. When added correctly, the Role enables custom buttons or triggers that do not appear for any other users. 

Using this pipeline, countless artists are able to work asynchronously on the same server across unrelated projects, schedules and applications without disrupting each other, while maintaining privacy for their work and their audience. 

