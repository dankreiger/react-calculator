#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

git init

cat > .gitignore << EOF
.gitignore
node_modules
EOF


FILL_IN=$(printf "\n\n \xF0\x9F\x90\xB6 ${GREEN}Fill in app info:${NC}")

echo $FILL_IN

npm init
npm install -g browserify

npmmodules=('react' 'react-dom' 'babelify' 'watchify' 'babel-preset-react')


for i in "${npmmodules[@]}";do npm install --save $i; done


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
