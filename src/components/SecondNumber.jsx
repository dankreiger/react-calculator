var React = require('react');


var SecondNumber = React.createClass({
  render: function(){
    return(
      <div className="col-sm-6">
        <input type="text" className="form-control" placeholder="Enter Number" />
      </div>
    );
  }
});



module.exports = SecondNumber;
