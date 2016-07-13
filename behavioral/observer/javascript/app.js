var MatchLive = require('./MatchLive');

var PhoneWidget = require('./match-live-widgets/phone-widget');
var DashboardWidget = require('./match-live-widgets/dashboard-widget');




var live = new MatchLive('Arsenal - Chelsea');

var phoneWidget = new PhoneWidget();
live.subscribeForResults(phoneWidget);

var dashboardWidget = new DashboardWidget();
live.subscribeForResults(dashboardWidget);


var minute = 0;
var interval = setInterval(function() {

    minute++;
    console.log('minute: ', minute)

    switch (minute) {
        case 16:
            live.updateScore('1:0');
            break;
        case 49:
            live.updateScore('1:1');
            break;
        case 55:
            live.updateScore('2:1');
            break;
        case 89:
            live.updateScore('2:2');
            break;
    }

    if(minute == 90) {
        clearInterval(interval);
    }

}, 100);
