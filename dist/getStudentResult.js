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
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}));
//# sourceMappingURL=getStudentResult.js.map