var React = require("react"),
    {Link, IndexLink} = require("react-router");

// Classic JS SYNTAX

// var Nav = React.createClass({
//     render: function () {
//       return (
//         <div>
//             <h2> Nav Bar </h2>
//             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
//             <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
//             <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
//         </div>
//       );
//     }
// });


// OR 


// ES6 SYNTAX

var Nav = (props) => {
    return (
        <div>
            <h2> Nav Bar </h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
        </div>
    );
}

module.exports = Nav;