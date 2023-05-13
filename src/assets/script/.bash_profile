# load bashrc
if [ -f ~/.bashrc ]; then
    . ~/.bashrc
fi
#hide start messege
export BASH_SILENCE_DEPRECATION_WARNING=1
#custumize username
#export PS1="\W \$ "
export PS1="$: "
#brew path
eval "$(/opt/homebrew/bin/brew shellenv)"

# Setting PATH for Python 3.11
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.11/bin:${PATH}"
export PATH
