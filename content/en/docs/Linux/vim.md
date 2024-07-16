---
title: vim
linktitle: vim
---

To start with vim, go through the tutorial using command : `vimtutor`

## Basic vim commands

| Task                              | Command            |
|-----------------------------------|--------------------|
| start editing the file content    | :i[enter]          |
| save the file and exit the editor | :x[return]         |
| quit vim without saving the file  | :q![return]        |
| Save                              | :w                 |
| save and exit                     | :wq                |
| exit                              | :q                 |
| copy a line                       | :yy                |
| copy                              | :y                 |
| Paste                             | p                  |
| cut                               | d                  |
| cut a line                        | dd                 |
| Undo                              | u                  |
| go to the end of the file:        | :$ and press Enter |
| Move to the beginning of a line   | type 0             |
| Move to the end of a line         | type $             |
| Go to beginning of file           | gg                 |
| Go to end of file                 | G  (shift + g)     |

## How to search and replace 

``` 
%s/text/replacement/g
```

## How to search and replace with confirmation  

```
%s/text/replacement/gc  
```

Forward Search : /  
Backward Search : ?  
Search Next : n  
Search back : N   

## Configure vim editor

```sh
# ~./vimrc 

set bg=dark 
set ai ts=4 sw=4 et 

# et -> expand tab 
# sw - > shift width 
# ts -> tab space
```