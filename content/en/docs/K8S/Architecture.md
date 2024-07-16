---
title: "Architecture"


---


kubernetes cluster components

![arc](/images/k8s/k8sArc.png)

## Master

* Masters is responsible for
  * Managing the cluster.
  * Scheduling the deployments.
  * Exposing the kubernetes API.
  * Kubernetes master automatically handles scheduling the pods across the Nodes in the cluster.
    * The Master's automatic scheduling takes into account the available resources on each Node.

## Node

* A Node is a worker machine in Kubernetes and may be either a virtual or a physical machine, depending on the cluster.
* Each Node is managed by the Master.
* A Node can have multiple pods.
* Nodes are used to host the running applications.
* The nodes communicate with the master using the Kubernetes API.

Every Kubernetes Node runs at least:

__Kubelet__  : process responsible for communication between the Kubernetes Master and the Node; it manages the Pods and the containers running on a machine.

A container runtime (like Docker) responsible for pulling the container image from a registry, unpacking the container, and running the application.

## kube api-server

todo

## Kube scheduler

todo

## Controller manager

The Kubernetes controller manager is a daemon that embeds the core control loops shipped with Kubernetes.

a controller is a control loop that watches the shared state of the cluster through the apiserver and makes changes attempting to move the current state towards the desired state.

Examples of controllers that ship with Kubernetes:

* node controller.
* replication controller
* endpoints controller
* namespace controller
* serviceaccounts controller

## etcd

__etcd__ is an opensource, distributed key-value database which acts as a single source of truth for all components of the cluster.

## Daemon Set

Daemon set will ensure one copy/instance of pod is present on all the nodes.

UseCases:

* kube-proxy
* Log Viewer
* Monitoring Agent
* Networking Solution (Weave-net)
