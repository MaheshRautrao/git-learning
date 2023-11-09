// ***** how git stores the data *****
// git stores the data in the form of keys and values means git is just a object
// values are nothing but contents of the file
// you give the value and it will calculate the key for it that is nothing but hash
// git calculate the hashes with sha1 algorithm

// every piece of content has its own hash

// **** what is SHA1 algorithm
// it is 20 bytes hexadecimal format
// if you ask for sha1 algorithm for hash of
// mahesh web dev
// it will be something like
// 23991233ea0wed249182nddsl2323m (it is not correct hash it is just a example)

// not only the content, the files, the directories and so on commits has their
// own SHA-1
// every object in git has its own sha1

// when you type git log you get commit hash as
// commit commit_hash (HEAD -> master)

// then use this commit hash to get tree hash
// git cat-file commit_hash -p

// then use git cat-file tree_hash -p
// to get file

// there are three folders generated in objects folder in .git folder in your repo
// the first two characters of commit hash are the name of one folder then
// the first two characters of tree hash are name of another and
// at last the file is in the third folder these are used to interlink one another
