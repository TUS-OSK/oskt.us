#!/bin/sh
if git branch | grep -w gh-pages > /dev/null 2>&1; then git branch -D gh-pages; fi
git checkout --orphan gh-pages
yarn
yarn run clean
yarn run build
git ls-files | grep -v -E "^(public|.gitignore$|.envrc$)" | xargs rm -rf
cp -af ./public/* ./
rm -rf ./public
if [ ! -z ${CNAME} ]; then echo -n ${CNAME} > CNAME; fi
