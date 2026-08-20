"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (students) => {
    const marks = students.marks;
    const totalMark = marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMark / marks.length;
    const result = average >= 40 ? "Passed" : "Failed";
    return {
        name: students.name,
        average,
        result,
    };
};
//test casses 
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}));
// another example: 
console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
}));
// Expected output: 
// { name: "Nabil", average: 32.5, result: "Failed" }
//# sourceMappingURL=getStudentResult.js.map