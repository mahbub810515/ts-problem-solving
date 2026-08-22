"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateOrderTotal = (items) => {
    if (items.length === 0)
        return 0;
    return items.map((item) => {
        return item.price;
    }).reduce((acc, price) => acc + price, 0);
};
console.log(calculateOrderTotal([{ name: "Burger", price: 250 }, { name: "Fries", price: 90 }, { name: "Soda", price: 60 }]));
console.log(calculateOrderTotal([{ name: "Pizza", price: 500 }]));
console.log(calculateOrderTotal([]));
//# sourceMappingURL=restaurantOrderTotal.js.map