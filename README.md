## ReactJS Calculator

###### In progress...

- Please make sure <a href="https://nodejs.org/">NodeJS</a> is installed first.

  - Check via the command line:
  ```bash
  $ node --version
  ```

#### Clone the repository
  ```bash
    $ git clone https://github.com/dankreiger/react-calculator.git
  ```


#### Write a new package.json file
  ```bash
    $ npm init
  ```

#### Install NPM packages
  ```bash
    $ NPMGLOBALS=('browserify' 'json')
    $ NPMMODULES=('react' 'react-dom' 'babelify' 'watchify' 'babel-preset-react')
    for i in "${NPMGLOBALS[@]}";do npm install -g $i; done
    for j in "${NPMMODULES[@]}";do npm install --save $j; done
  ```


#### Start Node server
  ```bash
    $ npm start
  ```

#### Open the index page in a new tab/window
  ```bash
    $ open public/index.html
  ```
