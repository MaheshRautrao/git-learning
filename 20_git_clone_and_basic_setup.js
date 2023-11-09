// to clone a repo
// **** git clone <url> ****
// git will retrieve all the files associated with the repo and
// will copy them to your local machine
// in addition to that git initializes a new repo on your machine
// giving you access to the full history of the cloned Project

// two ways to connect to github
// using https and using ssh

// check remote repo associted with git
// use *** git remote or git remote -v ****

// adding remote
// *** git remote add origin <url> ****
// origin is short name for the url
// it means if i am using name origin i am referring to the
// particular github url like an alias name

// default names are origin for url and master for defalut branch
// if you want you can change it but most people leave them as it is

// renaming the remote --> ***** git remote rename <old-name> <new-name> ****
// removing the remote --> ***** git remote remove <name> ****

// pushing code to github
// **** git push <url-name> <branch-name> *****
// e.g git push origin master
// you can push code of some local branch to another remote branch
// use **** git push <url-name> <local-branch-name>:<remote-branch-name> ****

// setting upstream
// *** git push -u origin master
// this will set upstream for master branch of local to remote master branch means from now onwards if
// you use git push command it will automatically pushed to master branch
// you can do such for any branch you want
// also you can set upstream of local branch as another branch using git push -u origin new:master
// if you use git push in new the commit will be pushed to master branch of remote

// git branching
// when you clone a repo only default branch comes
// but if you want to work on a branch which is there on remote but not in local use
// **** git switch branch-name ***** it will create the branch locally and will connect it to the remote branch automatically
// to check branches on local use ***** git branch **** and on remote use ****** git branch -r ****
