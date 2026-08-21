"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processTransaction = (balance, transaction) => {
    let totalAmount = balance;
    if (transaction.type === "deposit") {
        totalAmount += transaction.amount;
    }
    if (transaction.type === "withdraw") {
        if (totalAmount < transaction.amount) {
            totalAmount -= transaction.amount;
        }
        else {
            return "insufficient balance";
        }
    }
    return totalAmount;
};
//Example 
console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
// 7000 
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
// 3000 
// insufficient balance: 
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
// 5000  (unchanged)  
// insufficient balance 
//# sourceMappingURL=bankTransactionProcessor%20.js.map