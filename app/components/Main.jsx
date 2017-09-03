var React = require('react');
var Nav = require('Nav');
var Timer = require('Timer');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <p>Timer App</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
