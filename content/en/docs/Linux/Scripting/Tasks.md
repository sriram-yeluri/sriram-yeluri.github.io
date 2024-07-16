---
title: Tasks

---

### Find all files aged more than 7 days and delete

```sh
find /path/* -mtime +7 exec rm -rf {} \; > /dev/null
```
