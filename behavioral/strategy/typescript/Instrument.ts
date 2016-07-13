import {IPlayBehavior} from './play-behaviors/IPlayBehavior';

class Instrument {
    constructor(
        public playBehavior: IPlayBehavior
    ) {}

    setPlayBehavior(playBehavior: IPlayBehavior) {
        this.playBehavior = playBehavior;
    }

    play() {
        this.playBehavior.play();
    }
}

export {Instrument}
