// when we are working we only checkout one branch at a time.
// this is also called head branch

// git makes note of this branch and stores it in .git/Head as
// the reference for the path of the branch

// head is nothing but the reference to the branch

// head not only reference a branch it also reference the commit sha1 hash

// if the head points to a specific commit then it is called as detached head

// if you want to detach head just
// use git checkout hash_of_commit
// now the head is detached and it moves independantly and if you want to come back to branch just use
// git checkout branch_name but now you have no way to acces those independant commits as they are not associated
// with any branch .
// they will be deleted by git after some time
// if you want to merge them in the branch go to them using their hash and create a branch there and then merge
// that branch to the main branch or other branch
