#!/bin/bash

showtime(){
    local user=$(whoami)
    local time=$(date)
cat << EOF
------
    Hey ${user}!
    The time is ${time}
------
EOF
}
showtime