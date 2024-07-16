---
title: "Nexus-yum"
linktitle: "Nexus-yum"
description: "Configure Yum repositories with Nexus"

---

Managing Yum packages with Nexus Repository Manager

## YUM repositories in Nexus

* Create a repo of type yum (example as shown below)
![Nexus YUM Configurtion](/images/Nexus/nexus-yum1.png)

* Create a repo file in /etc/yum.repos.d/nexus.repo  

```sh
[nexusrepo]
name=Nexus Repository
baseurl=http://localhost:8081/repository/yum-google-chrome/
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
priority=1
```

* yum check-update  ---> this command will check if there is any update for this package

* google-chrome repo fetched from nexus
![nexus repo](/images/Nexus/nexus-yum2.png)

* Browse yum proxy repository in nexus  
 ![Browse yum proxy](/images/Nexus/nexus-yum3.png)

* Update existing package using yum update as shown below
![yum update](/images/Nexus/nexus-yum4.png)

* Browse yum proxy to verify if new package is downloaded
![yum nexus proxy updated](/images/Nexus/nexus-yum5.png)

## How to download the latest available artifact from nexus

There is a metadata file that maintains a latest version of the artifact that you store in Nexus and by using something like the below URL you will be able to download the latest available artifact from nexus

`https://localhost:8443/nexus/service/local/artifact/maven/redirect?r=ABC-releases&g=<group_ID>&a=<artifact>&v=LATEST`

[API : /artifact/maven/redirect](https://oss.sonatype.org/nexus-restlet1x-plugin/default/docs/path__artifact_maven_redirect.html)

### References
