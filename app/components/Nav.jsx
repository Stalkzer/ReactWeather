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

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();

        // Pull value from search Field
        var location = this.refs.search.value;
        // Encode the location to insert it in the URL
        var encodedLocation = encodeURIComponent(location);

        if(location.length > 0) {
            this.refs.search.value = "";
            // Redirect to this Url
            window.location.hash = "#/?location=" + encodedLocation;
        }
    },
    render: function () {
        return (
        <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">React Weather App</li>
                <li>
                    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
                </li>
                <li>
                    <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                </li>
                <li>
                    <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                    <ul className="menu">
                        <li>
                            <input ref="search" type="search" placeholder="Search weather by city"/>
                        </li>
                        <li>
                            <input type="submit" className="button" value="Get weather"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
    }
});

module.exports = Nav;
