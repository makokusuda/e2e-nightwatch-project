# Testing with Jenkins

Here are the steps to set up Jenkins!

## Prepare Sample React Project

- Clone [My-Todo](https://github.com/Mr-Ayush25/My-Todo)
- Run `npm run dev` to start the app
- Add `data-test` attributes to elements for testing

## Set Up E2E Test Project

- Follow [Using Selenium Server with Nightwatch](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-test-with-selenium-server.html)
- Add test cases
- Run test script
- Install Allure CLI to your local machine
- Add [Allure reporter](https://nightwatchjs.org/guide/reporters/use-nightwatch-allure-reporter.html)
- Confirm Allure report works
- Push to Github repository

## Run Tests Using Jenkins

### Install and Start Jenkins

- Run `brew install jenkins` to install Jenkins to your local machine
- Run `brew services start jenkins` to start running Jenkins
- Browse to `http://localhost:8080`
- Follow the instructions to complete the installation
  - [Getting started with the Guided Tour ](https://www.jenkins.io/doc/pipeline/tour/getting-started/)

### Configure Jenkins

- Set up SSH connection
  - Create SSH key in `./ssh` folder on the client PC
  - Confirm SSH key is created
  - Copy SSH key
- Add credentials to connect GitHub repository
  - Manage Jenkins > Credentials
  - Click `System` in Stores scoped to Jenkins
  - Click `Global credentials (unrestricted)`
  - Click `Add credentials`
  - Select `SSH Username with private key` in Kind field
  - Input GitHub username to `username`
  - Input SSH key you created above to `Private Key`
  - Click Create and save
- Install plugins
  - [NodeJS Plugin](https://plugins.jenkins.io/nodejs)
  - [Allure Jenkins Plugin](https://plugins.jenkins.io/allure-jenkins-plugin)

### Create Pipeline

- Click `New Item`
- Input pipeline name
- Select `Freestyle project`
- Input Source Code Management
  - Select Git
  - Input GitHub Repository SSH key
  - Select Credentials from above step
  - Set `Branches to build` to `*/main`
- Add Build Environment
  - Check `Provide Node & npm bin/ folder to PATH`
  - Select `NodeJS Installation` from above
- Add Build Steps
  - Select `Execute shell`
  - Add scripts
- Add Post-build Actions
  - Select `Allure Report`
  - Results path should be `allure-results`
- Save

### Run Pipeline (Run Tests)

- Navigate to pipeline detail by clicking pipeline name on Dashboard
- Click `Build Now`

### See Test Results

- Click build number (#XX) displayed on the left side of the page
- Click `Allure Report`
- It will take you to the test result page

### Stop Jenkins

- Run `brew services stop jenkins`

## Notes

Download ChromeDriver and save it in lib folder  
Run test using Selenium Server

```
npx nightwatch [path] --env selenium.chrome
```

Execute shell looks like this:

```shell
npm install
npx nightwatch ./test/
```
