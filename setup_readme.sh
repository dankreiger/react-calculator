#!/bin/bash


cat > README.md << EOF

# React Skeleton Quickstart

### Run this from the command line
<pre><code>
chmod +x ./auto_setup.sh
./auto_setup
</code></pre>


# React Skeleton Manual Setup
<pre><code>
npm init
npm install -g browserify
npm install --save react
npm install --save react-dom
npm install --save babelify
npm install --save watchify
npm install --save babel-preset-react
cat package.json
mkdir -p src/components
mkdir -p public/js
touch public/index.html
touch src/main.jsx
touch public/js/main.js
</code></pre>

## Important (npm server will not start unless this change is made):
### in <code>package.json</code> change:

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
### to:
  "scripts": {
    "start": "watchify src/main.jsx -v -t [babelify --presets [ react ] ] -o public/js/main.js"
  },

### run <code>npm start</code>

### create <code>.gitignore</code>
<pre>
<code>
cat > .gitignore << GITIGNORE
.gitignore
node_modules
GITIGNORE
</code>
</pre>


For the detailed lecture this skeleton is based off of, check out [Mark Price's Udemy Tutorial](https://www.udemy.com/react-flux/learn)

EOF
