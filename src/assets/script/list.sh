#!/bin/bash

LIST=("apple" "orange" "banana" "line" "pear")
echo "Your fruits list: ${LIST[@]}"
echo ""
echo "- To select by index enter '0,1,2,3 or 4'"
echo "index?"
read INDEX
# To select all enter '@'
echo ${LIST[$INDEX]}