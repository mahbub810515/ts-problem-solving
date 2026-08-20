type Role = "admin"|"editor"|"viewer"

const canEdit=(role:Role)=>{
    if(role==="admin" || role==="editor") return true;

    return false

}
console.log(canEdit("admin"))
// true 
  
console.log(canEdit("editor"))
// true 
  
console.log(canEdit("viewer"))
// false 