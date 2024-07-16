---
title: AWK

---

* Scans a file line by line
* Splits each input line into fields
* Compares input line/fields to pattern
* Performs action(s) on matched lines

Search Patterns:

Patterns are marked by `forward slash` at beginning and end of search key word

```sh
awk '/keyword/ {print}'
cat /etc/passwd | awk -F: '/bin/ {print}'
cat /etc/passwd | awk -F: '/bin\/false/ {print}'
cat /etc/passwd | awk -F: '/usr\/sbin\/nologin/ {print $1}'
```

Delimiter and Multiple Delimiters

```sh
cat /etc/passwd | awk -F: '/bin/ {print}'

awk -F'[/=]' '{print $3 "\t" $5 "\t" $8}' filename

SYNTAX: -F"<separator1>|<separator2>|..."
awk -F"/|=" '{print $3 "\t" $5 "\t" $8}' filename
```
