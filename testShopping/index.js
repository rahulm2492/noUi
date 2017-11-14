export class ShoppingCart {

    constructor(){
        this.cart = [];
    }
     addProduct(product){
        this.cart.push(product);
     }

     getCart(){
         return this.cart;
     }

     getTotal(){
         return this.cart.reduce((total, item ) => {
             console.log(total);
             return total+(item.price*item.unit)
         })
     }
}
const a = new ShoppingCart();
a.addProduct({item:'Dove'});
a.getCart()[0].item == 'Dove';