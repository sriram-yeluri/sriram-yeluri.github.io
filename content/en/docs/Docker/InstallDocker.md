---
title: Installing Docker
linktitle: Installing Docker
weight: 1
description: >
  How to install and setup docker
---

## How to install Docker

```sh
# requires elevated access either root or sudo
# install required dependencies (tested on Raspberry Pi 4)
sudo apt-get -y install libffi-dev libssl-dev python3-dev python3 python3-pip
sudo curl -sSL https://get.docker.com | sh

# To run docker as non sudo/root user, add the user to docker group
sudo usermod -aG docker <user> #logout and login after this command.

# Testing
docker run hello-world
```

## How to install Docker CE on Centos7

[Docker CE on Centos7](https://docs.docker.com/engine/installation/linux/docker-ce/centos/#install-docker-ce)

``` sh
# Installing dockerCE
yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2

yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

yum install docker-ce

# post docker install steps
# to run docker as non root user
usermod -aG docker <user_id>

[root@centos7vm ~]# systemctl enable docker
Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.

[root@centos7vm ~]# chkconfig docker on
Note: Forwarding request to 'systemctl enable docker.service'.

service docker start

docker ps
```

## Docker config file

login credentials are saved in `/home/username/.docker/config.json`

## /var/run/docker.sock

This is an Unix socket the Docker daemon listens on by default, and it can be used to communicate with the daemon from within a container.

```sh
#Example, portainer an opensource web interface to manage containers using bind mount
$ docker container run -d \
  -p 9000:9000 \
  -v /var/run/docker.sock:/var/run/docker.sock \ #bind mount
  portainer/portainer
```

{{< alert color="warning" >}}
Bind mounting the Docker daemon socket gives a lot of power to a container as it can control the daemon. It must be used with caution, and only with containers we can trust.
{{< /alert >}}

## How to enable Docker Remote API on Ubuntu

``` sh
sudo vi /lib/systemd/system/docker.service

# Modify the line that starts with ExecStart
ExecStart=/usr/bin/docker daemon -H fd:// -H tcp://0.0.0.0:4243

systemctl daemon-reload
sudo service docker restart
```

``` sh
#Testing
sriram@optimus-prime:~$ curl http://localhost:4243/version
{"Platform":{"Name":""},"Components":[{"Name":"Engine","Version":"18.03.1-ce","Details":{"ApiVersion":"1.37","Arch":"amd64","BuildTime":"2018-04-26T07:15:45.000000000+00:00","Experimental":"false","GitCommit":"9ee9f40","GoVersion":"go1.9.5","KernelVersion":"4.15.0-38-generic","MinAPIVersion":"1.12","Os":"linux"}}],"Version":"18.03.1-ce","ApiVersion":"1.37","MinAPIVersion":"1.12","GitCommit":"9ee9f40","GoVersion":"go1.9.5","Os":"linux","Arch":"amd64","KernelVersion":"4.15.0-38-generic","BuildTime":"2018-04-26T07:15:45.000000000+00:00"}
```
