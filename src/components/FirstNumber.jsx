var React = require('react');

var FirstNumber = React.createClass({
  render: function(){
    return(
      <div className="col-sm-6">
        <input type="text" className="form-control" placeholder="Enter Number" />
      </div>
    );
  }
});

module.exports = FirstNumber;
