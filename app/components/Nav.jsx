var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
 onSearch: function(e) {
   e.preventDefault();
   alert('Yet to be set up');
 },
  render: function () {
    return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
         <li className="menu-text">Weather Application</li>
         <li>
           <Link to="/">Get the Weather    </Link>
         </li>
         <li>
           <Link to="/about">  ABOUT  </Link>
         </li>
         <li>
           <Link to="/examples">  Example  </Link>
         </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li><input type="text" placeholder="Search"/></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </form>
      </div>
    </div>
    )
  }
});

module.exports = Nav;

//<h2>Nav Component</h2>
//<Link to="/">Get the Weather    </Link>
//<Link to="/about">  ABOUT  </Link>
//<Link to="/examples">  Example  </Link>
