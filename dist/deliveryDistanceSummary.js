"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDistanceSummary = (distances) => {
    if (distances.length === 0)
        return { total: 0, average: 0 };
    let total = distances.reduce((acc, element) => acc + element, 0);
    let average = total / distances.length;
    return { total, average };
};
console.log(getDistanceSummary([4, 6, 5, 9]));
//# sourceMappingURL=deliveryDistanceSummary.js.map