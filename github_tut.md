# Git & GitHub Workflow Notes (React Project)

## Project Information

**Project Name:** enhance-website-architecture

**Local Path**

```text
D:\Expirenment\enhance-website-architecture
```

---

# Objective

The goal was to:

* Initialize Git in an existing React/Vite project.
* Track project files with Git.
* Create the first version (commit).
* Upload the project to GitHub.
* Enable version control for future development.

---

# Step 1 – Check Git Installation

Command:

```bash
git --version
```

Purpose:

* Checks whether Git is installed.
* Displays the installed version.

Output:

```
git version 2.54.0.windows.1
```

Meaning:

Git is installed correctly.

---

# Step 2 – Initialize Git

Command:

```bash
git init
```

Purpose:

Creates a hidden `.git` folder.

This folder stores:

* Commit history
* Branches
* Version information
* Repository metadata

Output:

```
Initialized empty Git repository...
```

Now the folder became a Git repository.

---

# Step 3 – Check Repository Status

Command:

```bash
git status
```

Purpose:

Shows:

* Modified files
* Deleted files
* Untracked files
* Current branch

Output showed many "Untracked files."

Meaning:

Git knew about the repository but wasn't tracking any files yet.

---

# Step 4 – Stage Files

First attempt:

```bash
git add
```

Output:

```
Nothing specified
```

Reason:

`git add` needs a file path.

Correct command:

```bash
git add .
```

Meaning:

`.` means:

"Stage every file inside the current folder."

Now Git prepared all project files for the first commit.

---

# Step 5 – Git Identity Error

While committing:

```bash
git commit -m "Initial React project"
```

Git displayed:

```
Author identity unknown
```

Reason:

Git didn't know:

* Your name
* Your email

These are stored in every commit.

---

# Step 6 – Configure Git Identity

Commands:

```bash
git config --global user.name "sahilcubegle-art"

git config --global user.email "sahil.cubegle@gmail.com"
```

Purpose:

Sets your identity for all future commits on your computer.

Verification:

```bash
git config --global --list
```

Output:

```
user.name=sahilcubegle-art
user.email=sahil.cubegle@gmail.com
```

Configuration completed successfully.

---

# Step 7 – Remove dist from Tracking (Attempt)

Command:

```bash
git rm -r --cached dist
```

Purpose:

Remove the generated build folder (`dist`) from Git tracking while keeping it on disk.

However, because `dist` was still staged and/or not ignored consistently, it was included again later.

---

# Step 8 – First Commit

Command:

```bash
git commit -m "Initial React project"
```

Purpose:

Create the first snapshot of the project.

Commit Message:

```
Initial React project
```

Meaning:

Version 1 of the project was created.

---

# Step 9 – Rename Branch

Command:

```bash
git branch -M main
```

Purpose:

Rename the default branch from `master` to `main`.

Modern GitHub repositories use `main` by default.

---

# Step 10 – Connect Local Repository to GitHub

Command:

```bash
git remote add origin https://github.com/sahilcubegle-art/enhance-website-architecture.git
```

Purpose:

Connects the local repository to the remote GitHub repository.

Here:

```
origin
```

is simply the default nickname for the remote repository.

---

# Step 11 – First Push Attempt

Command:

```bash
git push -u origin main
```

Error:

```
rejected (fetch first)
```

Reason:

The GitHub repository already contained commits.

Your local repository had a different history.

Git refused to overwrite the remote automatically.

---

# Step 12 – Pull Remote History

Command:

```bash
git pull origin main --allow-unrelated-histories
```

Purpose:

Merge the local history with the existing remote history.

Error:

```
README.md merge conflict
```

Reason:

Both local and remote repositories contained a `README.md` with different contents.

Git could not merge them automatically.

---

# Step 13 – Push Failed Again

Command:

```bash
git push
```

Error:

```
non-fast-forward
```

Meaning:

Your local branch was behind the remote branch.

Git prevented the push to avoid losing remote changes.

---

# Step 14 – Force Push

Command:

```bash
git push --force -u origin main
```

Purpose:

Overwrite the GitHub repository with your local repository.

Output:

```
branch 'main' set up to track 'origin/main'
```

Meaning:

Success!

Your local project replaced the previous content on GitHub.

Future `git push` commands will automatically push to the same repository.

---

# Git Commands You Learned

## Initialize Git

```bash
git init
```

---

## Check Status

```bash
git status
```

---

## Stage Everything

```bash
git add .
```

---

## Commit

```bash
git commit -m "Message"
```

---

## Rename Branch

```bash
git branch -M main
```

---

## Add GitHub Repository

```bash
git remote add origin <repository-url>
```

---

## Push First Time

```bash
git push -u origin main
```

---

## Pull Changes

```bash
git pull origin main
```

---

## Force Push

```bash
git push --force -u origin main
```

Use `--force` only when you're sure you want your local history to replace the remote history.

---

# Daily Git Workflow

Whenever you change your project:

```bash
git status
git add .
git commit -m "Describe your changes"
git push
```

Example:

```bash
git commit -m "Added login page"
```

```bash
git push
```

This creates a new version of your project on GitHub.

---

# Important Notes

1. Every commit represents a version of your project.
2. Git tracks changes between commits.
3. GitHub stores your commits online as a backup and for collaboration.
4. `origin` refers to the remote GitHub repository.
5. `main` is the primary branch.
6. Avoid using `git push --force` unless you understand its consequences, especially when collaborating with others.

---

# Next Topics to Learn

