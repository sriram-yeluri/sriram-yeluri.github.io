---
title: "SonarQube"


---

Tool for Code Quality Analysis

# Docker container for sonarqube

```sh
docker pull sonarqube
docker run -d --name sonarqube -p 9000:9000 <image_name>

# once the container has started successfully, you can open below url to access sonaqube.
# http://localhost:9000/
```

## Python implementation of sonarqube-cli

[py-sonarqube-cli](https://github.com/sriram-yeluri/py-sonarqube-cli)


## API End points

To expose all rules of a technology from sonarqube

api/rules/search?languages=xml


getInstalled Plugins: 
/api/plugins/installed

## References

[SonarQube](https://www.sonarqube.org/)  
[web api](http://localhost:9000/web_api)



