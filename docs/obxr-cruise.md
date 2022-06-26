---
layout: default
id: obxr-cruise
title: MAR'21 - Cruise
parent: History of OnBoardXR
nav_order: 1
---

# OnBoardXR Season 1: 'Cruise'
The inagural showcase of OnBoardXR, premiering March 16, 2021. Virtual attendees received a custom url allowing them freely explore several 3D environments while interacting with live performers and other attendees. A loose theme of "a virtual cruise gone awry" transitioned the audiences from a cruise ship to an underwater ship wreck to a life boat and ending on an island. 

## Production & Sponsors
**The Jigsaw Ensemble, Active Replica and Agile Lens** formed an informal partnership to produce the event and absorb overhead costs to deploy and host a custom Hubs client on XRTHEATER.LIVE. Roman Miletitch supported by David Gochfeld developed a preliminary [`cue-system`](./glossary-cue-system.md) for triggering theatrical cues in [`web-based virtual reality`](./glossary-webvr.md) hosted on server space provided and managed by Jacob Ervin. Brendan Bradley oversaw all outreach and management of participating artists and proejcts, many of whom he cold-contacted on social media.
> 
> Narrative Lead & Curation:
> BRENDAN BRADLEY
> 
> Creative Technologist:
> ROMAN MILETITCH
> 
> Line Producer:
> KEVIN LAIBSON
> 
> Stage Management:
> ALEX COULOMBE
> 
> Technical Lead:
> JACOB ERVIN


