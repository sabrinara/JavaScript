const  string ='I am good at nothing. My name is Sabrina Rashid . I know how good I am';

//word alada alada kore,maje space 
const parts = string.split(' ');
console.log(parts);


//line alada alada kore, dot(.)maje
const sentence = string.split('.');
console.log(sentence);

//alphabet(character) alada alada kore, kichu nei maje
const char = string.split('');
console.log(char);


// join
const  lines =['I am good at nothing', 'My name is Sabrina Rashid' , 'I know how good I am'];
const newString = lines.join('.');
console.log(newString);