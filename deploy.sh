#!/usr/bin/env sh

set -e
rm -rf dist

git add -A
git commit -m 'deploy'

git push -u origin master
