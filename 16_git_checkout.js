// it is used in many ways
// 1. moves from one branch to other
// 2. create new branch and move to that branch
// 3. also not only branch but it also shits to particular commit hash
// if you observe
// if you want to move to particular hash *** git checkout commit_hash *****
// now it will be in detached head mode

// *** git checkout - *** moves to previous commit
// **** git checkout Head~2 *** starting from head move back to 2 step in commits

// git checkout head <filename>
// or git checkout -- <filename>
// use this to discard changes in the file
