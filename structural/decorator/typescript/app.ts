import {Repair} from './Repair';

import {Walls} from './repair-decorators/Walls';
import {Roof} from './repair-decorators/Roof';
import {Floor} from './repair-decorators/Floor';

var repair:any = new Repair;

repair = new Walls(repair);
repair = new Roof(repair);
repair = new Floor(repair);

console.log(repair.info());
console.log('Full coast: ', repair.coast());
