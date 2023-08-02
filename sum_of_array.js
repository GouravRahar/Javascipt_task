function arraySum(arr){
    if (!Array.isArray(arr)) {
        throw new Error("Enter Valid Array");
    }
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

const array=[1,2,3,4,5]
const sum= arraySum(array);
console.log(sum);