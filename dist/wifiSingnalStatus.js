"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSignalStatus(percentage) {
    // write your code here
    if (percentage <= 20) {
        return "Poor";
    }
    else if (percentage >= 26 && percentage <= 55) {
        return "Fair";
    }
    else if (percentage >= 56 && percentage <= 85) {
        return "Good";
    }
    else {
        return "Excellent";
    }
}
//test casses
console.log(getSignalStatus(15));
console.log(getSignalStatus(40));
console.log(getSignalStatus(70));
console.log(getSignalStatus(95));
//# sourceMappingURL=wifiSingnalStatus.js.map