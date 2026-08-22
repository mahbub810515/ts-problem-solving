"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklySteps = (steps) => {
    if (steps.length === 0)
        return 0;
    return steps.reduce((acc, item) => acc + item, 0);
};
//test casses
console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([7000, 6500]));
console.log(calculateWeeklySteps([0]));
//# sourceMappingURL=dailyStepsTracker.js.map