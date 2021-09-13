yarn build &&
git checkout pages &&
rm -rf *.html *.css *.js *.png &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m "update github pages" &&
git push