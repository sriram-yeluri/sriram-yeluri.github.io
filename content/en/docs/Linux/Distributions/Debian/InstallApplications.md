---
title: Debian
linktitle: Install Applications
weight: 2
description: >
  Learn about installing applications on debian Linux
---

## How to install draw.io

```sh
# https://github.com/jgraph/drawio-desktop/releases/

cd /tmp
wget https://github.com/jgraph/drawio-desktop/releases/download/v13.6.2/draw.io-amd64-13.6.2.deb
sudo dpkg -i draw.io-amd64-13.6.2.deb
```

## Install insomnia

```sh
# Add to sources
echo "deb https://dl.bintray.com/getinsomnia/Insomnia /" \
    | sudo tee -a /etc/apt/sources.list.d/insomnia.list

# Add public key used to verify code signature
wget --quiet -O - https://insomnia.rest/keys/debian-public.key.asc \
    | sudo apt-key add -

# Refresh repository sources and install Insomnia
sudo apt-get update
sudo apt-get install insomnia
```

### References


