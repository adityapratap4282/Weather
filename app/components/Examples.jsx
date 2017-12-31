var React = require('react');
var {Link} = require('react-router');
var Examples = React.createClass({
  render: function () {
    return(
      <div>
        <h1>Example</h1>
        <div>
          <ol>
            <li>
               <Link to="/?location=Lucknow">Lucknow,India</Link>
            </li>
            <li>
               <Link to="/?location=London">London,Uk</Link>
            </li>
          </ol>
        </div>
      </div>

    );
  }
});

module.exports = Examples;
