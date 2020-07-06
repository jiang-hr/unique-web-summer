# Linux 命令学习



一共学习这些命令： ls, cp, mv, rm, echo, cat, less, more, grep, head, tail, sort, uniq, awk, sed, ping, telnet, ssh, tar



#### ls

Usage: ls [OPTION]... [FILE]...
List information about the FILEs (the current directory by default).
Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

> -a, --all                  do not ignore entries starting with .
>
> -a 显示所有文件及目录
>
> -A, --almost-all           do not list implied . and ..
>       --author               with -l, print the author of each file

>   -l                         use a long listing format
>
> -l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出

>   -r, --reverse              reverse order while sorting
>   -R, --recursive            list subdirectories recursively
>
>   -R 若目录下有文件，则以下之文件亦皆依序列出

> -h, --human-readable       with -l and/or -s, print human readable sizes
>                                (e.g., 1K 234M 2G)
>
> **本人一般一直使用 ls -alh 命令组合**

> -s, --size                 print the allocated size of each file, in blocks
> -S                         sort by file size, largest first

------



#### cp

Usage: cp [OPTION]... [-T] SOURCE DEST
  or:  cp [OPTION]... SOURCE... DIRECTORY
  or:  cp [OPTION]... -t DIRECTORY SOURCE...
Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.

> -a, --archive                same as -dR --preserve=all
>       --attributes-only        don't copy the file data, just the attributes
>
> -a ：此选项通常在复制目录时使用，它保留链接、文件属性，并复制目录下的所有内容。其作用等于dpR参数组合。

> -d                           same as --no-dereference --preserve=links
>
> -d：复制时保留链接。这里所说的链接相当于Windows系统中的快捷方式。

> -f, --force                  if an existing destination file cannot be opened, remove it and try again (this option is ignored when the -n option is also used)
>
> -f：覆盖已经存在的目标文件而不给出提示。
>
> -n, --no-clobber             do not overwrite an existing file (overrides a previous -i option)

> 
>
> -i：与-f选项相反，在覆盖目标文件之前给出提示，要求用户确认是否覆盖，回答"y"时目标文件将被覆盖。

>  -p                           same as --preserve=mode,ownership,timestamps
>       --preserve[=ATTR_LIST]   preserve the specified attributes (default:
>                                  mode,ownership,timestamps), if possible
>                                  additional attributes: context, links, xattr,
>                                  all
>       --no-preserve=ATTR_LIST  don't preserve the specified attributes
>       --parents                use full source file name under DIRECTORY
>
> -p：除复制文件的内容外，还把修改时间和访问权限也复制到新文件中。

> -R, -r, --recursive          copy directories recursively
>
> -r：若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。

>  -l, --link                   hard link files instead of copying
> -L, --dereference            always follow symbolic links in SOURCE
>
> -l：不复制文件，只是生成链接文件。

------



#### mv

Usage: mv [OPTION]... [-T] SOURCE DEST
  or:  mv [OPTION]... SOURCE... DIRECTORY
  or:  mv [OPTION]... -t DIRECTORY SOURCE...
Rename SOURCE to DEST, or move SOURCE(s) to DIRECTORY.

mv参数设置与运行结果

| 命令格式         | 运行结果                                                     |
| :--------------- | :----------------------------------------------------------- |
| mv 文件名 文件名 | 将源文件名改为目标文件名                                     |
| mv 文件名 目录名 | 将文件移动到目标目录                                         |
| mv 目录名 目录名 | 目标目录已存在，将源目录移动到目标目录；目标目录不存在则改名 |

>  -f, --force                  do not prompt before overwriting
>
> -f: 在 mv 操作要覆盖某已有的目标文件时不给任何指示;

> -i: 若指定目录已有同名文件，则先询问是否覆盖旧文件
>
> -i, --interactive            prompt before overwrite

------



#### rm

Usage: rm [OPTION]... [FILE]...

>  -f, --force           ignore nonexistent files and arguments, never prompt
>
> -f 即使原档案属性设为唯读，亦直接删除，无需逐一确认。



