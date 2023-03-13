---
layout: default
title: Dev With Us
parent: Overview
nav_order: 4
---

## How to Dev With Us
**This page is a work in progress as we curate the best materials for new collabortors. **

### Prerequisites 
* Make a [Github Profile](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile)
* Downdload a Code Editor ([Visual Studio Code](https://code.visualstudio.com/download) used for below instructions)
* Install [Node & NPM](./#installing-node--npm)

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
Our Technical Director Michael Morran is the Admin on Firebase (where your cues can be stored). You will need your own unique credentials to access and deploy changes to this site. Please contact Michael at `theaterfestonline@gmail.com` to request your own credentials. 

15. In your folder structure in VSCode, look under ThePortFront-TMP > src > base.js
16. Look for `appId: "AbUNchOFl3ttersAndNumbers",
17. Add your API Key between the quotation marks
18. Now you are ready to create and deploy cues *locally* on your computer.
19. In Terminal, type `npm run dev`
20. This should launch your default web browser to the webpage `http://localhost:3000/`

### Mozilla Hubs Default
For additional resources, please see the standard [Dev Overview for Mozilla Hubs](https://hubs.mozilla.com/docs/system-overview.html).
