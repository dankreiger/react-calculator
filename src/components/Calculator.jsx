var React = require('react');
var FirstNumber = require('./FirstNumber.jsx');
var SecondNumber = require('./SecondNumber.jsx');
var Add = require('./Add.jsx');


var Calculator = React.createClass({

  render: function(){
    return(
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
              <h1 className="text-center">Calculator</h1>
              </div>
            </div>
              <div className="row">
                <div className="form-group">
                  <FirstNumber />
                  <SecondNumber />
                </div>
              </div>
              <br/>
          <div className="row">
            <Add />
          </div>
        </div>
      </div>

    );

  }
});


module.exports = Calculator;
