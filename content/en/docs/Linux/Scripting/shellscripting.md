---
title: "Shell Scripting"

---

Linux Shell Scripting

| Special Parameter | Description                                     |
|----|----------------------------------------------------------------|
| $0 | returns name of the script                                     |
| $# | returns total number of arguments count                        |
| $@ | returns list of arguments                                      |
| $* | If a script receives two arguments, $* is equivalent to $1 $2  |
| $? | returns exit value of the last executed command                |
| $! | returns process number of the last background command          |
| $$ | returns PID of current shell                                   |
| !$ | Last argument in a command                                     |  

{{< alert >}}
    `$*` and `$@` both will act the same unless they are enclosed in double quotes, "".
    "$*" special parameter takes the entire list as one argument with spaces between and the "$@" special parameter takes the entire list and separates it into separate arguments.
{{< /alert >}}

```sh
#!/bin/bash
# Check if arguments are given, $0 is the script name #
if [ $# -lt 3 ]
then
        echo "Missing Arguments"
        echo "Usage : $0 arg1 arg2 arg3"
        exit
fi
```

## File Test Operators

|operator | Description                   |
|---------|-------------------------------|
| -a file | True if file exists. |
| -b file | True if file exists and is a block special file. |
| -c file | True if file exists and is a character special file. |
| -d file | True if file exists and is a directory.  |
| -e file | True if file exists. |
| -f file | True if file exists and is a regular file.  |
| -g file | True if file exists and is set-group-id. |
| -h file | True if file exists and is a symbolic link.|
| -k file | True if file exists and its ``sticky'' bit is set.  |
| -p file | True if file exists and is a named pipe (FIFO).  |
| -r file | True if file exists and is readable.  |
| -s file | True if file exists and has a size greater than zero.  |
| -t fd   | True if file descriptor fd is open and refers to a terminal.  |
| -u file | True if file exists and its set-user-id bit is set. |
| -w file | True if file exists and is writable. |
| -x file | True if file exists and is executable.  |
| -G file | True if file exists and is owned by the effective group id.  |
| -L file |  True if file exists and is a symbolic link. |
| -N file |  True if file exists and has been modified since it was last read. |
| -O file |  True if file exists and is owned by the effective user id. |
| -S file | True if file exists and is a socket.  |
| -v varname | True if the shell variable varname is set (has been assigned a value).   |
| -z string | True if the length of string is zero. |
| -n string | True if the length of string is non-zero. |
| str | Check if str is not empty; if empty, then returns false.|

```sh
# $1 is the first argument, expecting a string
if [ -z $1 ]; then
   echo "You must specify a string in first argument"
   exit
fi

# using translate command 'tr', Translate any uppercase characters into lowercase #
test=$( echo "$1" | tr -s  '[:upper:]'  '[:lower:]' )
```

```sh
# Check if the given file exists where arg3 is the given filename to check #
if [ ! -f $3 ]
then
        echo "Filename given \"$3\" doesn't exist"
        exit
fi
```

## Standard Streams

| value | Stream|
|-------|-------|
| 0 | /dev/stdin |
| 1 | /dev/stdout |
| 2 | /dev/stderr |

## String vs Numeric comparision

``` sh
For string comparision use,
==  
!=  
&lt;  

For numeric comparision use,
-gt
-lt
-eq
-ne
```

## For and While loops

``` sh
#!/bin/bash
for variable in {list}
do
    <commands>
done

# Example
for i in {1..10}
do
    echo $i
done

# Bash v4.0+ has inbuilt support for setting up a step value using {START..END..INCREMENT} syntax
#!/bin/bash
echo "Bash version ${BASH_VERSION}..."
for i in {0..10..2}
  do
     echo "Count $i times"
 done

#output
Bash version 4.4.20(1)-release...
Count 0 times
Count 2 times
Count 4 times
Count 6 times
Count 8 times
Count 10 times
```

```sh
# C Style for loop
#!/bin/bash
for (( i=1; i<=5; i++ ))
do  
   echo "Welcome $i times"
done

# Infinite loop
#!/bin/bash
for (( ; ; ))
do
   echo "infinite loops [ hit CTRL+C to stop]"
done
```

## Loop through array elements

```sh
BOOKS=('Title-1' \
     'Title-2' \
     'Title-3' \
     'Title-4')
for book in "${BOOKS[@]}"
do
  echo "Book: $book"
done

# Output
Book: Title-1
Book: Title-2
Book: Title-3
Book: Title-4
```

## Conditional exit with break

You can do early exit with break statement inside the for loop.You can exit from within a `FOR`, `WHILE` or `UNTIL` loop using break.

```sh
for i in {1..10}
do
  statements1      #Executed for all values of ''i'', up to a disaster-condition if any.
  statements2
  if (disaster-condition)
  then
     break            #Abandon the loop.
  fi
  statements3         #While good and, no disaster-condition.
done

# Example
# This shell script will go though all files stored in /etc directory.
# The for loop will be abandon when /etc/resolv.conf file found.

#!/bin/bash
for file in /etc/*
do
     if [ "${file}" == "/etc/resolv.conf" ]
     then
          countNameservers=$(grep -c nameserver /etc/resolv.conf)
          echo "Total  ${countNameservers} nameservers defined in ${file}"
          break
     fi
done
```

``` sh
#!/bin/bash
while [[condition]]  
do
    <commands>
done

# Example
num=1
while [ $num -le 5 ]
do
   echo "$num"
   num=$((num+1))
done
```

## Continue

To resume the next iteration of the enclosing `FOR`, `WHILE` or `UNTIL` loop use continue statement.

```sh
for I in 1 2 3 4 5
do
  statements1      #Executed for all values of ''I'', up to a disaster-condition if any.
  statements2
  if (condition)
  then
     continue   #Go to next iteration of I in the loop and skip statements3
  fi
  statements3
done

# Example
# This script will make backup of all file names specified on command line. If .bak file exists, it will skip the cp command.
#!/bin/bash
FILES="$@"
for f in $FILES
do
        # if .bak backup file exists, read next file
     if [ -f ${f}.bak ]
     then
          echo "Skiping $f file..."
          continue  # read next file and skip the cp command
     fi
     /bin/cp $f $f.bak
done
```

## Case

```sh
# The CASE statement is the simplest form of the IF-THEN-ELSE statement in BASH.
case $variable in
     pattern-1)
          commands
          ;;
     pattern-2)
          commands
          ;;
     pattern-3|pattern-4|pattern-5)
          commands
          ;;
     pattern-N)
          commands
          ;;
     *)
          commands
          ;;
esac
```

### References

[gnu.org Bash Reference Manual](https://www.gnu.org/software/bash/manual/bashref.html)  
[Conditional Expressions](https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html)  
[bash wikibook](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)  
[Linux Shell Scripting Tutorial](https://bash.cyberciti.biz/guide/Main_Page)  
[Bash-Scripting](https://tecadmin.net/tutorial/bash-scripting/hello-world/)  
[Bash-Beginners-Guide](http://tldp.org/LDP/Bash-Beginners-Guide/html/index.html)  
