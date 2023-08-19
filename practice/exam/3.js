function sortMaker(arr) 
{
    if (arr[0] < 0 || arr[1] < 0) 
    {
        return "Invalid Input";
    }

    if (arr[0] === arr[1]) 
    {
        return "equal";
    }
    
    return arr[1] > arr[0] ? [arr[1], arr[0]] : [arr[0], arr[1]];
}

console.log(sortMaker([2, 3]));
console.log(sortMaker([5, 5]));
console.log(sortMaker([5, 4]));
console.log(sortMaker([2, -2])); 