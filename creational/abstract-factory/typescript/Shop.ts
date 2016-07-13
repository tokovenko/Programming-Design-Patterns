import {SportShopFactory} from './factories/SportShopFactory';
import {FoodShopFactory} from './factories/FoodShopFactory';

class Shop {
    public static create(type) {

        var factory = undefined;

        switch(type) {
            case 'sport':
                factory = new SportShopFactory;
            break;
            case 'food':
                factory = new FoodShopFactory;
            break;
        }

        return factory ? factory.createShop() : undefined;
    }
}


export {Shop}