>   -i                    prompt before every removal
>
> -i 删除前逐一询问确认。



>   -I                    prompt once before removing more than three files, or
>                           when removing recursively; less intrusive than -i,
>                           while still giving protection against most mistakes
>       --interactive[=WHEN]  prompt according to WHEN: never, once (-I), or
>                           always (-i); without WHEN, prompt always
>       --one-file-system  when removing a hierarchy recursively, skip any
>                           directory that is on a file system different from
>                           that of the corresponding command line argument
>       --no-preserve-root  do not treat '/' specially
>       --preserve-root   do not remove '/' (default)

>   -r, -R, --recursive   remove directories and their contents recursively
>
> -r 将目录及以下之档案亦逐一删除。



>   -d, --dir             remove empty directories

>   -v, --verbose         explain what is being done

命令举例：sudo rm -rf /*

------



#### echo

用命令`man echo`可以得到详细的帮助内容。

NAME
       echo - display a line of text

SYNOPSIS
       echo [SHORT-OPTION]... [STRING]...
       echo LONG-OPTION

> -n     do not output the trailing newline 不输出末尾的换行符

> -e     enable interpretation of backslash escapes

> **显示结果定向至文件**
>
> ```sh
> echo "It is a test" > myfile
> ```



#### cat

Usage: cat [OPTION]... [FILE]...
Concatenate FILE(s) to standard output.

cat 命令用于连接文件并打印到标准输出设备上。

> -n, --number             number all output lines
>
> **-n 或 --number**：由 1 开始对所有输出的行数编号。

>-b, --number-nonblank    number nonempty output lines, overrides -n
>
>**-b 或 --number-nonblank**：和 -n 相似，只不过对于空白行不编号。

> -s, --squeeze-blank      suppress repeated empty output lines
>
> **-s 或 --squeeze-blank**：当遇到有连续两行以上的空白行，就代换为一行的空白行。

>  -v, --show-nonprinting   use ^ and M- notation, except for LFD and TAB
>
> **-v 或 --show-nonprinting**：使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外。

> -E, --show-ends          display $ at end of each line
>
> **-E 或 --show-ends** : 在每行结束处显示 $。

> -A, --show-all           equivalent to -vET
>
> **-A, --show-all**：等价于 -vET。

##### 实例：

把 textfile1 的文档内容加上行号后输入 textfile2 这个文档里：

```sh
cat -n textfile1 > textfile2
cat -bse textfile1 > textfile3

textfile1内容
nmsl
/////
hello world


s



textfile2内容
     1  nmsl
     2  /////
     3  hello world
     4
     5
     6  s
     7
     8

textfile3内容
     1  nmsl$
     2  /////$
     3  hello world$
$
     4  s$
$
```

把 textfile1 和 textfile2 的文档内容加上行号（空白行不加）之后将内容附加到 textfile3 文档里：

```sh
cat -b textfile1 textfile2 >> textfile3

此时textfile3内容为：
     1  nmsl$
     2  /////$
     3  hello world$
$
     4  s$
$
     1  nmsl
     2  /////
     3  hello world


     4  s


     5       1  nmsl
     6       2  /////
     7       3  hello world
     8       4
     9       5
    10       6  s
    11       7
    12       8
```

清空 /etc/test.txt 文档内容：

```sh
cat /dev/null > /etc/test.txt
```

cat 也可以用来制作镜像文件。例如要制作软盘的镜像文件，将软盘放好后输入：

```sh
cat /dev/fd0 > OUTFILE
```

相反的，如果想把 image file 写到软盘，输入：

```sh
cat IMG_FILE > /dev/fd0
```

------



#### more

Usage:
 more [options] <file>...

A file perusal filter for CRT viewing.

Options:

> -d          display help instead of ringing bell
>
> -d 提示使用者，在画面下方显示 [Press space to continue, 'q' to quit.] ，如果使用者按错键，则会显示 [Press 'h' for instructions.] 而不是 '哔' 声



>  -f          count logical rather than screen lines
>
> -f 计算行数时，以实际上的行数，而非自动换行过后的行数（有些单行字数太长的会被扩展为两行或两行以上）



>  -l          suppress pause after form feed



>  -c          do not scroll, display text and clean line ends
>
> -c 跟 -p 相似，不同的是先显示内容再清除其他旧资料



>  -p          do not scroll, clean screen and display text
>
> -p 不以卷动的方式显示每一页，而是先清除萤幕后再显示内容



>  -s          squeeze multiple blank lines into one
>
> -s 当遇到有连续两行以上的空白行，就代换为一行的空白行



>  -u          suppress underlining
>
> -u 不显示下引号 （根据环境变数 TERM 指定的 terminal 而有所不同）



>  -<number>   the number of lines per screenful
>
> -num 一次显示的行数



>  +<number>   display file beginning from line number
>
> +num 从第 num 行开始显示



>  +/<string>  display file beginning from search string match
>
> +/<string> 在每个文档显示前搜寻该字串（string），然后从该字串之后开始显示

------



#### less

less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。

**参数说明**：

- -b <缓冲区大小> 设置缓冲区的大小
- -e 当文件显示结束后，自动离开
- -f 强迫打开特殊文件，例如外围设备代号、目录和二进制文件
- -g 只标志最后搜索的关键词
- -i 忽略搜索时的大小写
- -m 显示类似more命令的百分比
- -N 显示每行的行号
- -o <文件名> 将less 输出的内容在指定文件中保存起来
- -Q 不使用警告音
- -s 显示连续空行为一行
- -S 行过长时间将超出部分舍弃
- -x <数字> 将"tab"键显示为规定的数字空格
- /字符串：向下搜索"字符串"的功能
- ?字符串：向上搜索"字符串"的功能
- n：重复前一个搜索（与 / 或 ? 有关）
- N：反向重复前一个搜索（与 / 或 ? 有关）
- b 向上翻一页
- d 向后翻半页
- h 显示帮助界面
- Q 退出less 命令
- u 向前滚动半页
- y 向前滚动一行
- 空格键 滚动一页
- 回车键 滚动一行
- [pagedown]： 向下翻动一页
- [pageup]： 向上翻动一页



ps查看进程信息并通过less分页显示

```sh
ps -ef |less
```

3、查看命令历史使用记录并通过less分页显示

```sh
root@DESKTOP-XXXXXX:~# history | less
```

------



#### grep

grep 命令用于查找文件里符合条件的字符串。

grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 **-**，则 grep 指令会从标准输入设备读取数据。

NAME
       grep, egrep, fgrep, rgrep - print lines matching a pattern

SYNOPSIS
       grep [OPTIONS] PATTERN [FILE...]
       grep [OPTIONS] -e PATTERN ... [FILE...]
       grep [OPTIONS] -f FILE ... [FILE...]

DESCRIPTION
       grep  searches  for  PATTERN  in  each  FILE.   A FILE of “-” stands for standard input.  If no FILE is given,
       recursive searches examine the working directory, and nonrecursive searches read standard input.  By  default,
       grep prints the matching lines.

   In  addition,  the  variant  programs  egrep,  fgrep  and rgrep are the same as grep -E, grep -F, and grep -r,
   respectively.  These variants are deprecated, but are provided for backward compatibility.

------



#### head

**Print the first 10 lines of each FILE to standard output.**

head 命令可用于查看文件的开头部分的内容，有一个常用的参数 **-n** 用于显示行数，默认为 10，即显示 10 行的内容。

**命令格式：**

```sh
Usage: head [OPTION]... [FILE]...
```

**参数：**

Mandatory arguments to long options are mandatory for short options too.

> **-c<数目> 显示的字节数。**
>
>  -c, --bytes=[-]NUM       print the first NUM bytes of each file;
>                              with the leading '-', print all but the last
>                              NUM bytes of each file



> **-n<行数> 显示的行数。**
>
> -n, --lines=[-]NUM       print the first NUM lines instead of the first 10;
>                              with the leading '-', print all but the last
>                              NUM lines of each file



> **-q 隐藏文件名**
>
> -q, --quiet, --silent    never print headers giving file names



> **-v 显示文件名**
>
> -v, --verbose            always print headers giving file names



> -z, --zero-terminated    line delimiter is NUL, not newline
>      --help     display this help and exit
>      --version  output version information and exit



#### tail

跟head类似

ail 命令可用于查看文件的内容，有一个常用的参数 **-f** 常用于查阅正在改变的日志文件。

**tail -f filename** 会把 filename 文件里的最尾部的内容显示在屏幕上，并且不断刷新，只要 filename 更新就可以看到最新的文件内容。

显示文件 notes.log 的内容，从第 20 行至文件末尾:

```
tail +20 notes.log
```

显示文件 notes.log 的最后 10 个字符:

```
tail -c 10 notes.log
```

------



#### sort

Linux sort命令用于将文本文件内容加以排序。

sort可针对文本文件的内容，以行为单位来排序。

```sh
Usage: sort [OPTION]... [FILE]...
  or:  sort [OPTION]... --files0-from=F
       sort [-bcdfimMnr][-o<输出文件>][-t<分隔字符>][+<起始栏位>-<结束栏位>][--help][--verison][FILE]
```

> -b 忽略每行前面开始出的空格字符。
>
>  -b, --ignore-leading-blanks  ignore leading blanks



> -d 排序时，处理英文字母、数字及空格字符外，忽略其他的字符。
>
> -d, --dictionary-order      consider only blanks and alphanumeric characters



> -o<输出文件> 将排序后的结果存入指定的文件。

在使用sort命令以默认的式对文件的行进行排序，使用的命令如下：

```sh
sort testfile 
```

sort 命令将以默认的方式将文本文件的第一列以ASCII 码的次序排列，并将结果输出到标准输出。



#### uniq

Linux uniq 命令用于检查及删除文本文件中重复出现的行列，一般与 sort 命令结合使用。

uniq 可检查文本文件中重复出现的行列。

###### Usage

```
uniq [-cdu][-f<栏位>][-s<字符位置>][-w<字符位置>][--help][--version][输入文件][输出文件]
```

- -c或--count 在每列旁边显示该行重复出现的次数。
- -d或--repeated 仅显示重复出现的行列。
- -f<栏位>或--skip-fields=<栏位> 忽略比较指定的栏位。
- -s<字符位置>或--skip-chars=<字符位置> 忽略比较指定的字符。
- -u或--unique 仅显示出一次的行列。
- -w<字符位置>或--check-chars=<字符位置> 指定要比较的字符。



#### awk

NAME
       gawk - pattern scanning and processing language

SYNOPSIS
       gawk [ POSIX or GNU style options ] -f program-file [ -- ] file ...
       gawk [ POSIX or GNU style options ] [ -- ] program-text file ...

DESCRIPTION
       Gawk  is  the  GNU Project's implementation of the AWK programming language.  It conforms to the definition of
       the language in the POSIX 1003.1 Standard.  This version in turn is based on the description in The  AWK  Pro‐
       gramming Language, by Aho, Kernighan, and Weinberger.  Gawk provides the additional features found in the cur‐
       rent version of Brian Kernighan's awk and a number of GNU-specific extensions.

   The command line consists of options to gawk itself, the AWK program text (if  not  supplied  via  the  -f  or
   --file options), and values to be made available in the ARGC and ARGV pre-defined AWK variables.

   When gawk is invoked with the --profile option, it starts gathering profiling statistics from the execution of
   the program.  Gawk runs more slowly in this mode, and automatically produces an execution profile in the  file
   awkprof.out when done.  See the --profile option, below.

   Gawk also has an integrated debugger. An interactive debugging session can be started by supplying the --debug
   option to the command line. In this mode of execution, gawk loads the AWK source code  and  then  prompts  for
   debugging commands.  Gawk can only debug AWK program source provided with the -f option.  The debugger is doc‐
   umented in GAWK: Effective AWK Programming.

##### 基本用法

log.txt文本内容如下：

```sh
2 this is a test
3 Are you like awk
This's a test
10 There are orange,apple,mongo
```

用法一：

```sh
awk '{[pattern] action}' {filenames}   # 行匹配语句 awk '' 只能用单引号
```

实例：

```sh
# 每行按空格或TAB分割，输出文本中的1、4项
 $ awk '{print $1,$4}' log.txt
 ---------------------------------------------
 2 a
 3 like
 This's
 10 orange,apple,mongo
 # 格式化输出
 $ awk '{printf "%-8s %-10s\n",$1,$4}' log.txt
 ---------------------------------------------
 2        a
 3        like
 This's
 10       orange,apple,mongo
 
```

用法二：

```
awk -F  #-F相当于内置变量FS, 指定分割字符
```

实例：

```
# 使用","分割
 $  awk -F, '{print $1,$2}'   log.txt
 ---------------------------------------------
 2 this is a test
 3 Are you like awk
 This's a test
 10 There are orange apple
 # 或者使用内建变量
 $ awk 'BEGIN{FS=","} {print $1,$2}'     log.txt
 ---------------------------------------------
 2 this is a test
 3 Are you like awk
 This's a test
 10 There are orange apple
 # 使用多个分隔符.先使用空格分割，然后对分割结果再使用","分割
 $ awk -F '[ ,]'  '{print $1,$2,$5}'   log.txt
 ---------------------------------------------
 2 this test
 3 Are awk
 This's a
 10 There apple
```

用法三：

```
awk -v  # 设置变量
```

实例：

```
 $ awk -va=1 '{print $1,$1+a}' log.txt
 ---------------------------------------------
 2 3
 3 4
 This's 1
 10 11
 $ awk -va=1 -vb=s '{print $1,$1+a,$1b}' log.txt
 ---------------------------------------------
 2 3 2s
 3 4 3s
 This's 1 This'ss
 10 11 10s
```

用法四：

```
awk -f {awk脚本} {文件名}
```

实例：

```
 $ awk -f cal.awk log.txt
```





#### sed

Linux sed 命令是利用脚本来处理文本文件。

sed 可依照脚本的指令来处理、编辑文本文件。

Sed 主要用来自动编辑一个或多个文件、简化对文件的反复操作、编写转换程序等。



#### ping

执行ping指令会使用ICMP传输协议，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。

### 语法

```
ping [-dfnqrRv][-c<完成次数>][-i<间隔秒数>][-I<网络界面>][-l<前置载入>][-p<范本样式>][-s<数据包大小>][-t<存活数值>][主机名称或IP地址]
```

**参数说明**：

- -d 使用Socket的SO_DEBUG功能。
- -c<完成次数> 设置完成要求回应的次数。
- -f 极限检测。
- -i<间隔秒数> 指定收发信息的间隔时间。
- -I<网络界面> 使用指定的网络接口送出数据包。
- -l<前置载入> 设置在送出要求信息之前，先行发出的数据包。
- -n 只输出数值。
- -p<范本样式> 设置填满数据包的范本样式。
- -q 不显示指令执行过程，开头和结尾的相关信息除外。
- -r 忽略普通的Routing Table，直接将数据包送到远端主机上。
- -R 记录路由过程。
- -s<数据包大小> 设置数据包的大小。
- -t<存活数值> 设置存活数值TTL的大小。
- -v 详细显示指令的执行过程。

例如：

```sh
root@DESKTOP-XXXXXX:~# ping -b 192.0.0.1
PING 192.0.0.1 (192.0.0.1) 56(84) bytes of data.
^C
--- 192.0.0.1 ping statistics ---
12 packets transmitted, 0 received, 100% packet loss, time 11418ms
```



#### telnet

Linux telnet命令用于远端登入。

执行telnet指令开启终端机阶段作业，并登入远端主机。

例如：`root@DESKTOP-XXXXXX:~# telnet www.XXXXXX.club`



#### ssh

远程登陆 服务器命令：

usage: ssh [-b bind_address] [-c cipher_spec]
           [-D [bind_address:]port] [-E log_file] [-e escape_char]
           [-F configfile] [-I pkcs11] [-i identity_file]
           [-J [user@]host[:port]] [-L address] [-l login_name] [-m mac_spec]
           [-O ctl_cmd] [-o option] [-p port] [-Q query_option] [-R address]
           [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]
           [user@]hostname [command]

```sh
root@DESKTOP-XXXXXX:~# ssh root@www.XXXXXX.club
The authenticity of host 'www.XXXXXX.club (XXX.XXX.XXX.XXX)' can't be established.
ECDSA key fingerprint is SHA256:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'www.XXXXXX.club,XXX.XXX.XXX.XXX' (ECDSA) to the list of known hosts.
root@www.XXXXXX.club's password:

Welcome to Ubuntu 18.04.4 LTS (GNU/Linux 4.15.0-88-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Mon Jul  6 14:22:16 CST 2020

  System load:  0.08               Processes:              104
  Usage of /:   46.0% of XXGB      Users logged in:        0
  Memory usage: 83%                IP address for eth0:    XXX.XXX.XXX.XXX
  Swap usage:   0%                 IP address for docker0: XXX.XXX.XXX.XXX

 * "If you've been waiting for the perfect Kubernetes dev solution for
   macOS, the wait is over. Learn how to install Microk8s on macOS."

   https://www.techrepublic.com/article/how-to-install-microk8s-on-macos/

 * Canonical Livepatch is available for installation.
   - Reduce system reboots and improve kernel security. Activate at:
     https://ubuntu.com/livepatch

*** System restart required ***
```

------



#### tar

Linux tar命令用于备份文件。

tar是用来建立，还原备份文件的工具程序，它可以加入，解开备份文件内的文件。

>   -z, --gzip, --gunzip, --ungzip   filter the archive through gzip
>   -Z, --compress, --uncompress   filter the archive through compress
>
> -z或--gzip或--ungzip 通过gzip指令处理备份文件。



> -C, --directory=DIR        change to directory DIR
>       --exclude=PATTERN      exclude files, given as a PATTERN
>       --exclude-backups      exclude backup and lock files
>       --exclude-caches       exclude contents of directories containing
>                              CACHEDIR.TAG, except for the tag file itself
>       --exclude-caches-all   exclude directories containing CACHEDIR.TAG
>       --exclude-caches-under exclude everything under directories containing
>                              CACHEDIR.TAG
>       --exclude-ignore=FILE  read exclude patterns for each directory from
>                              FILE, if it exists
>       --exclude-ignore-recursive=FILE
>                              read exclude patterns for each directory and its
>                              subdirectories from FILE, if it exists
>       --exclude-tag=FILE     exclude contents of directories containing FILE,
>                              except for FILE itself
>       --exclude-tag-all=FILE exclude directories containing FILE
>       --exclude-tag-under=FILE   exclude everything under directories
>                              containing FILE
>       --exclude-vcs          exclude version control system directories
>       --exclude-vcs-ignores  read exclude patterns from the VCS ignore files
>       --no-null              disable the effect of the previous --null option
>       --no-recursion         avoid descending automatically in directories
>       --no-unquote           do not unquote input file or member names
>       --no-verbatim-files-from   -T treats file names starting with dash as
>                              options (default)
>       --null                 -T reads null-terminated names; implies
>                              --verbatim-files-from
>       --recursion            recurse into directories (default)
>
> **-c或--create 建立新的备份文件。**



- -t或--list 列出备份文件的内容。
- -T<范本文件>或--files-from=<范本文件> 指定范本文件，其内含有一个或多个范本样式，让tar解开或建立符合设置条件的文件。
- -f<备份文件>或--file=<备份文件> 指定备份文件。

- -v或--verbose 显示指令执行过程。
- -V<卷册名称>或--label=<卷册名称> 建立使用指定的卷册名称的备份文件。

压缩文件 非打包

```sh
touch a.c
tar -czvf test.tar.gz a.c   //压缩 a.c文件为test.tar.gz
a.c
```

列出压缩文件内容

```sh
tar -tzvf test.tar.gz 
-rw-r--r-- root/root     0 2010-05-24 16:51:59 a.c
```

解压文件

```sh
tar -xzvf test.tar.gz 
a.c
```


