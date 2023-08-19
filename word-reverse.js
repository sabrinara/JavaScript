function reverseWord(str)
{
   const words = str.split(' ');
//    [ 'I', 'am', 'a', 'good', 'girl' ]

    const result = [];
for(let i = words.length-1; i>= 0 ;i--)
{
    const element = words [i];
    // console.log(element);
    result.push(element);
}
console.log(result);
const newString = result.join(' ');
return newString;
}

const string = 'I am a good girl';
const reversed = reverseWord(string);
console.log(reversed);