// ***** git branch *****
// use this command to check the all the branches int the project

// ***** git checkout -b branch_name *****
// to create a new branch and you will enter in that branch

// ***** git branch branch_name *****
// branch will be created but you will be in the
// same branch

// ***** git checkout branch_name ***** to change branch

// the commits of a specific branch will be visible in that branch only
// when you are in a branch the head will be pointing to the recent commit
// of that branch

// Basic info on branches *****
// how do git knows about the branches of project
// inside .git folder you have refs folder -> heads folder -> in that
// folder you have all the branch files
// how do git knows the current branch we are in
// inside .git folder you have head file in that the current branch is stored

// Rename and delete branches ******
// ****** git branch -m new_branch_name *****
// the branch that you are in will be renamed

// ****** git branch -d branch_name *****
// if you are in the branch try to delete it,
// will not be deleted to delete move to another branch and then delete
// if there are some changes that are not merged git will ask you to check
// them but if you still want to delete use
// ***** git branch -D branch_name *****
