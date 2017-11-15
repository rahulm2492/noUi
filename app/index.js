import {roundTo} from '../utils'; // helper function
//Shopping Cart

//{unit:0,price:0,productName:name, productId:id} Product Structure

export class ShoppingCart {
    constructor(){
        this.Cart = [];
        this.total ='0.00';
    }

    //Add New Product and Update Cart with New Total
     addProduct(newProduct){
        const {unit, price,productName, productId  } = newProduct;

        if( !unit || price < 0 || !productName  || !productId ){
            return;
        }

        let cart = this.Cart.slice();
        let productExist= cart.findIndex((item)=>item.productId === newProduct.productId);
        
        // Get Exist Cart
        if(productExist>=0){
            let [oldproduct]  = cart.splice(cart[productExist],1);//
            oldproduct.unit = oldproduct.unit + newProduct.unit // manipulate existed product if exist
            cart.push(oldproduct);
        } else {
            cart.push(newProduct);
        }

        //publish Cart
        this.Cart = [];//Empty the exist cart;
        this.Cart = cart.splice(0);//Fill it with new one
        
        //publish Total
        let totalPrice = this.Cart.reduce((total,item ) => total + (item.price*item.unit),0)
        this.total= roundTo(totalPrice);  
     }

    //Add Tax
    addTax(taxRate =0){
       let newPrice = this.total;
       let tax = (newPrice * taxRate)/100;
       this.total = roundTo(parseFloat(newPrice) + parseFloat(tax));
     }
    
     getCart(){
         return this.Cart;
     }

     getTotal(){
         return this.total;
     }

}
