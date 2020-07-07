# Learning Git

由于git命令总是只会

```sh
git pull

git add ./
git commit -m "123"
git push
```

所以是有必要学习一下git的用法的。



# 注：请使用:link:[Learn git ](https://learngitbranching.js.org/) 网址配合学习

------

### 1.1. commit

在`git add ./`之后，所有的修改&添加均会丢进**暂缓区**。

`git commit`，git产生一个新节点，新的节点指向原来的节点。

> A commit in a git repository records a snapshot of all the files in your directory. It's like a giant copy and paste, but even better!



------

### 1.2. commit and branch

#### 创建与切换分支 

> Branches in Git are incredibly lightweight as well. They are simply pointers to a specific commit -- nothing more. This is why many Git enthusiasts chant the mantra:
>
> ```
> branch early, and branch often
> ```
>
> Because there is no storage / memory overhead with making many branches, it's easier to logically divide up your work than have big beefy branches.
>
> When we start mixing branches and commits, we will see how these two features combine. For now though, just remember that a branch essentially says "I want to include the work of this commit and all parent commits."



> Ok! You are all ready to get branching. Once this window closes, make a new branch named `bugFix` and switch to that branch.

> By the way, here's a shortcut: if you want to create a new branch AND check it out at the same time, you can simply type `git checkout -b [yourbranchname]`.`

> 创建分支：` $ git branch bugFix` 
> 切换分支： `$ git checkout bugFix` 
> 创建并切换分支： `$ git checkout -b bugFix` 



------

### 1.3. Branches and Merging

> Great! We now know how to commit and branch. Now we need to learn some kind of way of combining the work from two different branches together. This will allow us to branch off, develop a new feature, and then combine it back in.
>
> The first method to combine work that we will examine is `git merge`. Merging in Git creates a special commit that has two unique parents. A commit with two parents essentially means "I want to include all the work from this parent over here and this one over here, *and* the set of all their parents."
>
> It's easier with visuals, let's check it out in the next view.



> Here we have two branches; each has one commit that's unique. This means that neither branch includes the entire set of "work" in the repository that we have done. Let's fix that with merge.
>
> We will `merge` the branch `bugFix` into `master`.
>
> **use `git merge bugFix` to do it** 

To complete this level, do the following steps:

- Make a new branch called `bugFix`
- Checkout the `bugFix` branch with `git checkout bugFix`
- Commit once
- Go back to `master` with `git checkout`
- Commit another time
- Merge the branch `bugFix` into `master` with `git merge`

*Remember, you can always re-display this dialog with "objective"!*

> Below is my answer ↓ to this question.

```sh
git branch bugFix
git checkout bugFix
git commit
git checkout master
git commit
git merge bugFix
```



------

### 1.4. rebasing

#### 变基

> The second way of combining work between branches is *rebasing.* Rebasing essentially takes a set of commits, "copies" them, and plops them down somewhere else.
>
> While this sounds confusing, the advantage of rebasing is that it can be used to make a nice linear sequence of commits. The commit log / history of the repository will be a lot cleaner if only rebasing is allowed.
>
> Let's see it in action...



> Here we have two branches yet again; note that the `bugFix` branch is currently selected (note the asterisk)
>
> We would like to move our work from `bugFix` directly onto the work from master. That way it would look like these two features were developed sequentially, when in reality they were developed in parallel.
>
> Let's do that with the `git rebase` command.
>
> 
>
> `git rebase master`
>
> 
>
> Awesome! Now the work from our `bugFix` branch is right on top of master and we have a nice linear sequence of commits.
>
> Note that the commit C3 still exists somewhere (it has a faded appearance in the tree), and C3' is the "copy" that we rebased onto master.
>
> The only problem is that master hasn't been updated either, let's do that now...



To complete this level, do the following

- Checkout a new branch named `bugFix`
- Commit once
- Go back to master and commit again
- Check out bugFix again and rebase onto master

Good luck!

```sh
git checkout -b bugFix
git commit
git checkout master
git commit
git checkout bugFix
git rebase master
```



------

## 2.1. HEAD



> Before we get to some of the more advanced features of Git, it's important to understand different ways to move through the commit tree that represents your project.
>
> Once you're comfortable moving around, your powers with other git commands will be amplified!

##### Detaching HEAD

Detaching HEAD just means attaching it to a commit instead of a branch. This is what it looks like beforehand:

HEAD -> master -> C1

`git checkout C1`

And now it's

HEAD -> C1



> To complete this level, let's detach HEAD from `bugFix` and attach it to the commit instead.
>
> Specify this commit by its hash. The hash for each commit is displayed on the circle that represents the commit.

