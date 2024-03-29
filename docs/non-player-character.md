---
layout: default
id: non-player-character
title: Non-Player Character
parent: Case Studies
nav_order: 5
---

# Non-Player Character
A hybrid, interactive musical theatre production where a live, singing actor portrays a non-player character ('NPC') in a fictional video game who witnesses the death of the hero character and turns to the audience to guide them through the fives stages of grief (represented as five virtual worlds). 

With a 21st-century approach to traditional musical theatre [Workshops](https://en.wikipedia.org/wiki/Workshop_production) and Out-Of-Towners, writer and performer [`Brendan Bradley`](./future-stages.md) repurposes the virtual festival circuit to experiment with new musical numbers and audience interactions for NPC, appearing live at FIVARS, Mozilla Festival, and winning Best in VR Interactive Immersive Experience at The Queensland (Qld) XR Festival while developing a Prototype Performance for The Museum of Science in Boston. 

## Background
During the 2020 shutdown, Brendan Bradley live-streamed a [one-man show showcasing 5 virtual tools](https://playbill.com/article/watch-this-live-virtual-reality-theatre-performance-from-the-museum-of-science) for storytelling "at" The Museum of Science, including live theater in [`web-based virtual reality`](./glossary-webvr.md). The following year, Bradley was invited to write and perform an interactive musical theatre prototype, *[`Non-Player Character`]()*, at [The Mugar Omni Dome Theater](https://www.mos.org/press/press-releases/Adult-Programming-Fall-2021) allowing on-site audiences to enter either as a Participant in the VR Concert wearing a VR headset or a Spectator of the virtual experience projected on [the IMAX dome screen](https://en.wikipedia.org/wiki/Mugar_Omni_Theater). In hopes of making the experience accessible to as many people as possible, Bradley was asked to limit the prototype to a 15-minute "show loop" he could perform consecutively for 4 hours. Audiences could choose to experience one short loop or watch multiple versions to observe the variability of game play style and audience interactions.

## Story Structure & Development
Bradley began devising *Non-Player Character* in January of 2021 and sketched a few songs and characters for solo rehearsal and writing sessions. Based on his experience performing in live virtual reality projects like [`*Jettison*`](./jettison.md), [`*OnBoardXR*`](./obxr-cruise.md) and [*Welcome to Respite*](https://www.imdb.com/title/tt15239690/?ref_=nm_flmg_act_8), Bradley wished to further investigate the responsive role of "Actor-Guide," theorizing that this relationship with the audience could be inverted by portraying a character without any agency who relied upon attendees to navigate him through open-world environments. Bradley observed the early writing of *NPC* became most satisfying when balancing the tension of two dualing formats: 
- [Long-form Improvisational formats](https://en.wikipedia.org/wiki/Improvisational_theatre#Non-comedic,_experimental,_and_dramatic,_narrative-based_improvisational_theater) similar to [talk radio](https://en.wikipedia.org/wiki/Talk_radio) where Hosts allow the audience to call-in and influence the show with unpredictable reactions that range from comical to heartbreaking;
- [A Book Musical](https://en.wikipedia.org/wiki/Musical_theatre#Book_musicals) format whereby the performer can command complete control of the story and audience through well-rehearsed, emotionally resonate song, stage craft and spectacle. 

Early workshops of *Non-Player Character* centered around an ebb-and-flow of participation and performance. Bradley reached out to composer [Maurice Soque Jr.]() to help arrange and produce the songs and backing tracks from his early scratch tracks. 

### Asset Creation
*Non-Player Character* was an opportunity for Bradley to reflect on the limitations and criticsms of webVR, primarily the low-poly, compressed graphical visuals. On a technical scout at The Museum of Science, Bradley captured a LIDAR scan of the entire Mugar Omni Theater as well as articfacts and architectual elements around the Museum. These all became incorporated into environments, props and characters for the final show. 

Inspired by his experience performing in *Welcome To Respite*, Bradley experimented with Blender [`shape keys`]() to add [`weighted bones`]() to the face of the non-player character. By pressing a combination of buttons on the left controller, the character's face stretched to appear more expressive than default Mozilla Hubs avatars. In contrast, audience avatars were not given facial features so the audience focus would naturally gravitate toward the protagonist.

During rehearsals, it was decided to preserve the default "head wobble" of Mozilla Hubs avatars whereby the avatar's head scales slightly larger when the microphone detects audio input, thus providing a visual to the viewer of which avatar is speaking. The team also preserved the default [`idle animation`]() of blinking eyes and even added an additional idle animation to simulate slight "breathing" to the chest of the avatar to give the character more lifelike appearance.  

[`Nametags`]() were forced "off" in the experience and all user devices forced to "Medium" render quality to increase audience immersion.

### NPC: *'Let's Get To The Bottom Of This'*
Bradley approached [`Michael Morran`](./michael-morran.md) as a Technical Director to explore and stablize features they both hoped to bring to the OnBoardXR [`cue system`](./cue-system.md) using *Non-Player Character* as a prototype. For [`OnBoardXR: Mythos and Monsters`](./obxr-mythos-monsters.md) they presented a first musical number *'Let's Get To The Bottom Of This'* wherein the audience encountered Bradley portraying a singing octopus [`avatar`](./glossary-avatar) in an open ocean environment, simulating "swimming" by using the "fly" mechanic and inviting audience to banter with Bradley and sing-a-long.  

This superficially simple and silly musical performance helped stabilize and showcase [`cue-grouping`](./glossary-cue-group.md), [`god-mic`](./glossary-god-mic.md), [`avatar manipulation`](./glossary-avatar-manipulation.md) and further [`virtual cable`](./glossary-virtual-cable.md) integration, all of which were made available to the other participants of [`OnBoardXR: Mythos and Monsters`](./obxr-mythos-monsters.md) and [`OnBoardXR: Port of Registry`](./obxr-port-of-registry.md).

*'Let's Get To The Bottom Of This'* was presented for the general public and an official selection of FIVARS 2021 Festival as presented by OnBoardXR.

### Early Playtesting
In anticiption of the prototype performance at The Mugar Omni Theater, Bradley and Morran began running the entire show loop daily. Bradley would drop off a kit of [`virtual reality headsets`](./hmd.md) and instructions to friends, sanitizing and charging them between deliveries. Then he would return home to perform the live experience and receive feedback. These virtual "previews" drastically influenced and identified last-minute changes to the narrative, asset design and user experience. 

### NPC: Prototype Performance
The *Non-Player Character* prototype show loop performed for 4 consecutive hours at The Museum of Science's Mugar Omni Dome Theater for dozens of active participants and spectators. A videographer recorded the entire event and highlights from various loops were edited into an archive that may be privately screened for future consideration and production. 

### NPC: *'Enough'*
For [`OnBoardXR: Port of Registry`](./obxr-port-of-registry.md) Bradley and Morran wished to expand a dramatic moment towards the very end of the story where audiences consistently were not responding as intended. A new song, *'Enough,'* was developed as ["the eleven o'clock number"](https://en.wikipedia.org/wiki/11_o%27clock_number) and the introduction of [`animation tables`](./glossary-animation-tables.md) to the [`cue-system`](./cue-system.md) allowed a prop lantern to "come to life" in the virtual world, illustrating the story themes and drawing attention to the importance of "lighting the way" to help the NPC character. Designer [`Sage Freeman`](./sage-freeman.md) and Bradley developed the lantern asset with animation events that could be played or paused via the [`cue system`](./cue-system.md). 

*'Enough' was presented for the general public and an official selection of Mozilla Festival 2022 as presented by OnBoardXR.* Through [`OnBoardXR: Port of Registry`](./obxr-port-of-registry.md) and [`The New York University Lab`](./nyu-lab.md), Bradley met [`Jason Wang`](./jason-wang.md) whom he invited to join the team as a User Experience Designer to further test and challenge how the audience interactions and mechanics connect to the narrative and themes of the *Non-Player Character*.

## [Workshop Cast Recording](https://futurestages.github.io/npcmusical/docs/press-and-releases/)
As the team continued to explore avenues for hybrid, on-site performances and festivals, they recognized *Non-Player Character*'s technical advantage to spin up a show any time they wished actually created a blindspot in their pitching materials, especially lacking a professionally recorded version of the original music. [Maurice Soque Jr.]() returned to produce and master a **[Workshop Musical Cast Recording](https://music.apple.com/album/1634852775?app=itunes)** of the prototype performance, pointing out that the live virtual performances Bradley was already doing could be performed from anywhere with wifi, including [Fever Recording Studio](https://feverrecording.com/) in North Hollywood, California. The two strategically scheduled and released recordings of the original music to include some of the raw enegery and responsiveness from the live show.
A listening room for *Non-Player Character* was included in the [`"OnBoardXR presents..." Charting The Stars`](./obxr-charting-stars.md) season for Active Replica's Constellation Project. 
