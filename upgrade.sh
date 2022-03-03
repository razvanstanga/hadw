#!/bin/sh

git fetch origin
git reset --hard origin/master
git checkout master

VERSION=$(cat /ha/version)

if test -f "/ha/scripts/$VERSION.sh" && test ! -f "/ha/scripts/executed/$VERSION.sh" ; then
    /bin/bash "/ha/scripts/$VERSION.sh"
    RETVAL=$?
    if test $RETVAL = 0; then
        /bin/mv "/ha/scripts/$VERSION.sh" "/ha/scripts/executed/$VERSION.sh"
    fi
fi

exit 0
