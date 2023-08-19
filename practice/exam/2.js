function matchFinder(string1, string2) 
{
if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return "Inputs are not strings.";
}
else if(string1.includes(string2))
{
    return true;
}
else
{
    return false;
}
}

console.log(matchFinder("John Doe","ohn"));
console.log(matchFinder("JavaScript","Code"));
console.log(matchFinder("open", 5));
console.log(matchFinder("Peter Parker","pet"));
