import {IShop} from './IShop';

import {Ball} from './../products/Ball';
import {Bike} from './../products/Bike';
import {Vitamins} from './../products/Vitamins';

class SportShop implements IShop {
    products() {
        return [
            new Ball,
            new Bike,
            new Vitamins
        ]
    }
}

export {SportShop};
