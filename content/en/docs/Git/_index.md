---
title: "Source Code Management"
linkTitle: "Git"
weight: 7
description: >
  Where is your source code ?
---

Git is a distributed version control system

## Git config file

```sh
 git config --global user.email "email_id"
 git config --global user.name "User Name"
 git config --list

 # Omit --global to set the identity only to a repository.
```

## Basic Git commands

```sh
 git init (initialize a local repository)  
 git add --all (or)  
 git add [filename] (or)
 git add . [all changed files for commit]  
 git status (show the status of working tree)  
 git commit -m "commit message"  
 git push  (push to remote repository)  
 git pull (fetch changes from remote repository)  
 git clone [git repo url]  
 git fetch (fetch branches, tags from remote repository)
```

## Remove files from staging area

```sh
 git reset file_name  (or)  
 git reset  (to remove all files from staging area)  
```

## Git Tagging

Git tagging is used to mark an important history like a release v1.0

{{< alert >}}
By default git push will not commit the tags to remote server, instead we have to explicitly mention the remote
{{< /alert >}}

```sh
 git tag -a v1.0 -m "Reason for tagging"
 git push origin v1.0

# If there are multiple tags, then use --tags flag  
 git push origin --tags (to push all tags)  

# To list out all the available tags
 git tag
 git tag -l (or) --list  (optional)
```

## Information about Remote Repository

```sh
 git remote -v  
```

## Git branching

```shell
# To display all branches that are present remotely and locally
 git branch -a
# To create a new branch
 git branch branch_name  
 git checkout branch_name  
```

## Discard all local changes

```shell
# discard all local changes/commits and pull from upstream

git reset --hard origin/master
git pull origin master
```

## Commit History

To check commit history : `git log`

## Revert commits

`git revert <commit-id>`

## Compile Git from Source

```shell
GIT_VERSION=2.33.1
wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-${GIT_VERSION}.tar.gz
tar -xvf git-${GIT_VERSION}.tar.gz
cd git-${GIT_VERSION}
make configure
./configure --prefix=/appl/Git/${GIT_VERSION} --with-curl --with-expat
make all
make install

cd /appl
tar -cvf git-${GIT_VERSION}.tar Git/${GIT_VERSION}
```

## Git Modues

To-DO

### References

[git-scm](https://git-scm.com/)  
[pro git book](https://git-scm.com/book/en/v2)  
[Git basic commands by Atlassian](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

#### Video References  

<html><u><b>Git Tutorial for Beginners: Command-Line Fundamentals</b></u></html>

{{< youtube id="HVsySz-h9r4" autoplay="true" >}}
