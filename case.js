const userName = 'blackPink';
const userInput = 'blackPink';
console.log(userInput.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
console.log(userName.toLocaleUpperCase());
if( userName.toLowerCase() == userInput.toLowerCase())
{
    console.log('valid user');
}
else
{
    console.log('invalid user');
}