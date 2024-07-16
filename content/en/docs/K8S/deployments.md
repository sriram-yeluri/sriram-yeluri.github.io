---
title: "Deployments"


---



Deployments in Kubernetes

The Deployment instructs Kubernetes how to create and update instances of your application.

The Kubernetes master schedules mentioned application instances onto individual Nodes in the cluster.

Once the application instances are created, a Kubernetes Deployment Controller continuously monitors those instances.  

## Deployment

```sh

$ kubectl create deployment hello-node --image=gcr.io/hello-minikube-zero-install/hello-node

deployment.apps/hello-node created

$ kubectl get deployments

NAME         READY   UP-TO-DATE   AVAILABLE   AGE
hello-node   1/1     1            1           19s

$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
hello-node-55b49fb9f8-bkmnb   1/1     Running   0          43s


$ kubectl get events

LAST SEEN   TYPE     REASON                    OBJECT                             MESSAGE

94s         Normal   Scheduled                 pod/hello-node-55b49fb9f8-bkmnb    Successfully assigned default/hello-node-55b49fb9f8-bkmnb to minikube
92s         Normal   Pulling                   pod/hello-node-55b49fb9f8-bkmnb    Pulling image "gcr.io/hello-minikube-zero-install/hello-node"
91s         Normal   Pulled                    pod/hello-node-55b49fb9f8-bkmnb    Successfully pulled image "gcr.io/hello-minikube-zero-install/hello-node"
90s         Normal   Created                   pod/hello-node-55b49fb9f8-bkmnb    Created container hello-node
90s         Normal   Started                   pod/hello-node-55b49fb9f8-bkmnb    Started container hello-node
94s         Normal   SuccessfulCreate          replicaset/hello-node-55b49fb9f8   Created pod: hello-node-55b49fb9f8-bkmnb
94s         Normal   ScalingReplicaSet         deployment/hello-node              Scaled up replica set hello-node-55b49fb9f8 to 1
4m34s       Normal   NodeHasSufficientMemory   node/minikube                      Node minikube status is now: NodeHasSufficientMemory
4m34s       Normal   NodeHasNoDiskPressure     node/minikube                      Node minikube status is now: NodeHasNoDiskPressure
4m34s       Normal   NodeHasSufficientPID      node/minikube                      Node minikube status is now: NodeHasSufficientPID
4m11s       Normal   RegisteredNode            node/minikube                      Node minikube event: Registered Node minikube in Controller
4m6s        Normal   Starting                  node/minikube                      Starting kube-proxy.

$ kubectl config view

apiVersion: v1
clusters:
- cluster:
    certificate-authority: /root/.minikube/ca.crt
    server: https://172.17.0.27:8443
  name: minikube
contexts:
- context:
    cluster: minikube
    user: minikube
  name: minikube
current-context: minikube
kind: Config
preferences: {}
users:
- name: minikube
  user:
    client-certificate: /root/.minikube/client.crt
    client-key: /root/.minikube/client.key
```

## Nexus Deployment

`kubectl run nexus --image=sonatype/nexus3:3.2.1 --port 8081`

Expose service:  
`kubectl expose deployment nexus --type=NodePort`

Access the service:
`Minikube service nexus`

## nginx deployment

```yaml
# nginx-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
```

```sh
$ kubectl apply -f nginx-deployment.yaml
deployment.apps/nginx-deployment created
$ kubectl get events
$ kubectl get pods
$ kubectl delete deployment nginx-deployment
deployment.extensions "nginx-deployment" deleted
```

## Cleanup

```sh
$ kubectl get deployments

NAME         READY   UP-TO-DATE   AVAILABLE   AGE
hello-node   1/1     1            1           4m16s

$ kubectl delete deployment hello-node
deployment.extensions "hello-node" deleted

$ kubectl get deployments
No resources found.

$ kubectl get pods
No resources found.
```
