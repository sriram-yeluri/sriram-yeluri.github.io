---
title: "kubectl"


---

`kubectl` is the command line interface which uses kubernetes API to interact with the cluster

## kubectl version

Once kubectl is configured we can see both the version of the client and as well as the server.
The client version is the kubectl version; the server version is the Kubernetes version installed on the master. You can also see details about the build.

```sh
$ kubectl version

Client Version: version.Info{Major:"1", Minor:"15", GitVersion:"v1.15.2", GitCommit:"f6278300bebbb750328ac16ee6dd3aa7d3549568", GitTreeState:"clean", BuildDate:"2019-08-05T09:23:26Z", GoVersion:"go1.12.5", Compiler:"gc", Platform:"linux/amd64"}

Server Version: version.Info{Major:"1", Minor:"15", GitVersion:"v1.15.0", GitCommit:"e8462b5b5dc2584fdcd18e6bcfe9f1e4d970a529", GitTreeState:"clean", BuildDate:"2019-06-19T16:32:14Z", GoVersion:"go1.12.5", Compiler:"gc", Platform:"linux/amd64"}
```

## cluster-info

`$ kubectl cluster-info`

```sh
$ kubectl cluster-info
Kubernetes master is running at https://172.17.0.45:8443
KubeDNS is running at https://172.17.0.45:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

## get nodes

To view the nodes in the cluster, run the kubectl get nodes command:

This command shows all nodes that can be used to host our applications.  
Now we have only one node, and we can see that its status is ready (it is ready to accept applications for deployment).

```sh
$ kubectl get nodes
NAME       STATUS   ROLES    AGE   VERSION
minikube   Ready    master   11m   v1.15.0

# list nodes with more information
$ kubectl get nodes -o=wide
NAME       STATUS   ROLES    AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE              KERNEL-VERSION   CONTAINER-RUNTIME
minikube   Ready    master   13m   v1.15.0   10.0.2.15     <none>        Buildroot 2018.05.3   4.15.0           docker://18.9.6

```

## Creating namespace to isolate the pods in cluster

```sh
kubectl create namespace dev
```

## ConfigMaps

```sh
Kubectl create configmap \
 <config-name> --from-literal=<key>=<value>

(or)
Kubectl create configmap \
 <config-name> --from-file=<path_to_file>
```

Example :  

```sh
Kubectl create configmap \
app-color-config –from-literal=APP_COLOR=blue \
--from-literal=APP_MOD=prod

Kubectl create configmap \
app-config  --from-file=app-config.properties
```

View Configmaps :  
Kubectl get configmaps

### References

[kubernetes-bootcamp-scenarios](https://github.com/katacoda-scenarios/kubernetes-bootcamp-scenarios)
