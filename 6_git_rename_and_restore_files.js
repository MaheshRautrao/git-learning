// use command
// mv filename newfilename
// to rename it but git will not understand this it will consider it as first file is
// deleted and second is added so use git add command move both files to staging area
// then the git will uderstand that you have renamed the file so it will show renamed
// then just commit the file

// or use git mv filename newfilename
// to directly rename and move to stage area
// then commit the changes

// use
// git restore --staged filename
// command to revert the file from stage area to working area
// and if you want to revert the changes made in file use
// git restore filename to revert the changes
