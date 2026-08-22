type Employee={
    name:string,
    onDuty:boolean}
const findOnDutyEmployees=(employees:Employee[])=>{
    return employees.filter((employee)=>{
        return employee.onDuty
    })

}

console.log(findOnDutyEmployees([{name:"Lima",onDuty:true},{name:"Karim",onDuty:false}] ))
console.log(findOnDutyEmployees([{name:"Nusrat",onDuty:false}]))