var widget = (function() {

    function DashboardWidget() {};

    DashboardWidget.prototype.notify = function(score) {
        console.log('Dashboard notified, new score: ', score)
    }

    return DashboardWidget;

}());

module.exports = widget;
