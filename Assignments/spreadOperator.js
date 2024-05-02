const array1 = [10, 20, 30];
const array2 = [31, 32, 33];
const merArray3 = [...array1, ...array2];

console.log (merArray3);

function sumTotal (...res)
{
    console.log ('inside funciton' + res[0]);

}

let result = sumTotal(merArray3);