steps to run this:

step1:
Create the Manifest File
Inside your project folder, create a manifest.json file. This file will contain metadata about your extension, such as its name, version, and permissions.

step2:
 Create the Popup HTML
Create a file named popup.html in your project folder. This file will be the user interface for your extension.

step3:
Create the Popup JavaScript
Create a file named popup.js in your project folder. This file will contain the JavaScript code for your popup.

step4:
 Add Icons
Create a folder named icons in your project folder and add your icon images (e.g., icon16.png, icon48.png, icon128.png).

Load Your Extension in Chrome
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" by toggling the switch in the top right corner.
Click "Load unpacked" and select your project folder.

Test Your Extension
Once your extension is loaded, you should see your extension's icon in the Chrome toolbar. Click the icon to open the popup and test the button.


Further Development
Background Scripts: For background tasks, create a background.js file and add it to your manifest.json.
Content Scripts: For interacting with web pages, create a content.js file and specify it in your manifest.json.
Options Page: For extension settings, create an options.html page and link it in your manifest.json.


 Load Your Extension in Chrome
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" by toggling the switch in the top right corner.
Click "Load unpacked" and select your project folder.



<h1><b>Test Your Extension
Navigate to YouTube, start playing a video, and switch tabs to see if the video pauses. Switch back to the YouTube tab to see if the video resumes.</b></h1>
