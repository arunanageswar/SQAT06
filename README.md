This awesome project is done by Aruna at Centennial College
H1---Automation of Web Application using the Open source tools as Selenium Standalone, Webdriverio ,Cucumber Framework, Chai framework, Github, NodeJs, Gitbash, Windows OS

H2---Prerequsites steps to be followed before running the automation---
Software's to be installed are listed below
Download Visual studio code according to the system 32bit / 64 bit
Install nodejs version 7.8.2 
Install gitbash for windows, signup on github.com if you don't have an account
Install the packages webdriverio --package version 4.7.1
Install npm selenium standalone latest (version 5.9.0)globally by the command at Windows command prompt -- 'npm install selenium standalone -g'
Install selenum standalone locally by the command --'selenum-standalone install'
Install CucumberJs, ChaiJs by commands --'npm install cucumber' & 'npm install chai'

H3---Clone the code from professor's Repository
Steps
1. Signed up on Github and once logged in then searched for Professor's IzzatBamieh/SQAT06 Repository
2. Click on Clone and copy the URL 
3. Open the Command Prompt and enter the command git clone <url> Url is the copied one from professor's repository  (this also can be done on Gitbash)
4. enter the command cd SQAT06 and you will be in directory
5. Open Visual Studio Code and open the file folder SQAT06 
6. Install npm by the command --npm install --it is going to install entire package 
7. Selenium Standalone to install --command is --npm install selenium-standalone@5.9.0 -g


H4---Automation Scripts for Invalid signup & Valid Signup steps----
1. Features file is created and habe subfolders which are Steps.js, hooks.js , world.js and Scenaro.feature
2. At Scenario.feature ---Scenario's are written in a simple gherkin language i.e Given, When & Then
3. At Steps.js ---scripts are written which are based with the scenarios to cover the test scripts for automation testing
4. world.js ---webdriverio, browser, functions etc are initialized 
5. hooks.js---After, before functions are initialized 
6. All the work is saved

H5---Execution of the scripts---
1. Saved all the work at all the files of the features folder
2. Open command prompt and be in the directory and start the selenium standalone server and the command is---"selenium-standalone start"
3. Open another command prompt and be in the directory--run this command to execute the scripts -command is---".\node_modules\.bin\cucumber-js"
4. Webdriver invokes the browser which opens as per the test scripts written in Steps.js file 
5. Scripts are executed, if the scripts are error free then all scripts passes, if they fail then scripts are failed and the details are displayed at the command prompt
6. Test scripts can be postive and negative cases 
7. When scripts passes then at command prompt displays in a format ---for my test scripts for this assighment have ---2 scenarios (2 passed) 6 Steps(6 passed) and the time took to execute all the test scripts 1m21.624s


Adding files, committing and Pushing to github repository
Commands are 
git status
git add file name
git commit -m "updated code"
git push arunanageswar 



