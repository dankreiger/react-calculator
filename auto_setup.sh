#!/bin/bash
GREEN='\033[0;32m'
NC='\033[0m' # No Color
git init
cat > .gitignore << EOF
.gitignore
node_modules
*.log
EOF
FILL_IN=$(printf "\n\n \xF0\x9F\x90\xB6 ${GREEN}Fill in app info (or just press enter for each line):${NC}")
echo $FILL_IN
npm init
npmglobals=('browserify' 'json')
npmmodules=('react' 'react-dom' 'babelify' 'watchify' 'babel-preset-react')
for i in "${npmglobals[@]}";do npm install -g $i; done
for j in "${npmmodules[@]}";do npm install --save $j; done
mkdir -p src/components
mkdir -p public/js
touch public/index.html
touch src/main.jsx
touch public/js/main.js
cat > public/index.html << EOF
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CommonJS React Skeleton</title>
  </head>
  <body>
    <div id="ingredients">
    </div>
  <script src="js/main.js"></script>
  </body>
</html>
EOF
cat > src/main.jsx << EOF
var React = require('react');
var ReactDom = require('react-dom');
var List = require('./components/List.jsx');
ReactDom.render(<List />, document.getElementById('ingredients'));
EOF
cat > src/components/List.jsx << EOF
var React = require('react');
var ListItem = require('./ListItem.jsx');
var ingredients = [{"id":1, "text":"ham"}, {"id":2, "text":"cheese"}, {"id":3, "text":"potatoes"}];
var List = React.createClass({
  render: function(){
    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    return (<ul>{listItems}</ul>);
  }
});
module.exports = List;
EOF
cat > src/components/ListItem.jsx << EOF
var React = require('react');
var ListItem = React.createClass({
  render: function() {
    return(
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});
module.exports = ListItem;
EOF

json -I -f package.json -e 'this.scripts={
    "start": "watchify src/main.jsx -v -t [babelify --presets [ react ] ] -o public/js/main.js"
  }'
