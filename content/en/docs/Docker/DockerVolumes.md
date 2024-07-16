---
title: "Volumes"

---

## Nexus

### Sonatype Nexus Docker with persisent data

``` sh
chown -R 200 /home/sriram.yeluri/Data/NEXUS_DATA  

docker run -d \
-p 8081:8081 \
--name nexus \
-v /home/sriram.yeluri/Data/NEXUS_DATA:/nexus-data \
sonatype/nexus3
```

## Jenkins

### Jenkins with persisent data

``` sh
docker run -p 8080:8080 -p 50000:50000 \
--name jenkins \
-v /home/sriram.yeluri/Data/JENKINS_HOME:/var/jenkins_home \
jenkins

docker run -p 8080:8080 -p 50000:50000 \
--name jenkins \
-v /home/sriram.yeluri/Data/JENKINS_HOME:/var/jenkins_home \
jenkins/jenkins:lts
```

### Jenkins Operations Center - JOC  

``` sh
docker run -p 8089:8080 -p 50001:50000 \
--name cjoc \
-v /home/sriram.yeluri/Data/JENKINS_OC_HOME:/var/jenkins_home \
cloudbees/jenkins-operations-center

#Initial secret can be found at below path
/var/jenkins_home/secrets/initialAdminPassword
```

## Postgres

``` sh
docker run \
--name postgres \
-e POSTGRES_PASSWORD=secret \
-d postgres \
-v /home/sriram.yeluri/Data/PG_DATA:/var/lib/postgresql/data
```
