const products = [
    { id:1, name : 'RealMe phone' , price : 18000},
    { id:2, name : 'Mac Book air laptop' , price : 180000},
    { id:3, name : 'iphone' , price : 150000},
    { id:4, name : 'Dell laptop' , price : 80000},
    { id:5, name : 'Sumsung phone' , price : 75000},
    { id:6, name : 'Nokia phone' , price : 10000},
    { id:7, name : 'HP laotop' , price : 60000},
    { id:6, name : 'Phone one' , price : 10000}
];

// for (const product of products)
// {
//     console.log(product);
// }

function matchedProdeucts ( products, search)
{
    const matched = [];
    for (const product of products)
    {
        // if(product.name.includes(search))
        //lowercase kore nibo, taile shob phone pabe 
        if(product.name.toLowerCase().includes(search.toLowerCase()))
        {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProdeucts(products,'phone');
console.log(result);