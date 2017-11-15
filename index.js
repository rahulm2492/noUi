import {roundTo} from './utils/index.js';

export class ShoppingCart {

    constructor(){
        this.cart = [];
        this.total =0;
    }
     addProduct(product){
        this.cart.push(product);
     }

     getCart(){
         return this.cart;
     }

     getTotal(){
         let total = 0;
          this.cart.forEach((item ) => {
            total = total + item.price*item.unit
         })
         return roundTo(total,2);
     }
}
const a = new ShoppingCart();
a.addProduct({item:'Dove'});
a.getCart()[0].item == 'Dove';