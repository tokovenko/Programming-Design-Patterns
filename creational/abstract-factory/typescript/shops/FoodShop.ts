import {IShop} from './IShop';

import {Bread} from './../products/Bread';
import {Vitamins} from './../products/Vitamins';

class FoodShop implements IShop {

    products() {
        return [
            new Bread,
            new Vitamins
        ]
    }

}

export {FoodShop};
