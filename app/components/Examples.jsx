var React = require("react"),
    {Link} = require("react-router");

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are some example location to try out :D</p>
            <ol>
                <li>
                    <Link to="/?location=blida"> Blida </Link>
                </li>
                <li>
                    <Link to="/?location=paris"> Paris </Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;