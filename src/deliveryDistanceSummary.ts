type Distance={total:number,average:number}

const getDistanceSummary=(distances:number[]):Distance=>{
    if(distances.length===0)return {total:0,average:0}
    let total=distances.reduce((acc,element)=> acc+element,0)
    let average=total/distances.length;

    return {total,average}    


}
//test casses
console.log(getDistanceSummary([4, 6, 5, 9]))
console.log(getDistanceSummary([10,10]))
console.log(getDistanceSummary([]))