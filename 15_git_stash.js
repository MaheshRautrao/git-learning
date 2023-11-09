// sometimes you want to switch the branhces but you are working
// on an incomplete part of curr priject
// you dont want to make a commit of half-done Worke
// git stashing allows you to do so

// normally when you switch branch you will commit the code and switch
// to the new branch
// if you switch branch without commiting tow things will happen
// 1. switch to the branch carrying the changes
// 2. git will not allow to switch the branch and ask to commit
// or stash the changes

// git stash command allows you to switch branches without commiting
// the current branch
// the stash meaning is store something safely in a hidden place
// the sense in git is also the same for stash
// git temporarily saves your data safely without commiting

// ***** git stash ****
// if you want to check use ***** git stash list ******
// to retrieve the stashed data ***** git stash pop **** it will give you most recent stash and it will be
// dropped from stash list
// if you want to give custom name to stash use ***** git stash save "custom name" *****
// if you want to retrieve stash data without deleting it use **** git stash apply ****

// how to handle multiple stashes
// **** git stash apply stash@{stashid} ****like (stash@{0},stash@{2},etc)

// to see the changes in stash use
// ***** git stash show -p ***** or ***** git stash show ****--> it will give you recent stash
// if you want to see changes in particluar stash use ***** git stash show stash@{stash_id} -p ****

// to delete
// use **** git stash drop *** most recent stash will be dropped
// use **** git stash drop stash@{stash_id} ***  stash with id will be dropped
// use **** git stash clear *** stash will be cleared

// if you want the stash changes in a seperate branch use
// **** git stash branch new_feature **** most recent stash will be there
// **** git stash branch new_feature stash@{stash_id} ****  stash with id will be there
