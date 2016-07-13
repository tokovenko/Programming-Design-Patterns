import {Shop} from './Shop';

var sportShop = Shop.create('sport');
console.log(sportShop);
console.log(sportShop.products());

var foodShop = Shop.create('food');
console.log(foodShop);
console.log(foodShop.products());
