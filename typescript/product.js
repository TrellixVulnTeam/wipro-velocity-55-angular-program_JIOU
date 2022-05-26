"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    Product.prototype.display = function () {
        console.log("".concat(this.id, " - ").concat(this.name));
    };
    return Product;
}());
exports.Product = Product;
var laptop = new Product(101, 'Dell Latitude');
laptop.display();
