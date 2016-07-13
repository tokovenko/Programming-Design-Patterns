import { IPlayBehavior } from './IPlayBehavior';

class Dram implements IPlayBehavior {
    play() {
        console.log('play on dram...')
    }
}

export {Dram}
