
<h2>React Skeleton Quickstart</h2>

<h5>Run this from the command line:</h5>
<pre><code>
chmod +x ./auto_setup.sh
./auto_setup
</code></pre>

<hr>

<hr>
<h3>React Skeleton Manual Setup</h3>
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

<h2>Important (npm server will not start unless this change is made):</h2>
<h4>Inside of <code>package.json</code>:</h4>

<h6>Change:</h6>
<pre><code>
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
</code></pre>
<h6> to:</h6>
<pre><code>
    "scripts": {
    "start": "watchify src/main.jsx -v -t [babelify --presets [ react ] ] -o public/js/main.js"
  },
</code></pre>
<h3> run </h3><br> <code>npm start</code>

<h3> create <code>.gitignore</code></h3>
<pre>
<code>
cat > .gitignore << GITIGNORE
.gitignore
node_modules
GITIGNORE
</code>
</pre>


This skeleton is based off of [Mark Price's Udemy Tutorial](https://www.udemy.com/react-flux/learn)

