---
title: "Jenkins"
description: "Code Snippets"


---



Jenkins pipeline code





## code-snippets

### How to get list of all installed plugins

```groovy
import jenkins.model.Jenkins 
Jenkins.instance.pluginManager.plugins.each{ 
  plugin ->  
    println ("${plugin.getDisplayName()} (${plugin.getShortName()}): ${plugin.getVersion()}") 
}
```

### How to test NodeJS

```groovy
node('linux') {
stage('Linux :: NodeJS :: Default' ) { 
    sh 'node --version' 
}
stage('Linux :: NodeJS :: v8.9.0' ) {
    def nodejs = tool name: 'Linux NodeJS v8.9.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    sh "$ {nodejs}/bin/node --version"
}
stage('Linux :: NodeJS :: v8.9.0:: withEnv' ) {
    withEnv(["PATH+NODE=${tool 'Linux NodeJS v8.9.0'}/bin"]){ 
        sh 'node --version' 
        }
    }
}
```

### Parallel Pipelines

```groovy
def labels = [
    'node1',
	'node2'
    ]
def builders = [:]
for (x in labels) {
    def label = x 
    // Create a map to pass in to the 'parallel' step so we can fire all the builds at once
    builders[label] = {
      node(label) {
        // build steps that should happen on all nodes go here
        }
    }
}
parallel builders
```

### Android sdk tools update

```groovy
node('android'){
    stage('checkoutSCM'){
        git credentialsId: 'CREDENTIAL_ID', url: 'repo-url'
    }
    stage('Validation'){
        echo 'validated'
    }
    stage('BuildTool Install'){
        dir('slave-android/provisioning/install'){
            sh 'ls -ltr'
            sh 'chmod +x install-android-sdk-buildtools.sh'
            sh './install-android-sdk-buildtools.sh 26 0.1'
        }
    }
    stage('cleanUp'){
       deleteDir() 
    }
}
```

### Update android sdk from Jenkins pipeline

```groovy
def ANDROID_HOME='/Users/jenkinsci/Library/Android/sdk'  [New situation will be ANDROID_HOME='$HOME/SOLO/Android/sdk' ]
node('android'){
    stage('List AndriodSdk'){
        sh "echo ${ANDROID_HOME}"
        sh '''cd /Users/jenkinsci/Library/Android/sdk/tools/bin/ &&
            ./sdkmanager --list --proxy=http --proxy_host=xxxxxxxx.com --proxy_port=8080'''
    }
    stage('Update AndriodSdk'){
        sh "echo ${ANDROID_HOME}"
        sh '''cd /Users/jenkinsci/Library/Android/sdk/tools/bin/ &&
            ./sdkmanager --update --proxy=http --proxy_host=xxxxxxxxx.com --proxy_port=8080'''
    }
    stage('Check AndroidVersion'){
        sh '''cd /Users/jenkinsci/Library/Android/sdk/tools/bin/ &&
            ./sdkmanager --version'''
    }
}
```


