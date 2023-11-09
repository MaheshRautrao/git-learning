// when you checkout a branch and you change something in master branch
// and you change something in same file (on the same line) in the branch there will be conflict to
// consider which file , file in master branch or file in your branch
// this is merge conflict
// in this situation git will not do automatic merging and will ask to resolve
// the conflict
// if conflict arises you can resolve it now or you can abort it for now
// to abort use command ***** git merge --abort *****
// to resolve just go to file git has inserted some line into it to show the conflict
// keep the line you want and delete the other and then git add, git commit and it will
// be merged
