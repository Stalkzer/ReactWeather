var React = require("react");

// var WeatherMessage = React.createClass({
//     render: function () {
//         {/* ES6 SYNTAX AWESOME !*/}
//         var {temp, location} = this.props;
//         return (
//             <h3>It is {temp} in {location}.</h3>
//         );
//     }
// });

var WeatherMessage = ({temp, location}) => {
    return (
        <h3> It is {temp} in {location}. </h3>
    )
}

module.exports = WeatherMessage;