---
layout: default
id: audio-falloff
title: audio falloff
parent: Repository
nav_order: 
---

## Audio Falloff
The `audio falloff` is how we refer to the volume of another user or media file in a 3D environment based on proximity to that user or object. Many 3D platforms enable 3D sounds, referred to as `Spatialized Audio` whereby audio in the virtual world responds based on both distance and direction of the user. This allows more natural communication as users can hear the location of an audio source and follow it. For example, if you were in a group of users, each user's audio input would be heard from their releative location, rather than through a single, mono or stereo output. 

The [Mozilla Hubs blog](https://hubs.mozilla.com/docs/system-overview.html) explains, 
>
> *"Voice, video and audio traffic is handled via WebRTC Server based on the open source “mediasoup” project. (We formerly used the “Janus” project as our > WebRTC server). It uses an SFU (Selective Forwarding Unit) topology where each participant is sending their data to a central routing machine which then > sends back all participants data to each participant."*
>

When designing a [`Scene`](./glossary-scene.md), setting the `audio falloff` can be difficult. Community Member [Kojiro Yano](https://twitter.com/kojirovr/status/1525614648254291971?s=21&t=4ehgJlrJIO-QQyC-4P_LOQ) prepared a Google Document to help calculate the appropriate values.

## Microphone Input
Settings, Mute, Mute All

## Virtual Cable
During [`OnBoard: Cruise`](./obxr-cruise.md) the team experimented with audio drivers to "pipe" pre-show music into the virtual world via the stage manager's [`avatar`](./glossary-avatar.md). This involved using third party software, such as [VB Audio](https://twitter.com/VB_Audio) or [Blackhole](https://existential.audio/blackhole/) to act as a virtual audio driver to route audio between applications. Music was output from one application and defined as the user's [`preferred microphone`]() in Mozilla Hubs. This treated the music as the user's voice and broadcast the sound into the virtual [`Room`](./glossary-room.md).

For [`Non-Player Character`](./non-player-character.md): Let's Get To The Bottom, the team expanded this application by adding physical audio interface to the performer's setup. Latency and connectivity issues occasionally prevented performers from reliably singing along with music in-world. The audio interface could receive multiple audio sources from the performer, such as a microphone and musical backing track, and broadcast them as a single audio source. If latenecy or connectivity issues did occur for an individual user, there would be no sync issues between the performer's voice and the music. The performer could also monitor and mix their playback indepedently from what the audience received.

Furthermore, the audio interface allowed the performer to receive audio from the audiences through their same in-ear monitor as their musical backing track so they did not need to switch audio sources throughout the performance. Attendees experienced a performer who could seamlessly hold a conversation and then begin singing, in sync, with orchestrations. (*Note: The ability to set a USB mix-minus on the audio interface prevented audience's audio from `looping back`. 

## God Mic

## Audio Zones
Mozilla has developed more advanced support for different audio performance in different regions of a 3D environment. [More information can be found on their blog.](https://hubs.mozilla.com/docs/spoke-adding-scene-content.html#audio-zones)
