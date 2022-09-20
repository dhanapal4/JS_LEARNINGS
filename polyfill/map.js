const array=[1,2,3,4,5]

const callbackFn=(value,index,array)=>{
    console.log('value,ind',value,index,array)
}

//Map Polyfill method
Array.prototype.myCustomMapFn=function(callbackFn){
    let arr=[];
    for(let i=0;i<this.length;i++){
        arr.push(callbackFn(this[i],i,this))
    }
    
    return arr;
}


array.myCustomMapFn(callbackFn)
