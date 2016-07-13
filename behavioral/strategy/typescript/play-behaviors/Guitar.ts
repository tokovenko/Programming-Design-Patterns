import { IPlayBehavior } from './IPlayBehavior';

class Guitar implements IPlayBehavior {
    play() {
        console.log('play on guitar...')
    }
}

export {Guitar}
