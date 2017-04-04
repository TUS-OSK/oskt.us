#!/bin/sh
git config --global user.name ${GIT_NAME}
git config --global user.email ${GIT_EMAIL}
if git branch | grep -w gh-pages > /dev/null 2>&1; then git branch -D gh-pages; fi
git checkout --orphan gh-pages
yarn run clean
yarn run build
ls -a | grep -v -E "^(\.|\.\.|\.git|public)$" | xargs rm -rf
mv ./public/* ./
rm -rf ./public
git add -A
git commit -m "update [skip ci]"
git push -f ${GIT_REPO} gh-pages
