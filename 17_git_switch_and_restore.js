// use **** git switch <branchname> ***** to change branch
// if want to create new branch **** git switch -c new_branch ****
// switch can not move to particular commit hash unlike checkout it can only switch branches

// use **** git restore filename *** to revert changes from working area
// use **** git restore --staged filename **** to revert changes from staging area
// important use of restore if there are some commits and you want to see the contents of a particular file
// at the time of that commit use
// ***** git restore --source commit_hash  filename ***
// (use can get commit hash using Head~2 or direct by seeing logs)
// use ***** git restore filename  ***** to get current state of the file
