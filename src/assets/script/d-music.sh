#!/bin/bash
echo url
read URL
youtube-dl -x --audio-format mp3 --embed-thumbnail $URL -o "%(title)s.%%(ext)s"