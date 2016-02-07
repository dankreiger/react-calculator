## ReactJS Starter Application Template
This skeleton is based off of [Mark Price's Udemy Tutorial](https://www.udemy.com/react-flux/learn)

### Prerequisite (NodeJS):
- Check to see if <a href="https://nodejs.org/">NodeJS</a> is installed:
```bash
$ node --version
```

### Quickstart
- Clone this repository and run the setup script:
```bash
$ git clone https://github.com/dankreiger/instant-react-skeleton.git
$ cd instant-react-skeleton/
$ chmod +x ./auto_setup.sh
$ ./auto_setup
```

### Start and open React Template App

#### Start Node server
  ```bash
  $ npm start
  ```

#### React Skeleton Manual Setup:
  ```bash
  $ git clone https://github.com/dankreiger/instant-react-skeleton.git
  $ cd instant-react-skeleton/
  $ printf ".gitignore\n.DS_Store\nnode_modules\n*.log" >> .gitignore
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



### Start Node server
  ```bash
  $ npm start
  ```

#### Open index page
  ```bash
  open public/index.html
  ```
