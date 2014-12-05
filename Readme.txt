Blackrose testing Git

control panel ->Appearnces and personlaisation -> folder option-> view -> show hidden filesand folders and drives( radio)

below that uncheck hide extensions for known file type -->Apply  ok

change the start path with some project directory in right clikc properties and and startin path



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
git add.
git add filename
git commit -m " message"
git status
git log
 

next step pursue

git diff 
git diff --cached

shift+zz to go out of log to text editor

git log --oneline  -> to get all the commmits in oneline with their index

git commit -a -m "message"  -> shortcut for adding and committing in single go 

git status -s  -> single line to see which file has change