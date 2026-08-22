"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findOnDutyEmployees = (employees) => {
    return employees.filter((employee) => {
        return employee.onDuty;
    });
};
console.log(findOnDutyEmployees([{ name: "Lima", onDuty: true }, { name: "Karim", onDuty: false }]));
//# sourceMappingURL=employeeOn-DutyFinder%20.js.map