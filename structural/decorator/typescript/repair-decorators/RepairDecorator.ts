import {IRepair} from './../IRepair';

abstract class RepairDecorator {
    constructor(public repair: IRepair) {
    }
}

export {RepairDecorator}
