var React = require('react');

var SecondNumber = React.createClass({
  getInitialState: function() {
    return {value: ""};
  },
  onChange: function(e){
    this.setState({value: e.target.value});
  },
  clear: function(){
    this.setState({value: "0"});
  },
  render: function(){
    return(
      <div className="col-sm-3">
        <input
          type="number"
          id="secondOperand"
          onChange={this.onChange}
          className="form-control"
          placeholder="2nd Operand" />
      </div>
    );
  }
});



module.exports = SecondNumber;
