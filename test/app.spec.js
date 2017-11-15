import {expect} from 'chai';
import {ShoppingCart} from '../app';


//First Ques
describe('Add products to the shopping cart', () => {
      let result = new ShoppingCart();// Create Empty Shopping Cart
      result.addProduct({unit:5,price:'39.99',productName:'Dove', productId:'prod1'});

    it('should corrrectly calculate  cart’s total price', () => {
    expect(result.getTotal()).to.equal('199.95');
    expect(result.getCart().length).to.equal(1);
    
})
    it('should corrrectly calculate  cart’s item specifications', () => {
      
        expect(result.getCart().length).to.equal(1);
        expect(result.getCart()[0].productName).to.equal('Dove');
        expect(result.getCart()[0].price).to.equal('39.99');
        expect(result.getCart()[0].unit).to.equal(5);
       
    })
})

//Second Ques
describe('Add additional products of the same type to the shopping cart', () => {
      let result = new ShoppingCart();// Create Empty Shopping Cart
      result.addProduct({unit:5,price:'39.99',productName:'Dove', productId:'prod1'});
       result.addProduct({unit:3,price:'39.99',productName:'Dove', productId:'prod1'});

    it('should corrrectly calculate  cart’s total price', () => {
            expect(result.getTotal()).to.equal('319.92');
            
   })
    it('should corrrectly calculate  cart’s item specifications', () => {
      
        expect(result.getCart().length).to.equal(1);
        expect(result.getCart()[0].productName).to.equal('Dove');
        expect(result.getCart()[0].price).to.equal('39.99');
        expect(result.getCart()[0].unit).to.equal(8);
       
    })
})
//Third Ques

describe('Add additional products of the same type to the shopping cart', () => {
      let result = new ShoppingCart();// Create Empty Shopping Cart

      result.addProduct({unit:2,price:'39.99',productName:'Dove', productId:'prod1'});
      result.addProduct({unit:2,price:'99.99',productName:'AxeDeo', productId:'prod2'});
      result.addTax(12.5);

    it('should corrrectly calculate  cart’s total price', () => {
            expect(result.getTotal()).to.equal('314.96');
            
   })
    it('should contain 2 Dove Soaps', () => {
      
        expect(result.getCart()[0].productName).to.equal('Dove');
        expect(result.getCart()[0].price).to.equal('39.99');
        expect(result.getCart()[0].unit).to.equal(2);
       
    })
     it('should contain 2 Axe Deo Soaps', () => {
      
        expect(result.getCart()[1].productName).to.equal('AxeDeo');
        expect(result.getCart()[1].price).to.equal('99.99');
        expect(result.getCart()[1].unit).to.equal(2);
       
    })
})

//General Test

describe('Add No products when unit of product is 0', () => {
      let result = new ShoppingCart();// Create Empty Shopping Cart
      result.addProduct({unit:0,price:'39.99',productName:'Dove', productId:'prod1'});

    it('should corrrectly calculate  cart’s total price', () => {
       
       expect(result.getTotal()).to.equal('0.00');
   
    
})
    it('should corrrectly calculate  cart’s item specifications', () => {
        expect(result.getCart().length).to.equal(0);
        
    })
})

describe('Add No products when product name is undefined', () => {
      let result = new ShoppingCart();// Create Empty Shopping Cart
      result.addProduct({unit:0,price:'39.99',productName:undefined, productId:'prod1'});

    it('should corrrectly calculate  cart’s total price', () => {
       
       expect(result.getTotal()).to.equal('0.00');
})
    it('should corrrectly calculate  cart’s item specifications', () => {
        expect(result.getCart().length).to.equal(0);
        
    })
})

describe('Add  products when price is 0', () => {
      let result = new ShoppingCart();// Create Empty Shopping Cart
      result.addProduct({unit:3,price:'0',productName:'Dove', productId:'prod1'});

    it('should corrrectly calculate  cart’s total price', () => {
       
       expect(result.getTotal()).to.equal('0.00');
   
    
})
    it('should corrrectly calculate  cart’s item specifications', () => {
        expect(result.getCart().length).to.equal(1);
        
    })
})