function reverseString (text)
{
    let reverse = '';
    for(let i = text.length-1; i>= 0 ;i--)
    {
        const element = text [i];
        // console.log(element);
        reverse +=element;
    }
    return reverse;
}

const string = 'I am a good girl';
const reversed = reverseString(string);
console.log(reversed);