## React Skeleton Quickstart
This skeleton is based off of [Mark Price's Udemy Tutorial](https://www.udemy.com/react-flux/learn)
- Running the following scripts will set you up with a ReactJS starter application template.

### Quickstart
- Run this from the command line:
  ```bash
      $ chmod +x ./auto_setup.sh
      $ ./auto_setup
  ```

### React Skeleton Manual Setup:
- Run this from the command line:
  ```bash
      $ npm init
      $ npm install -g browserify
      $ npm install --save react
      $ npm install --save react-dom
      $ npm install --save babelify
      $ npm install --save watchify
      $ npm install --save $ babel-preset-react
      $ mkdir -p src/components
      $ mkdir -p public/js
      $ touch public/index.html
      $ touch src/main.jsx
      $ touch public/js/main.js
  ```



### Important
(npm server will not start without the following change):
- Inside of <code>package.json</code>:
Change:
```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
to:
```javascript
    "scripts": {
    "start": "watchify src/main.jsx -v -t [babelify --presets [ react ] ] -o public/js/main.js"
  },
```


#### Start node server
- Run from the command line
  ```bash
    npm start
  ```

#### Create <code>.gitignore</code>
(run from command line)
  ```bash
  cat > .gitignore << GITIGNORE
  .gitignore
  node_modules
  npm-debug.log
  GITIGNORE
  ```
