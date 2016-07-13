import {IRepair} from './../IRepair';
import {RepairDecorator} from './RepairDecorator';

class Walls extends RepairDecorator implements IRepair {

    coast() {
        return 25 + this.repair.coast();
    }

    info() {
        return this.repair.info() + "\n- Repair walls";
    }
}

export {Walls}
