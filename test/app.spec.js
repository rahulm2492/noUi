import {expect} from 'chai';
import {ShoppingCart} from '../index.js';
describe('src/sum.js', () => {
    it('should add 1 + 1 to make two', () => {
    let result = new ShoppingCart();
    result.addProduct({unit:5,price:'39.99'});
    result.addProduct({unit:3,price:'39.99'});
    console.log(result.getTotal());
})
})