* Branches (`git branch`)
* Switching branches (`git checkout` / `git switch`)
* Merging (`git merge`)
* Rebasing (`git rebase`)
* Viewing commit history (`git log`)
* Restoring previous versions (`git restore`, `git checkout`)
* Ignoring generated files with `.gitignore`
* Pull Requests on GitHub
* Conflict resolution



Excellent. Now that your project is on GitHub, the most important thing is understanding **how Git version control works in daily development**.

Think of Git like a **game save system**:

* **Working Directory** = The game you're currently playing (your files).
* **Commit** = A saved checkpoint.
* **GitHub** = Cloud backup of your checkpoints.
* **Branch** = A separate timeline for development.

---

# 1. Your Current Situation

Right now, your repository looks like this:

```
GitHub
   │
   └── Initial React project (Commit 1)
            ↑
          main
```

Your local project and GitHub are in sync.

---

# 2. You Start Working Tomorrow

Suppose you open your project tomorrow.

```
D:\Expirenment\enhance-website-architecture
```

Start your project:

```bash
npm install      # only if node_modules doesn't exist
npm run dev
```

Make changes in files like:

```
src/App.jsx
src/components/Navbar.jsx
src/components/Hero.jsx
```

---

# 3. Check What Changed

Before saving a new version:

```bash
git status
```

Example:

```
modified: src/App.jsx
modified: src/components/Navbar.jsx
```

Green = staged

Red = modified but not staged

---

# 4. See Exactly What Changed

```bash
git diff
```

Example:

```diff
- Welcome
+ Welcome to Cubegle
```

Git shows line-by-line differences.

---

# 5. Stage the Changes

Everything:

```bash
git add .
```

Only one file:

```bash
git add src/App.jsx
```

---

# 6. Create a New Version

```bash
git commit -m "Updated Hero Section"
```

Now Git creates Version 2.

History:

```
Version 1
↓

Version 2
```

---

# 7. Upload to GitHub

```bash
git push
```

Done.

GitHub now has:

```
Version 1
↓

Version 2
```

---

# Daily Workflow

Every day you'll use:

```bash
git status
git add .
git commit -m "Describe changes"
git push
```

That's it.

---

# 8. View All Versions

```bash
git log --oneline
```

Example:

```
a34f761 Updated Hero Section
122dd13 Initial React project
```

Each line is a version.

---

# 9. Jump to an Older Version (Temporary)

Suppose you want to see the project exactly as it was in the first commit.

```
122dd13 Initial React project
```

Run:

```bash
git checkout 122dd13
```

Now your entire project becomes exactly like Version 1.

Nothing is deleted.

You're just viewing that version.

---

# Return to Latest Version

```bash
git checkout main
```

You're back.

---

# 10. Restore a Single File

Suppose you broke `App.jsx`.

Restore it from the latest commit:

```bash
git restore src/App.jsx
```

The file returns to its last committed state.

---

# 11. Undo All Changes

Suppose you changed many files but don't want any of them.

```bash
git restore .
```

Everything returns to the last commit.

---

# 12. Remove Last Commit (Keep Code)

Suppose you committed by mistake.

```
Commit 3
↓

Commit 2
↓

Commit 1
```

Undo the commit but keep your code:

```bash
git reset --soft HEAD~1
```

The code stays in your files, but the last commit is removed.

---

# 13. Remove Last Commit Completely

Warning: This deletes the commit and its changes.

```bash
git reset --hard HEAD~1
```

---

# 14. See Branches

```bash
git branch
```

Output:

```
* main
```

`*` means you're currently on `main`.

---

# 15. Create a New Branch

Suppose you're building a login feature.

```bash
git checkout -b login-page
```

Now:

```
main

login-page
```

You can work without affecting `main`.

---

# 16. Switch Between Branches

```bash
git checkout main
```

or

```bash
git checkout login-page
```

---

# 17. Merge Branch

After completing the login feature:

```bash
git checkout main
```

Then:

```bash
git merge login-page
```

Now `main` includes your login work.

---

# 18. See the Entire History Graph

```bash
git log --graph --oneline
```

Example:

```
* 83bc122 Added Login
|
* 34db781 Updated Hero
|
* 122dd13 Initial Commit
```

---

# 19. Compare Two Versions

Suppose you want to compare Version 1 and Version 3.

```bash
git diff 122dd13 HEAD
```

Git shows every change between those versions.

---

# 20. Typical Real-World Example

### Morning

```
git pull
```

Get the latest changes from GitHub (important if you're collaborating).

---

### Start coding

```
npm run dev
```

Edit files.

---

### Check changes

```
git status
```

---

### Stage

```
git add .
```

---

### Commit

```
git commit -m "Added contact form"
```

---

### Upload

```
git push
```

---

# Common Commands Cheat Sheet

| Task                  | Command                        |
| --------------------- | ------------------------------ |
| Check status          | `git status`                   |
| See changes           | `git diff`                     |
| Stage everything      | `git add .`                    |
| Commit                | `git commit -m "message"`      |
| Upload                | `git push`                     |
| Download latest       | `git pull`                     |
| View history          | `git log --oneline`            |
| Restore one file      | `git restore file`             |
| Restore all files     | `git restore .`                |
| Switch to old version | `git checkout <commit-id>`     |
| Return to latest      | `git checkout main`            |
| Create branch         | `git checkout -b feature-name` |
| Switch branch         | `git checkout main`            |
| Merge branch          | `git merge feature-name`       |

### My recommendation

Once you're comfortable with these basics, the next concepts to learn are:

1. **Branches** for feature development.
2. **Merge conflicts** and how to resolve them.
3. **Pull Requests** on GitHub for code review.
4. **Reverting specific commits** without losing history.

Those topics cover the workflow used by most professional software teams.
