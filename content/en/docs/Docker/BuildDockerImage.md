---
title: Building Images
linktitle: Building Docker Images
---

### Dockerfile

* Dockerfile is a simple text file to create a docker image.  
* Default file name is "Dockerfile"  

### Example dockerfile

```docker
ENV
FROM
LABEL maintainer=""
      version=""  
WORKDIR
RUN
VOLUME
EXPOSE
ENTRYPOINT --> Executes custom scripts while starting a docker container
           --> Do not add layer to docker image
CMD
```

{{< alert >}}
There can only be one CMD instruction in a Dockerfile. If you list more than one CMD, then only the last CMD will take effect.
{{< /alert >}}

```sh
# Example dockerfile
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
```

### How to build a docker image

```sh
#docker image build -t <image_name>:<version_tag> .
docker image build -t ansible:v1.0 .
```

### How to run the container

```sh
docker container run -d -t --name ansible ansible:v1.0 bin/bash
```

### How to connect to a running container

```sh
$ docker container exec -it <container_id> bash
# (or) to run shell command directly on a running container, then
$ docker container exec <container_name/id> cat /appl/readme.txt
```

### Data persistance and volume sharing between running containers

In docker, sharing of volumes can be done in 2 ways

* Add VOLUME in dockerfile , example VOLUME [/appl]
* [or] Add -v <volume_path> as a flag while running the container to expose the path, example below

{{< alert >}}
    If volume is exposed in either of the above methods, then both the src and dst containers should run on the same physical host
{{< /alert >}}

```sh
docker container run --rm -itd --name <container_name> -v $PWD:/appl -v /appl/data
```

Inorder to access data from other containers, use volumes-from flag while running the container

```sh
docker container run --rm -itd --name <dest-container> --volumes-from <src_container_name_from_which_data_is_accessed>
```

### optimizing docker images

.dockerignore

### Useful docker commands

```sh
# To stop all running containers in one go, below command can be used
docker container stop $(docker container ls -a -q)
```

### References

[Detailed Explanation of Dockerfile](https://docs.docker.com/engine/reference/builder/#usage)  
[Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

### Video References

{{< youtube id="LQjaJINkQXY" autoplay="true" >}}


