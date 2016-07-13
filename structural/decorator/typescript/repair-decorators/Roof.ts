import {IRepair} from './../IRepair';
import {RepairDecorator} from './RepairDecorator';

class Roof extends RepairDecorator implements IRepair {

    coast() {
        return 166 + this.repair.coast();
    }

    info() {
        return this.repair.info() + "\n- Repair roof";
    }
}

export {Roof}
