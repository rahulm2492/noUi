import {expect} from 'chai';
import {roundTo} from '../utils';


describe('should correctly round of the numbers', () => {
      const num = 32.99;// Create Empty Shopping Cart

    it('should corrrectly calculate  number', () => {
    expect(roundTo(num)).to.equal('32.99');
    
   })
 
    it('should corrrectly calculate  number with three decimals', () => {
        let num = 33.927
        expect(roundTo(num)).to.equal('33.93');
    })

    it('should corrrectly calculate  number with three decimals', () => {
        let num = 34.925
        expect(roundTo(num)).to.equal('34.93');
    })
   
})

describe('should add .00 at the end of the numbers', () => {
      const num = 32;// Create Empty Shopping Cart

    it('should corrrectly calculate  number', () => {
    expect(roundTo(num)).to.equal('32.00');
})
   
   
})


