import { IPlayBehavior } from './IPlayBehavior';

class Acardion implements IPlayBehavior {
    play() {
        console.log('play on acardion...')
    }
}

export {Acardion}
