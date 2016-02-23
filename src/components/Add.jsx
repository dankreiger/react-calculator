var React = require('react');

var Add = React.createClass({

  render: function(){
    return(
      <div className="col-sm-8 col-sm-offset-4">
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    );
  }
});

module.exports = Add;
