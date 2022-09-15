---
layout: default
id: jettison
title: Jettison
parent: Case Studies
nav_order: 2
---

# *Jettison*
The first prototype production to investigate the viability of live theater in web-based virtual reality, utilizing [`The Future Stages`](./future-stages.md)

## Background
*Jettison* is a one act play by Brendan Bradley about three strangers stranded in a life boat who discover a rabbit. The dark comedy was originally commissioned and produced by Impetuous Theater Group as part of the [2007 Swim Shorts 3](https://www.theateronline.com/pb.xzc?PK=16050) in the rooftop swimming pool of the Midtown Manhattan Holiday Inn. The play was subsequently published in [One Acts of Note](https://www.amazon.com/Acts-Note-David-Miguel-Estrada/dp/0578018365) and produced at The Adrienne Arsht Center as part of The Signature Shorts Series in 2008.

*Jettison* received critcism as an 'unproduceable work of theater' given the challenges of an ocean environment, a live animal, and an on-stage drowning. 

## Webcam versus Avatar Performance 
[`Alex Coulombe`](), [`David Gochfeld`](./mrs-nemo.md) and [`Kevin Laibson`]() approached [`Brendan Bradley`](./future-stages.md) with their interest to investigate the viability of live theater in web-based virtual reality, utilizing [`The Future Stages`](./future-stages.md). Throughout the global shutdown, the team remotely workshopped and remimagined the play to determine if the affordances of virtual reality and the immersive web could "solve" previous critcisms of the play. 

The team elected to limit their asset design to default and/or creative commons 3D models and avatars as a proof of concept for what any artist could replicate without a budget or bespoke 3D modeling. 

Actors [Nican Robinson, Nick Carrillo, Ashley Clements and Brendan Bradley](https://www.imdb.com/title/tt14264638/?ref_=nm_flmg_act_15) attended rehearsals and performances from three different cities courtesy of [Pico Neo 2](./glossary-hmd.md) headsets provided by [LBX Immersive](). [`David Gochfeld`](./mrs-nemo.md) provided Direction with [`Roman Miletich`](./cue-system.md) as Technical Lead. [`Alex Coulombe`]() served as the show's stage manager and operator with [`Kevin Laibson`]() leading experiece design, production dramaturgy and house management. [The play was presented at No Proscenium's HERE Festival](https://www.broadwayworld.com/off-off-broadway/article/JETTISON-a-New-Play-Produced-Rehearsed-and-Performed-in-Virtual-Reality-Closes-Out-Here-Online-Oasis-Weekend-20201001) in two different modalities for audience comparison and feedback. 

First actors performed via [`webcameras`](./glossary-webcam.md) composited together into a single video with background replacement and rehearsed eyelines to offer the illusion they were sharing the screen, like a film. 

In the second section, the same actors performed as virtual [`avatars`](./glossary-avatar.md) with their live-action video set to the side to allow audience to observe how their movements puppetted the digital characters.

![Jettison Avatar GIF](https://futurestages.github.io/OnBoardXR_Landing_Page/static/media/clip.jettison.gif)

Three music cues were played throughout the performance to transition between the changes in narrative and modality. The team utilized a [`virtual cable`](./glossary-audio-falloff.md) to pipe audio through a hidden avatar, serving as a public address system in the virtual world. The team also discovered avatars could be scaled down to flea-size and hidden in the ceiling to create a [`god-mic`](./glossary-audio-falloff.md) effect to override the [`spatialized audio`](./glossary-audio-falloff.md). 

After each performance, the audience was invited to ask questions and provide feedback regarding their preferred viewing experience.

## Theater Cues in VR
Throughout rehearsals and performances of *Jettison*, the team began to explore 'injecting' javascript into the web browser's developer console to force events and features that were not part of Mozilla Hubs. This included, spawning and animating objects, raising and lowering a curtain and triggering lighting and audio cues. A series of code packets were saved in a goolge document to be copy-and-pasted when the team wished to deploy a specific cue event.

This method established the groundwork for creating pre-determined snippets of code that could be deployed on command, organzied in a graphic user interaface that only the stage manager could access. 

## Reception
The VR production of *Jettison* was a Finalist for The Producer Guild of America's Innovation Award and was the subject of a short-form documentary. The team was invited to present their findings at Microsoft, AMC-SIGGRAPH and VR•NY. *Jettison*'s underlying principles for simulating the real-world theatregoing experience in virtual reality continue to inform and influence OnBoardXR's practices regarding prototyping, house management, audience onboarding, theatrical cues and artist management. 

## OnBoardXR: Cruise
After the success of *Jettison*, the team sought to scale and codify their findings so that any artist could efficiently and economimcally bring their creative practice into web-based virtual reality. A concept emmerged for a ["dark ride"](https://en.wikipedia.org/wiki/Dark_ride) utilizing Mozilla Hubs' [`scene-switching`](./glossary-scene.md/#scene-switching) feature to move an audience seemlessly through a variety of virtual worlds and performances offering each act complete control over its enivronment, performance style and audience engagement. 

As a reference to the importance of onboarding new artists and audiences into immersive, virtual experiences, the team remounted *Jettison* alongside three other works in the inagural [`OnBoardXR: Cruise`](./obxr-cruise.md). While *Jettison* preserved it's use of default avatars, Roman Miletitch and David Gochfeld oversaw the deployment of a custom Mozilla Client which allowed alterations to the underlying codebase. The original packets of code copy-and-pasted during first production were organized in a [graphic user interface](https://en.wikipedia.org/wiki/Graphical_user_interface) as a series of buttons, visible only to the performer for whom the cue was inteded. 
