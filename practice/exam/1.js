function cubeNumber(number) 
{
    if (typeof number !== 'number') 
    {
        return "Input is not a number.";
    }
    return number * number * number;
}

console.log(cubeNumber(4));