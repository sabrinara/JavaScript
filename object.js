const student = {
    name : 'Sakib khan',
    id: 121,
    address : 'movie cinema',
    isSingle : true ,
    friends :['Apu','Raaz','Salam','Aamir'],
    //inside object, array can be declared,also array can carry object
    movies : [{name: 'no.1',year: 2015},{name: 'King khan',year: 2017},{name: 'Goo',year: 2018}],
    //inside object, object can be declared
    act : function()
    {
        console.log('acting like sakib khan');
    },
    //inside object, object can be declared
    car :{
        brand : 'tesla',
        price : 5000000,
        made : 2025,
        manufacturer : {
            name : 'tesla',
            ceo : 'Elon Mask',
            country : 'USA'
        },
    }
};
// console.log(student.friends);
// console.log(student.car);
// console.log(student.car);
// console.log(student.car);
console.log(student.act);
student.act();