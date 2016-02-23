var React = require('react');

var Result = React.createClass({
  render: function(){
    return(
      <div className="col-sm-12">
        <input type="number" className="form-control" value={this.props.value} readOnly />
      </div>
    );
  }
});

module.exports = Result;
