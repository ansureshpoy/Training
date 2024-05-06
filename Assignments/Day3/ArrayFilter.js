// Day 3 Assignmnet for arrayfilter.js

const products = [
    { name: "Laptop", category: "Electronics", price: 300, stock: 4 },
    { name: "Shirt", category: "Apparel", price: 51, stock: 10 },
    { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
    { name: "Book", category: "Stationery", price: 75, stock: 20 },
    { name: "Pencil", category: "Stationery", price: 50, stock: 0 },
    { name: "HeadPhone", category: "Electronics", price: 1500, stock: 2 }

];

    var filteredArray = products.filter(function(products){
        return products.category =="Electronics";
        });

        console.log('only Electronics' + filteredArray);
        console.log(filteredArray);

        var filteredArray = products.find(function(products){
            return products.stock =="0";
            });
            console.log(filteredArray);

            var filteredArray = products.filter(function(products){
                return (products.price >25 && products.price <75)
                });

                console.log(filteredArray);
  