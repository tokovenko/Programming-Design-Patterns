var widget = (function() {

    function PhoneWidget() {};

    PhoneWidget.prototype.notify = function(score) {
        console.log('Phone notified, new score: ', score)
    }

    return PhoneWidget;

}());

module.exports = widget;
