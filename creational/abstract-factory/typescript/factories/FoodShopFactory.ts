import {IShopFactory} from './IShopFactory';
import {FoodShop} from './../shops/FoodShop';

class FoodShopFactory implements IShopFactory {
    public createShop() {
        return new FoodShop();
    }
}

export {FoodShopFactory}
