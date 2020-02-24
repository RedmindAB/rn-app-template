## Create React-Native app

`npx react-native init {PROJECT_NAME} && cd {PROJECT_NAME}`

## Download files from this repository

`svn export https://github.com/RedmindAB/rn-app-template/trunk src`

## Run setup script

`src/setup.sh`

## Xcode setup

Open up xcode and go to `File > Workspace Settings` then set build system to `Legacy Build Build System`

## React-Navigation setup

[Add the following two lines to dependencies section](https://reactnavigation.org/docs/en/getting-started.html) in `android/app/build.gradle`


```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```