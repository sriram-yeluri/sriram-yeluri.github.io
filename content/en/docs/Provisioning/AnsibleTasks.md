---
title: "AnsibleTasks"

---

## cleanup task using cron module

```Ansible
# contab entry that runs every night
# recursively finds and deletes files and folders older than 7 days.
- name: Creates a cron file under /etc/cron.d
  cron:
    name: Cleanup files and folders older than 7 days
    weekday: "*"
    day: "*"
    minute: "0"
    hour: "0"
    user: <userID>
    job: "find /path/* -mtime +7 exec rm -rf {} \\; > /dev/null"
```
