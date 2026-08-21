"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patients) => {
    if (patients.type === "emergency") {
        if (patients.emergencyLevel === 1) {
            return "Critical";
        }
        if (patients.emergencyLevel === 2) {
            return "Serious";
        }
        if (patients.emergencyLevel === 3) {
            return "Moderate";
        }
    }
    return "General patient";
};
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
// "General patient" 
console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 }));
// "Critical emergency" 
console.log(getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 }));
// "Moderate emergency" 
//# sourceMappingURL=getPatientStatus.js.map