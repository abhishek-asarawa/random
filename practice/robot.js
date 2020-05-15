const total_power = (arr) =>{
    let total_miles = 0;
    for (i of arr){
        total_miles += i[1];
    }
    return total_miles*10;
}

let test1 = [['a', 5], ['b', 4], ['c', 3]];
let test2 = [['a', 3], ['b', -2], ['c', 5]];

console.log(total_power(test1));
console.log(total_power(test2));