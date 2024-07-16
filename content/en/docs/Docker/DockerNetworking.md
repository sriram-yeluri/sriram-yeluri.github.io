---
title: "Networking"

---


```sh
# By default, docker will add all running containers to default bridge network
# To inspect docker bridge network, use below command
docker network inspect bridge
```

![dockerNetwork1](/images/Docker/docker_network_1.png)

## Creating a custom docker network

![dockerNetwork2](/images/Docker/docker_network_2.png)

## How to add container to a custom Network

```sh
# To run a docker container and join to a custom bridge network, use --net flag
docker container run --rm --itd --name <container_name> --net <network_name>
```

## How to know the IP address of a running container

```sh
docker exec <container_name> ifconfig
docker exec <container_name> ip -a
```

### References

[docker-networking](https://docs.docker.com/network/)

### To-DO

[overlay-networking](https://docs.docker.com/network/overlay/)
