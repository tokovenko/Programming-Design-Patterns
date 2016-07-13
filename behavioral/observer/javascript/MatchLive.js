var live = (function() {

    function MatchLive(title) {
        this.title = title;
        this.score = '0:0';
        this.observers = [];
    }

    MatchLive.prototype.updateScore = function(score) {
        this.score = score;
        this.notifyObservers();
    }

    MatchLive.prototype.notifyObservers = function() {
        var score = this.score;
        this.observers.map(function(observer) {
            observer.notify(score);
        })
    }

    MatchLive.prototype.subscribeForResults = function(observer) {
        this.observers.push(observer);
    }

    MatchLive.prototype.unsubscribeForResults = function(observer) {
        var index = this.observers.indexOf(observer);
        if(index>-1) {
            this.observers.splice(index, 1);
        }
    }

    return MatchLive;

}());


module.exports = live;
