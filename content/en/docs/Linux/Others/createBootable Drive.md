---
title: BootableDrive
linktitle: Create bootable drive
description: >
 Create a bootable USB drive in linux
---

## How to create a bootable drive

```sh
dd bs=4M if=<path to your image.iso> of=<path to your USB> status=progress
```

bs : This stands for “block size.  
if : This stands for “input file”. input file will be the iso file.  
of : This stands for “output file”.  
status : To see the progress.
