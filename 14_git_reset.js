// git reset can be used in two different ways
// first to move file from staging area to working area that is exactly opposite to git add command
// ***** git reset file_name **** this is the command

// second way to use is to undo commits at repository level
// **** git reset --<mode> <commit_id> *****
// mode -> hard ----> this will discard commit as well as file from both staging area and working area
//      -> soft ----> this will only discard commit
//      -> mixed (default) ----> this will discard commit as well as file from
//                               staging area but not from working area
