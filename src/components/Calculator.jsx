var React = require('react');
var FirstNumber = require('./FirstNumber.jsx');
var SecondNumber = require('./SecondNumber.jsx');
var Result = require('./Result.jsx');


var Calculator = React.createClass({
  getInitialState: function(){
    return {value: "0"};
  },

  add: function(){
    if(!this.refs.firstNumber.state.value){
      this.setState( {value: eval(parseFloat(this.refs.secondNumber.state.value)) });
    }
    else if(!this.refs.secondNumber.state.value){
      this.setState({value: eval(parseFloat(this.refs.firstNumber.state.value)) });
    }
    else if((!this.refs.firstNumber.state.value) && (!this.refs.secondNumber.state.value)){
      this.setState({value: "0"});
    }
    else {
      this.setState({ value: eval(parseFloat(this.refs.firstNumber.state.value) + parseFloat(this.refs.secondNumber.state.value))});
    }
  },
  subtract: function(){
    if(!this.refs.firstNumber.state.value){
      this.setState( {value: "0" });
    }
    else if(!this.refs.secondNumber.state.value){
      this.setState({value: eval(parseFloat(this.refs.firstNumber.state.value)) });
    }
    else if((!this.refs.firstNumber.state.value) && (!this.refs.secondNumber.state.value)){
      this.setState({value: "0"});
    }
    else {
      this.setState({ value: eval(parseFloat(this.refs.firstNumber.state.value) - parseFloat(this.refs.secondNumber.state.value))});
    }
  },
  multiply: function(){
    if((!this.refs.firstNumber.state.value) || (!this.refs.secondNumber.state.value)){
      this.setState( {value: "0" });
    }
    else if((!this.refs.firstNumber.state.value) && (!this.refs.secondNumber.state.value)){
      this.setState({value: "0"});
    }
    else {
      this.setState({ value: eval(parseFloat(this.refs.firstNumber.state.value) * parseFloat(this.refs.secondNumber.state.value))});
    }
  },
  divide: function(){
    if((!this.refs.firstNumber.state.value) || (!this.refs.secondNumber.state.value)){
      this.setState( {value: "0" });
    }
    else if((!this.refs.firstNumber.state.value) && (!this.refs.secondNumber.state.value)){
      this.setState({value: "0"});
    }
    else {
      this.setState({ value: eval(parseFloat(this.refs.firstNumber.state.value) / parseFloat(this.refs.secondNumber.state.value))});
    }
  },
  clear: function(){
    this.setState({value: "0"});
  },

  render: function(e){
    var btnStyle = {
      width: 200
    }
    return(
        <div className="panel panel-default">
          <div className="panel-body">

            <div className="row">
              <Result value={this.state.value} />
            </div>
            <br/>
            <div className="row">
              <div className="col-sm-3">
                <button type="submit"
                        className="btn btn-primary"
                        onClick={this.add}
                        style={btnStyle}>
                  +
                </button>
              </div>
              <div className="col-sm-3">
                <button type="submit"
                        className="btn btn-primary"
                        onClick={this.subtract}
                        style={btnStyle}>
                  -
                </button>
              </div>
              <div className="col-sm-3">
                <button type="submit"
                      className="btn btn-primary"
                      onClick={this.multiply}
                      style={btnStyle}>
                  x
                </button>
              </div>
              <div className="col-sm-3">
                <button type="submit"
                        className="btn btn-primary"
                        onClick={this.divide}
                        style={btnStyle}>
                  /
                </button>
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <FirstNumber ref="firstNumber" />
                <SecondNumber ref="secondNumber" />
                <div className="col-sm-3 col-sm-offset-3">
                  <button type="submit"
                          id="clearButton"
                          className="btn btn-danger"
                          onClick={this.clear}
                          style={btnStyle}>
                    Clear
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>

    );

  }
});


module.exports = Calculator;
