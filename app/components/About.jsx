var React = require("react");

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p className="lead">
                This is a simple weather application,
                Built on React for education purpose.
            </p>
            <p>
                List of used tools:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react"> React </a> - JavaScript framework.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - Weather api used.
                </li>
                <li>
                    <a href="https://github.com/Stalkzer/ReactWeather">GitHub repo</a>
                </li>
            </ul>
        </div>

    );
};

module.exports = About;