## OnBoarding Artists
After the success of [`Jettison`](./jettison.md), the team sought to scale and codify their findings so that any artist could efficiently and economimcally bring their creative practice into web-based virtual reality. A concept emmerged for a [“dark ride”](https://en.wikipedia.org/wiki/Dark_ride) utilizing Mozilla Hubs’ [`scene-switching`](./glossary-scene-switching) feature to move an audience seemlessly through a variety of virtual worlds and performances offering each act complete control over its enivronment, performance style and audience engagement.

Four participant groups were invited to a shared google document to asynchronously track progress, schedules, and assets for individual and collective performance. Performers were guided to successfully build and test their own Spoke [`scenes`](./glossary-scene.md) for their individual show needs in the Mozilla Hubs desktop User Interface (UI) and migrate their final assets to our custom client at xrtheater.live. Once individual shows were stabilized, we initiated a [`"paper tech"`](./glossary-paper-tech.md) to step through every cue and asset needed for all the shows generating a master list to organize for stage management and run of show. 

Within two weeks, OnBoardXR presented four live experiences into a cohesive evening of theater - from a team who had never met each other - with a sold out run of shows, demonstrating a path to create and monetize the work of any live performer using web-based virtual reality and consumer-grade technology.

## OnBoarding Audiences
A customized version of the [`Future Stages`](./future-stages.md) served as the theater lobby whereby attendees would enter the facade of a traditional playhouse and find themselves on the deck of a cruise ship. Kevin Laibson oversaw house management and user experience with a rotating cast of Emcees interacting and troubleshooting attendees before, during and after the performances. A loosely connected narrative arc was improvised around a group of pirates who had kidnapped the captain of the cruise ship, performed by Dasha Kittredge, Ari Tarr and Brendan Bradley.

Upon joining the web experience, users were greeted by Kevin Laibson as a [Ready Player Me](https://readyplayer.me) virtual avatar resembling his real-life self to answer questions or troubleshoot any immediate connectivity issues. Attendees were instructed to click a standardized [`"audience avatar"`](./glossary-audience-avatar.md) which had been optimized to maximize capacity and directed audiences through the theater venue doors. 

Upon entering the theater, the environment transitioned to the deck of a cruise ship where audience members were greeted by Emcees as virtual avatars resembling pirates. Similar to many immersive theater experiences, these Emcees remained in-character for pre-show banter, questions and occassional technical troubleshooting. A music cue alerted all team members when the last expected attendee had checked in and the Emcees gathered the audience to playfull wish them bon voyage. During this prelude, a [`360 video`](./glossary-360-video.md) of a storm spawned around the environment and the lights faded to black as the ['scene switched'](./glossary-scene.md) to an underwater shipwreck environment to begin the first act.

Throughout the performance and run, our pirate Emcees became an increadingly integral part of the show and experience helping guide audience interactions and improvising to cover techincal delays or interruptions. 

## [Strings: Underwater](./unwired-dance.md#Strings)
Below the water, a dancer wears electronic haptic devices that react the the collective actions of the audience through a web interface. While watching the performance livestreamed on camea, the audience will collectively decide how the dance should move. Each instruction as invisible strings to re(animate) a living anddancing (or swimming!) body. Performance and creative technology: Clemence Debaig UI and network: Ed Boucher Music: Christina Karpondini Based on the stage production of Strings originally supported by Brendan Drake and Kate Landenheim. 

## [The Play That Is Going To Change Everything](./spongebob.md)
A scene from The Play That Is Going To Change Everything. the world's first play generated by OpenAI's GPT-3, with supervision from huan being Isak Keller. Featuring: Davis Brinker, Meredith Casey, Zach Christensen, Peter Glanville, and Jin-young Pellow.

## [Jettison](./jettison.md) (Reprise)
Above water, a life boat floats in the open ocean as three strangers discover an unexpected stowaway in this dark comedy about survival. Producers: Bendan Bradley, David Gochfeld, Alex Coulombe and Kevin Laibson. Direction by David Gochfeld. Written by Brendan Bradley. Performed by Nican Robinson, Nick Carrillo, Ashley Clements and Brendan Bradley.

## [This Land is I Land](./active-replica.md)
Vera and Captain Boouffe have been on an island for...a little too long. Help them see paste the pitfalls of their relationship, overcome their self-absorption and conquer the islands' monstrous obstacles to inevitably find what they have been searching for all along. Devised and performed by Ari Tarr and Dasha Kittredge with Kevin Laibson as puppeteer for monsters. Produced by Active Replica with contributions from Jacob Ervin.

## [Cue System](./glossary-cue-system.md)
The team behind OnBoardXR first attempted to use Mozilla Hubs to stage live performances in their production of ['Jettison'](./jettison.md). Roman Miletich, David Gochfeld and Alex Coulombe developed a handful of custom scripts that could be pasted in the developer console of Google Chrome to trigger cues in the Mozilla Hubs desktop User Interface (UI) and update across all clients accessing the same Mozilla Hubs ['"room"'](./glossary-room.md) url.

[`OnBoardXR: Cruise`]() was our first attempt to develop a ['custom cue system'](./cue-system.md) for a stage management to trigger the custom scripts from [`Jettison`](./jettison.md) as a graphic user interface (GUI) within a Hubs Custom Client. We created a custom client at xrtheater.live and created a custom ['“role”'](./glossary-role.md) for each participant with two general features: 
- to set a custom [`avatar`](./glossary-avatar.md) for each role;
- to set a custom [`waypoint`](./glossary-waypoint.md) for each role. 
 
Due to limited time for implementation and integration, only two creators (with coding experience) oversaw integration and implementation of the tool on behalf of all participants. We did not have time to properly test the tool for reliable use across devices, encountering several UI problems in ['vr headset'](./glossary-hmd.md). [`The “roles” were assigned using a “key” extension to the WebVR url`](./glossary-role.md), which also invited user error inputting the correct credentials and making the roles vulnerable for outside parties to access.

In this edition of OnBoardXR, we were able to reliably maintain the server and asset management with increased audience capacity spread over several performances. We experienced difficulty allowing participants to take control of their own customizations and show needs, along with audio falloff and connectivity concerns.

## Reception & Analysis
OnBoardXR enjoyed a sold-out run of pay-what-you-want tickets. We were pleasantly surprised to discover that 64% of our attendees chose to pay for their ticket, with 27% of paying attendees choosing to pay $20+ and the average being just above $12. Survey feedback showed our audience was mostly early adopters to XR technologies who self-identified as "weekly patrons of live performance events prior to the pandemic" and who were familiar with avant guard, experimental theater. A majority of survey respondents priced the ticket value for future events like #OnBoardXR as $10-$15.

Due to server limitations, capacity was limited to 25 interactive tickets/attendees while a livestream of the virtual experience was broadcast to an average of 30 concurrent viewers on YouTube or Twitch while also serving as a [`backstage`](./glossary-backstage.md) "monitor" for our team members outside the experience. 

Retention was just under 100% of attendeees staying through the entire 60-minute journey, with only a handful (throughout the entire run) dropping off due to technical difficulties from their own client/device. However several users did need to refresh their web browser during the show, especially when using first generation ['vr headsets'](./glossary-hmd.md) or mobile phones which seem to struggle with purging the browser cache after scene switching, attempting to retain all previous media/objects.

