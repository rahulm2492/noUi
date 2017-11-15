'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShoppingCart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./utils/index.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShoppingCart = exports.ShoppingCart = function () {
    function ShoppingCart() {
        _classCallCheck(this, ShoppingCart);

        this.cart = [];
        this.total = 0;
    }

    _createClass(ShoppingCart, [{
        key: 'addProduct',
        value: function addProduct(product) {
            this.cart.push(product);
        }
    }, {
        key: 'getCart',
        value: function getCart() {
            return this.cart;
        }
    }, {
        key: 'getTotal',
        value: function getTotal() {
            var total = 0;
            this.cart.forEach(function (item) {
                total = total + item.price * item.unit;
            });
            return (0, _index.roundTo)(total, 2);
        }
    }]);

    return ShoppingCart;
}();

var a = new ShoppingCart();
a.addProduct({ item: 'Dove' });
a.getCart()[0].item == 'Dove';
//# sourceMappingURL=app.js.map
