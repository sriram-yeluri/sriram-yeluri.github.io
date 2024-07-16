---
title: "golang"

---


* Go is an opensource programming language developed by Google.
* Go provides garbage collection, type safety, dynamic-typing capability.
* Go provides a rich standard library, called as packages (Standard Libraries) - [goPackages](https://golang.org/pkg/)

### Getting Started

1. [How to install and set up Go](https://golang.org/doc/install)
2. [How to set custom goPATH](https://github.com/golang/go/wiki/SettingGOPATH)
3. [How to write Go Code](https://golang.org/doc/code.html)
4. [Dependency Management with go modules](https://go.dev/blog/using-go-modules)

{{< alert >}}
    __*GOPATH must not be the same path as your Go Installation*__  
{{< /alert >}}

```sh
# gopath can be any directory on your system  
Edit your `~/.bash_profile` and add the line: `export GOPATH=$HOME/go`  
source your bash_profile `source ~/.bash_profile`
```

```sh
# Set the GOBIN path to generate a binary file when go install is executed.
 `export GOBIN=$HOME/go/bin`
```

## Environment variables

Command to check environment variables `go env`

## Workspaces

Workspace in go is a directory hierarchy with 3 directories at its root

* src : The src directory contains source code.The path below src determines the import path or executable name.
* pkg : contains go installed package objects. Each target operating system and architecture pair has its own subdirectory of pkg  
        format: pkg/GOOS_GOARCH  
        example: pkg/linux_amd64
* bin : contains executable binaries.

## IDE for golang

[Visual Studio Code](https://github.com/Microsoft/vscode-go)  
[GoLand](https://www.jetbrains.com/go/)  

## Getting help with go commands

go provides extensive command line help by simply using help option as argument,
For any help related to go , use

   `go help <command>`

examples:

   `go help build`

   `go help install`

   `go help clean`

   `go help gopath`

## How to build go executables for different architectures

The go build command allows us to create executables for all golang supported architectures. To build executables for different architectures `GOOS` and `GOARC` arguments need to be set accordingly.

``` go
env GOOS=target-OS GOARCH=target-architecture go build <package-import-path>
env GOOS=windows GOARCH=amd64 go build <path_to_go_src>

```

To get a complete list of all supported platforms and architectures, use the command : `go tool dist list`

``` sh
sriram@optimus-prime:~$ go tool dist list
android/386
android/amd64
android/arm
android/arm64
darwin/386
darwin/amd64
darwin/arm
darwin/arm64
dragonfly/amd64
freebsd/386
freebsd/amd64
freebsd/arm
linux/386
linux/amd64
linux/arm
linux/arm64
linux/mips
linux/mips64
linux/mips64le
linux/mipsle
linux/ppc64
linux/ppc64le
linux/s390x
nacl/386
nacl/amd64p32
nacl/arm
netbsd/386
netbsd/amd64
netbsd/arm
openbsd/386
openbsd/amd64
openbsd/arm
plan9/386
plan9/amd64
plan9/arm
solaris/amd64
windows/386
windows/amd64
```

### References

[golang Tutorial](https://www.tutorialspoint.com/go/index.htm)  
[golang wiki page](https://en.wikipedia.org/wiki/Go_(programming_language))  
[curated list of awesome Go frameworks](https://awesome-go.com/)
