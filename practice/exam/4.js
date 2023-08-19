function findAddress(obj) 
{
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return `${ street},${ house},${ society}`;
}


const address1 = { street: 10, house: "15A", society: "Earth Perfect" };
console.log(findAddress(address1));

const address3 = { street: 10,  society: "Earth Perfect" };
console.log(findAddress(address3));

const address2 =  {street:10};
console.log(findAddress(address2)); 
