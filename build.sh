npm run build
git add dist/
git commit -m "build"
git push origin `git subtree split --prefix dist main`:gh-pages --force
echo "success"