```sh
git checkout c4
```

------

### 2.2. Relative Refs

> Moving around in Git by specifying commit hashes can get a bit tedious. In the real world you won't have a nice commit tree visualization next to your terminal, so you'll have to use `git log` to see hashes.
>
> Furthermore, hashes are usually a lot longer in the real Git world as well. For instance, the hash of the commit that introduced the previous level is `fed2da64c0efc5293610bdd892f82a58e8cbc5d8`. Doesn't exactly roll off the tongue...
>
> The upside is that Git is smart about hashes. It only requires you to specify enough characters of the hash until it uniquely identifies the commit. So I can type `fed2` instead of the long string above.



> Like I said, specifying commits by their hash isn't the most convenient thing ever, which is why Git has relative refs. They are awesome!
>
> With relative refs, you can start somewhere memorable (like the branch `bugFix` or `HEAD`) and work from there.
>
> Relative commits are powerful, but we will introduce two simple ones here:
>
> - Moving upwards one commit at a time with `^`
> - Moving upwards a number of times with `~<num>`

So saying `master^` is equivalent to "the first parent of `master`".

`master^^` is the grandparent (second-generation ancestor) of `master`

Let's check out the commit above master here.

`git checkout master^`

Boom! Done. Way easier than typing the commit hash.

> To complete this level, check out the parent commit of `bugFix`. This will detach `HEAD`.
>
> You can specify the hash if you want, but try using relative refs instead!

------

### 2.3. The "~" operator



> Say you want to move a lot of levels up in the commit tree. It might be tedious to type `^`several times, so Git also has the tilde (~) operator.
>
> The tilde operator (optionally) takes in a trailing number that specifies the number of parents you would like to ascend. Let's see it in action.

### Branch forcing

You're an expert on relative refs now, so let's actually *use* them for something.

One of the most common ways I use relative refs is to move branches around. You can directly reassign a branch to a commit with the `-f` option. So something like:

```sh
git branch -f master HEAD~3
```

moves (by force) the master branch to three parents behind HEAD.

```shell
git branch -f master c6
git branch -f bugFix c0
git checkout master~3
```



-------

## 2.4. Reversing Changes in Git

> There are many ways to reverse changes in Git. And just like committing, reversing changes in Git has both a low-level component (staging individual files or chunks) and a high-level component (how the changes are actually reversed). Our application will focus on the latter.
>
> There are two primary ways to undo changes in Git -- one is using `git reset` and the other is using `git revert`. We will look at each of these in the next dialog

#### Git Reset

`git reset` reverts changes by moving a branch reference backwards in time to an older commit. In this sense you can think of it as "rewriting history;" `git reset` will move a branch backwards as if the commit had never been made in the first place.

Let's see what that looks like:

`git reset HEAD~1`

Nice! Git moved the master branch reference back to `C1`; now our local repository is in a state as if `C2` had never happened.

#### Git Revert

While resetting works great for local branches on your own machine, its method of "rewriting history" doesn't work for remote branches that others are using.

In order to reverse changes and *share* those reversed changes with others, we need to use `git revert`. Let's see it in action.

`git revert HEAD`

Weird, a new commit plopped down below the commit we wanted to reverse. That's because this new commit `C2'` introduces *changes* -- it just happens to introduce changes that exactly reverses the commit of `C2`.

With reverting, you can push out your changes to share with others.



To complete this level, reverse the most recent commit on both `local` and `pushed`. You will revert two commits total (one per branch).

Keep in mind that `pushed` is a remote branch and `local` is a local branch -- that should help you choose your methods.

> #### `git revert node` 则在HEAD底下生成新的节点指向原HEAD，HEAD重新指向新的节点。



## 3.1. Git Cherry-pick

The first command in this series is called `git cherry-pick`. It takes on the following form:

- `git cherry-pick <Commit1> <Commit2> <...>`

It's a very straightforward way of saying that you would like to copy a series of commits below your current location (`HEAD`). I personally love `cherry-pick` because there is very little magic involved and it's easy to understand.

Let's see a demo!

Here's a repository where we have some work in branch `side` that we want to copy to `master`. This could be accomplished through a rebase (which we have already learned), but let's see how cherry-pick performs.

`git cherry-pick C2 C4`

That's it! We wanted commits `C2` and `C4` and git plopped them down right below us. Simple as that!

```sh
git cherry-pick bugFix side^ another
```



## 3.2. Git Interactive Rebase

Git cherry-pick is great when you know which commits you want (*and* you know their corresponding hashes) -- it's hard to beat the simplicity it provides.

But what about the situation where you don't know what commits you want? Thankfully git has you covered there as well! We can use interactive rebasing for this -- it's the best way to review a series of commits you're about to rebase.

Let's dive into the details...

When the interactive rebase dialog opens, you have the ability to do two things in our educational application:

- You can reorder commits simply by changing their order in the UI (in our window this means dragging and dropping with the mouse).
- You can choose to completely omit some commits. This is designated by `pick` -- toggling `pick` off means you want to drop the commit.

*It is worth mentioning that in the real git interactive rebase you can do many more things like squashing (combining) commits, amending commit messages, and even editing the commits themselves. For our purposes though we will focus on these two operations above.*

Great! Let's see an example.

```sh
# You can't use git cherry-pick this time. 

