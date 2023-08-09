var fruits = ['Apple', 'Banana', 'Orange'];

//find oposition of banana
var findBanana = fruits.indexOf('Banana');
console.log(findBanana);

//replace banana with mango
fruits[1]='Mango';
var mangoFound = fruits;
console.log(mangoFound);

//remove orange ,add watermelon
fruits.pop();
fruits.push('Watermelon');
var popPush =  fruits;
console.log(popPush);