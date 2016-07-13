import {IShopFactory} from './IShopFactory';
import {SportShop} from './../shops/SportShop';

class SportShopFactory implements IShopFactory {
    public createShop() {
        return new SportShop();
    }
}

export {SportShopFactory}
