function canPay(changeArray, totalDue) {

    if (changeArray.length === 0) 
    {
        return "array is empty";
    }

    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) 
    {
        sum += changeArray[i];
    }

    return sum >= totalDue;
}
console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 5, 5], 10));  
console.log(canPay([10,2], 10));  
