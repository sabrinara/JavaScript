const  string ='I am good at nothing, my name is Sabrina Rashid';
const subString = 'thing';

const doesExist = string.includes(subString);


console.log(doesExist);
//index check of the substring inside the string
console.log(string.indexOf(subString));

// lower or uppercase e convert kore nile jmn hobe

const doesExistOneLine = string.toLowerCase().includes(subString.toLowerCase());
console.log(doesExistOneLine);


// word ache naki 
//indexOf
if(string.indexOf(subString) !== -1)
{
    console.log('Valid');
}
else
{
    console.log('Invalid');
}


//startWith
console.log(string.startsWith(subString));
console.log(string.startsWith('I'));

//endWith
console.log(string.endsWith('Rashid'));
console.log(string.endsWith(subString));