import {IRepair} from './../IRepair';
import {RepairDecorator} from './RepairDecorator';

class Floor extends RepairDecorator implements IRepair {

    coast() {
        return 73 + this.repair.coast();
    }

    info() {
        return this.repair.info() + "\n- Repair floor";
    }
}

export {Floor}
