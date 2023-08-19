let first = 5;
let second = 7;
console.log(first,second);

// swap er jonn

//wrong approach
// first =second;
// second= first;
// console.log(first,second);

//1st approach 
// const temp = first;
// first=second;
// second =temp;
// console.log(first,second);

//second approach ------------- Destructuring 
[first,second] = [second,first];
console.log(first,second);