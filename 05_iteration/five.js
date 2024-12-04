const mynums = [1,2,3]
const mytotal = mynums.reduce((acc,currval)=>{
    console.log(acc);
    console.log(currval);
    
return acc+currval
},0)

console.log(mytotal);

const shoppingcart = [
    {itemname:"js course",
        price :299
    },
    {itemname:"android dev",
        price :12000
    },
    {itemname:"DS",
        price :5000
    }
]

const total = shoppingcart.reduce((acc , item)=> acc + item.price,0)

console.log(total);
