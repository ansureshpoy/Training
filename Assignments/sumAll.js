// sumAll Assignments

// function sumAll(num1, num2, ...res) {
//     console.log(res.length); // 4
//     let ressum = num1 + num2 + res[0];
//    // return ressum;
//    let sumAll = sumAll.map(e => {
//     return num + res;
// });
// }
function sumAll(num, ...res) {
    console.log(res.length); // 4
  //  let ressum = num1 + num2 + res[0];
   // return ressum;
   let sumTotal = res.map(val => {
    return num + res;
    console.log(sumTotal);
});
}
let result = sumAll(7, 2, 4, 9, 1, 6);
console.log(result); //13