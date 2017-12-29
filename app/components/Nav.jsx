var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
    <div>
      <h2>Nav Component</h2>
      <Link to="/">Get the Weather    </Link>
      <Link to="/about">  ABOUT  </Link>
      <Link to="/examples">  Example  </Link>
    </div>
    )
  }
});

module.exports = Nav;
