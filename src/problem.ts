type Deposit = {
    type: "deposit",
    amount: number
}
type Withdrawal = {
    type: "withdraw",
    amount: number
}

const processTransaction = (balance: number, transaction: Deposit | Withdrawal): number | string => {

    if (transaction.type == "deposit") {
        balance += transaction.amount
    }
    if (transaction.type === "withdraw") {
        if (balance < transaction.amount) {
            return "insufficient balance";
        } else {
            balance -= transaction.amount
        }
    }
    return balance
}
//Example of test casses
console.log(processTransaction(5000, { type: "deposit", amount: 2000 }))
// 7000 
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }))
// 3000 
// insufficient balance: 
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }))
// 5000  (unchanged)
// insufficient balance 