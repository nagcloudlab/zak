

interface PriceMatrix {
    getPrice: (cartItem: string) => number;
}

//-------------------------------------
// PriceMatrix_v1 
//-------------------------------------

class PriceMatrix_v1 implements PriceMatrix {
    getPrice(cartItem: string) {
        //..
        return 100.00;
    }
}

//-------------------------------------
// PriceMatrix_v2
//-------------------------------------

class PriceMatrix_v2 implements PriceMatrix {
    getPrice(cartItem: string) {
        //..
        return 200.00;
    }
}




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


class BillingImpl {

    private priceMatrix: PriceMatrix;
    constructor(priceMatrix: PriceMatrix) {
        this.priceMatrix = priceMatrix;
    }
    getTotalPrice(cart: Array<any>): number {
        let total = 0.0
        for (let cartItem of cart) {
            total += this.priceMatrix.getPrice(cartItem)
        }
        return total;
    }
}


//-------------------------------------
const pmV1 = new PriceMatrix_v1();
const pmV2 = new PriceMatrix_v2();
const billing = new BillingImpl(pmV2);
let totalPrice = billing.getTotalPrice(["123", "456"])
console.log(totalPrice);

//-------------------------------------
