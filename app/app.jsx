var React           = require("react"),
    ReactDOM        = require("react-dom"),
    // var Route = require('react-router').Route; OR DO IT LIKE BELOW
    // ES6 Syntax
    {Route, Router, IndexRoute, hashHistory} = require("react-router"),
    Main            = require("Main"),
    Weather         = require("Weather"),
    About           = require("About"),
    Examples        = require("Examples");

    //Load foundation
    require("style-loader!css-loader!foundation-sites/dist/foundation.min.css");
    $(document).foundation();

    // App css
    require("style-loader!css-loader!sass-loader!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>

    </Router>,
    document.getElementById('app')
);