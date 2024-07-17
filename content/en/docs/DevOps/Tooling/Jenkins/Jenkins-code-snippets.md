---
title: "Jenkins"
description: "Code Snippets"


---

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
