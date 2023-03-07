---
layout: default
title: Dev With Us
parent: Overview
nav_order: 4
---

## How to Dev With Us
**This page is a work in progress as we curate the best materials for new collabortors. For now, we have copied the standard Dev Overview from Mozilla Hubs below**

### Prerequisites 
* Github Profile
* Code Editor (Visual Studio Code or simiar)
* Install Node & NPM

### Setup Steps
1. In top toolbar of VSCode, click Terminal > New Terminal
2. Type `node -v` in Terminal. (Will likely generate error if you've never done this before).
3. Type `npm -v` in Terminal. (Will likely generate error if you've never done this before).
4. Download and Install Node & NPM and try Steps 1-3 again. 

### Installing Node & NPM
* https://www.guru99.com/download-install-node-js.html
* https://nodejs.org/en/download/

### Continued Steps for Local Deployment
5. Create a New Folder on your Computer where you'd like to store this code.
6. In VSCode, go to File > Open Folder to begin working inside this Folder. You may be prompted to agree you "Trust the Authors."
7. Now in your Terminal, type `git clone https://github.com/XHARBOR/ThePortFront-TMP.git`
8. You may be prompted to Download and Install the Command Line Developer Tools. Please follow those instructions.
9. If you needed Step 8, please repeat Step 7. 
10. You should see `Cloning into 'ThePortFront-TMP'...` as it clones the Repository
11. Now we can "Do the Thing!" 

Go to the README page for the Git Repository at: https://github.com/XHARBOR/ThePortFront-TMP.git for more detailed instructions.
Note: You will never `deploy` or `commit` changes to this Repository. 

12. Change Directory by typing `cd ThePortFront-TMP`
13. Now type in Terminal `npm install`
14. You will now need your own API Credentials to contribute your work to our database. 

### API Credentials
Our Technical Director Michael Morran is the Admin on Firebase (where your cues can be stored). You will need your own unique credentials to access and deploy changes to this site. Please contact Michael at `theatrefestonline@gmail.com` to request your own credentials. 


### Mozilla Standard Text
This page outlines opportunities for people who want to contribute to the OnBoardXR project. We welcome external contributions that align with the project's mission around enabling collaboration and communication through shared 3D spaces. You can find information about how to contribute to Hubs and the supporting projects that make up the platform here. 

Contributors are expected to abide by the project's [Code of Conduct](https://github.com/mozilla/hubs/blob/master/CODE_OF_CONDUCT.md) and to be respectful of the project and people working on it. 

The following GitHub projects are part of the Mozilla Hubs platform and governed by these contributing guidelines. We recommend familiarizing yourself with Hubs prior to accessing the repo for OnBoardXR. 

* https://github.com/mozilla/hubs/ - the core Hubs project
* https://github.com/mozilla/spoke - 3D editor for creating scenes
* https://github.com/mozilla/dialog - networking
* https://github.com/mozilla/reticulum - server infrastructure for Hubs
* https://github.com/mozilla/hubs-ops - operations infrastructure for Hubs
* https://github.com/MozillaReality/hubs-discord-bot - Hubs' Discord integration


## Quick Start

We are happy to receive contributions to the OnBoardXR platform in a number of different ways as outlined below. Please note that all contributions are subject to approval by the project maintainers. We ask (but do not require) that those interested in contributing to Hubs consider joining the public [OnBoardXR Discord chat server](https://discord.gg/) to connect with the dev team, ask questions, and view discussions about work being done on the project.

### 💻 Code Contributions
Hubs has a client-server architecture that gives multiple users the ability to connect to a shared room on the server. If you are interested in contributing to the Hubs client, follow the instructions in the [Readme](https://github.com/mozilla/hubs#readme) to get started. If you want to contribute to the networking or infrastructure, consider looking at the [reticulum](https://github.com/mozilla/reticulum) or [Dialog](https://github.com/mozilla/dialog) repositories. If you are interested in working on the code for Spoke, the 3D editor used to create custom environments for Hubs rooms, explore the [Spoke](https://github.com/mozilla/spoke) repository.

For more information on the inner workings of Hubs and the architectural decisions behind the project, check out [this presentation on the Mozilla Hubs Code Base](https://vimeo.com/365531296) by Engineering Lead Greg Fodor.

Issues that are open are tagged. If you explore a bug or feature request that you'd like to fix, make a comment on the case so we know you're looking into it! We try to use the '[good first issue](https://github.com/mozilla/hubs/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)' tag to identify some cases that may be easier than others to begin with as you get started with the code base. 

Steps to contributing code to the Hubs project:

1. Clone the repo you want to contribute to and get things running locally
2. Find an issue or improvement that you want to fix - give us a heads up that you're working on it by dropping in a comment on the issue.
3. Fix the bug! Test out your changes on your local setup and let us know if you have questions or want another opinion about the fix. 
4. Submit your PR for a code review and someone from the team will take a look and give feedback. Make sure you follow up! We'll close the PR if it seems like you've abandoned it by not responding to any questions or comments we leave in the review. If your PR adds a new feature, consider requesting the 'What's New' tag. With the 'What's New' tag, any text in the main body of the PR up to (and including) an image will be added to the [Hubs website](https://hubs.mozilla.com/whats-new). Gifs are especially appreciated! [This pull request](https://github.com/mozilla/hubs/pull/1536) shows an example of how the 'What's New' tag can be used.
5. Celebrate! 🎉 You're helping Mozilla's mission to make the web an open and accessible place for social experiences! 



### 🐛Filing Issues and Feature Requests
Reporting bugs, feature requests, and questions that you have about the platform helps the team prioritize the work that we're doing and make Hubs better! We welcome user-submitted issues and use GitHub's built-in issue tracking for our bug reporting process. 

* If you are filing a bug, please include information about the operating system, device, and browser that you were using when you saw the bug. _Example: Seen on Windows 10 with Firefox 66.0.5 on Oculus Rift_

* The more detail the better! If you are able to reproduce a bug on multiple different browsers or on both desktop and mobile, that information is helpful for us to know about

* Screenshots when appropriate are much appreciated 📷

We will do our best to respond to and tag inbound issues as they are submitted in a timely manner. Bugs will be prioritized according to the following table: 

| Priority  | Criteria | Example |
| ------------- | ------------- | -------------
| P0 | Needs immediate attention. Affects many users and their ability to use core product functionality of connecting to rooms with other users. | No one can enter any Hubs rooms with any VR headset |
| P1 | Address as quickly as possible. Affects many users and their ability to use a common product feature. Workaround is difficult or unavailable. | Teleporting doesn't work for users on Quest with the Oculus browser. |
| P2 | Address when able. Affects some users regularly but mildly, or is a hard-to-repro failure seen rarely that is fixed with an easy workaround. | Lobby camera in Camera mode does not show emojis shared from iOS. <br><br> One user reports getting disconnected after ten minutes in a particular room, but no one else experiences it and they are able to refresh to re-enter.
| P3 | Address when able after P2 bugs are fixed. Affects a small set of users inconsistently in a non-breaking way with an easy workaround. | Every so often, a standalone VR headset will show up as a mobile phone in the user list. Refreshing fixes it. |

### 🎨 3D Art
If you are a 3D artist and want to support what we're doing with Hubs, consider creating and releasing content under a Creative Commons license or creating scenes using the [Spoke web editor](https://hubs.mozilla.com/spoke) and releasing them as remixable environments. Content with low polygon counts that are optimized to run well on the web are much appreciated! In particular, we'd love to see scenes that capture a wide range of experiences. 

### 📜 Documentation 
Our documentation for Hubs is hosted on the [GitHub Hubs Wiki](https://github.com/mozilla/hubs/wiki) section of the project. The documentation for Spoke is hosted on the [GitHub Spoke Wiki](https://github.com/mozilla/spoke/wiki) For contributing corrections or additional pages for the Wiki, please file an issue as a suggestion in the corresponding repository with your proposed content and we will review it and add it to the wiki when all looks good! 

### 🌐 Localization 
Hubs is currently en-US only, but if you would like to work with us on localization efforts, submit a suggestion through the GitHub issues and we'll work with you from there. 

### 🦆 General Help
We believe in the power of community (that's why we're building this, after all!) and know that not all forms of support will come from something outlined here. Feel free to jump into our public [Discord chat server](https://discord.gg/wHmY4nd) to chat with us and ask about how you can get involved! See our [help page](./help.html) for other ways to contact us.

