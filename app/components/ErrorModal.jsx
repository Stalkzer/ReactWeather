var React = require("react");

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: "Error"
        };
    },
    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h4>Error</h4>
                <p>City not found</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
    }
});



module.exports = ErrorModal;