$ git rebase -i c1

$ git rebase -i c3'

$ git rebase -i c1

$ git branch -f master caption
```



```sh
# Now you canlt use git rebase -i but can use cherry-pick this time. 

$ git checkout maste
$ git cherry-pick newImage
$ git branch -f master c1
$ git cherry-pick c2' c3

```



## 4.4. Git Tags

As you have learned from previous lessons, branches are easy to move around and often refer to different commits as work is completed on them. Branches are easily mutated, often temporary, and always changing.

If that's the case, you may be wondering if there's a way to *permanently* mark historical points in your project's history. For things like major releases and big merges, is there any way to mark these commits with something more permanent than a branch?

You bet there is! Git tags support this exact use case -- they (somewhat) permanently mark certain commits as "milestones" that you can then reference like a branch.

More importantly though, they never move as more commits are created. You can't "check out" a tag and then complete work on that tag -- tags exist as anchors in the commit tree that designate certain spots.

Let's see what tags look like in practice.

Let's try making a tag at `C1` which is our version 1 prototype.

`git tag v1 C1`

There! Quite easy. We named the tag `v1` and referenced the commit `C1` explicitly. If you leave the commit off, git will just use whatever `HEAD` is at.

```sh
git tag v1 c2
git tag v0 c1
git checkout v1
```



### 4.5. Git Describe

Because tags serve as such great "anchors" in the codebase, git has a command to *describe*where you are relative to the closest "anchor" (aka tag). And that command is called `git describe`!

Git describe can help you get your bearings after you've moved many commits backwards or forwards in history; this can happen after you've completed a git bisect (a debugging search) or when sitting down at a coworkers computer who just got back from vacation.

Git describe takes the form of:

```
git describe <ref>
```

Where `<ref>` is anything git can resolve into a commit. If you don't specify a ref, git just uses where you're checked out right now (`HEAD`).

The output of the command looks like:

```
<tag>_<numCommits>_g<hash>
```

Where `tag` is the closest ancestor tag in history, `numCommits` is how many commits away that tag is, and `<hash>` is the hash of the commit being described.



Let's look at a quick example. For this tree below:

`git tag v2 C3`

The command `git describe master` would output:

```
v1_2_gC2
```

Whereas `git describe side` would output:

```
v2_1_gC4
```



------

## 接下来是3道练习题

### 5.1 solving

you can't use cherry-pick & revert

```sh
git checkout c3
git rebase c2
git checkout c4
git rebase c3'
git checkout c5
git rebase c4'
git checkout c6
git rebase c5'
git checkout c7
git rebase c6'
git branch -f bugFix c3'
git branch -f master c7'
```

```sh
标准答案：
$ git rebase master bugFix

$ git rebase bugFix side

$ git rebase side another

$ git rebase another master
```



### 5.2 Specifying Parents

Like the `~` modifier, the `^` modifier also accepts an optional number after it.

Rather than specifying the number of generations to go back (what `~` takes), the modifier on `^` specifies which parent reference to follow from a merge commit. Remember that merge commits have multiple parents, so the path to choose is ambiguous.

Git will normally follow the "first" parent upwards from a merge commit, but specifying a number with `^` changes this default behavior.

Enough talking, let's see it in action.

```sh
git branch bugWork HEAD~^2~
# 解决！
```



### 5.3 Branch Spaghetti

WOAHHHhhh Nelly! We have quite the goal to reach in this level.

Here we have `master` that is a few commits ahead of branches `one` `two` and `three`. For whatever reason, we need to update these three other branches with modified versions of the last few commits on master.

Branch `one` needs a re-ordering and a deletion of `C5`. `two` needs pure reordering, and `three`only needs one commit!

We will let you figure out how to solve this one -- make sure to check out our solution afterwards with `show solution`.

```sh

git checkout c1
git cherry-pick c4 c3 c2
git checkout c1
git cherry-pick c5 c4' c3' c2'
git branch -f one c2'
git branch -f three c2
git branch -f two c2''
```



