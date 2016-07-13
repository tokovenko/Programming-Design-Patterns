import { IPlayBehavior } from './IPlayBehavior';

class Piano implements IPlayBehavior {
    play() {
        console.log('play on piano...')
    }
}

export {Piano}
