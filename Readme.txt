Blackrose testing Git

control panel ->Appearnces and personlaisation -> folder option-> view -> show hidden filesand folders and drives( radio)

below that uncheck hide extensions for known file type -->Apply  ok

change the start path with some project directory in right clikc properties and and startin path

http://www.308tube.com/youtube/git/index.html

config:
git config --global user.name "blackrose"
git config --global user.email "sharewithamar@gmail.com"


create a git project folder

git init <gitprojectfoldername> eg git init gitproject
cd gitproject ( master) notice master 
ls
git status


So far learned to git config username
confgig email
ls
cd
git add.  -> to add all files
git add filename
git commit -m " message"
git status
git log
 

next step pursue

git diff 
git diff --cached

shift+zz to go out of log to text editor

Steps for creating RSA :
ssh-keygen -t rsa -C"emaiid"

ssh -T git@github.com --> to checke SSH key is properly registtered ingithub

yes -> password --> succesfully atuhthenticated

git remote add origin githubrepositrySSHPath  where orgin is anyname

to del duplicate - git remote rm origin

then push --> git push origin master
To edit in bash : http://stackoverflow.com/questions/2304372/how-do-you-copy-and-paste-into-git-bash
useful : -http://stackoverflow.com/questions/10904339/github-fatal-remote-origin-already-exists






git log --oneline  -> to get all the commmits in oneline with their index

git commit -a -m "message"  -> shortcut for adding and committing in single go 

git status -s  -> single line to see which file has change