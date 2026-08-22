"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklySteps = (steps) => {
    if (steps.length === 0)
        return 0;
    return steps.reduce((acc, item) => acc + item, 0);
};
console.log(calculateWeeklySteps([3000, 5200, 4100]));
//# sourceMappingURL=dailyStepsTracker.js.map