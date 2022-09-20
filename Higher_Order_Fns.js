const radius=[1,2,3,4]

const area=function(radius){
    return Math.PI*radius*radius
}

const circumference=function(radius){
    return 2*Math.PI*radius
}

const calculate=function(radius,formula){
    const output=[];
    
    for(let i=0;i<radius.length;i++){
        output.push(formula(radius[i]))
    }
    
    return output
}

console.log(calculate(radius,area))
console.log(calculate(radius,circumference))
