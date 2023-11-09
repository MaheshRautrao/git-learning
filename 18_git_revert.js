// use ***** git revert commit_hash ****
// the changes will be reverted but the commit will be there in logs and a new commit will be added
// telling about the revert unlike reset which undo the changes and also removes the commit
// But revert is good as if you use reset other developers may get conflict if you are working publicly

// suppose there are few commits and if you want to undo a commit which is somewhat in middle but you want to
// keep the other changes that is next commits after that you can not do it with reset as it will remove
// all the commits after it
// so use ***** git revert commit_hash **** (if conflict came resolve it)
