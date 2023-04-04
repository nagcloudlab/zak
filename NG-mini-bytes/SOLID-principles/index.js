//-------------------------------------
// PriceMatrix_v1 
//-------------------------------------
var PriceMatrix_v1 = /** @class */ (function () {
    function PriceMatrix_v1() {
    }
    PriceMatrix_v1.prototype.getPrice = function (cartItem) {
        //..
        return 100.00;
    };
    return PriceMatrix_v1;
}());
//-------------------------------------
// PriceMatrix_v2
//-------------------------------------
var PriceMatrix_v2 = /** @class */ (function () {
    function PriceMatrix_v2() {
    }
    PriceMatrix_v2.prototype.getPrice = function (cartItem) {
        //..
        return 200.00;
    };
    return PriceMatrix_v2;
}());
//-------------------------------------
// Billing 
//-------------------------------------
// design & performance issues
// 1. dependent & dependency are tightly-coupled
//  => can't extend new features easily    
// 2. dependent creating too many dependency instance(s)
//  => resource use high , slow    
// 3. unit-testing not possible
//  => dev/bug-fix slow
// why these issues?
// dependent's itself managing it's dependency
// Soln: Don't create dependency in dependent's home, use factory
// Limitation on factory-lookup: Factory location tight-coupling
// Best Solution : Dont'create , Don't lookup ' ask some-one to inject
// Inversion of control 
// How to to implement ?
// Dependency Injection
// -------------------------------------
// OO principles a.k.a SOLID principles
// Single Responsibility
// Open/Closed
// Liskov Substitution
// Interface Segregation
// Dependency Inversion
var BillingImpl = /** @class */ (function () {
    function BillingImpl(priceMatrix) {
        this.priceMatrix = priceMatrix;
    }
    BillingImpl.prototype.getTotalPrice = function (cart) {
        var total = 0.0;
        for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
            var cartItem = cart_1[_i];
            total += this.priceMatrix.getPrice(cartItem);
        }
        return total;
    };
    return BillingImpl;
}());
//-------------------------------------
var pmV1 = new PriceMatrix_v1();
var pmV2 = new PriceMatrix_v2();
var billing = new BillingImpl(pmV2);
var totalPrice = billing.getTotalPrice(["123", "456"]);
console.log(totalPrice);
//-------------------------------------
