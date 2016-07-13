import {IRepair} from './IRepair';

class Repair implements IRepair {
    coast() {
        return 0;
    }

    info() {
        return 'Repair steps: '
    }
}

export {Repair}
