"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findOnDutyEmployees = (employees) => {
    return employees.filter((employee) => {
        return employee.onDuty;
    });
};
console.log(findOnDutyEmployees([{ name: "Lima", onDuty: true }, { name: "Karim", onDuty: false }]));
console.log(findOnDutyEmployees([{ name: "Nusrat", onDuty: false }]));
//# sourceMappingURL=employeeOn-DutyFinder.js.map