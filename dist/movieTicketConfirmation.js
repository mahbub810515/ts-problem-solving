"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatTicketConfirmation = (tickets) => {
    return `${tickets.name}'s ticket for ${tickets.movie} is confirmed at ${tickets.time}.`;
};
//the test casses
console.log(formatTicketConfirmation({ name: "Nabila", movie: "Interstellar", time: "9:15 PM" }));
console.log(formatTicketConfirmation({ name: "Jamal", movie: "Inception", time: "6:00 PM" }));
//# sourceMappingURL=movieTicketConfirmation.js.map