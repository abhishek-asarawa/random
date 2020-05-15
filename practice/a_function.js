const a_function = (n, k) => {
    if (n <= 0){
        return "YOU ARE AN IDIOT!!";
    } else {
        let res = 0;
        if (k < 0){
            k = 0;
        }
        let i = 0;
        while (n-i >= k){
            res = res+(n-i)**2;
            i += 1;
        }
        return res;
    }
};

console.log(a_function(3, 1));
console.log(a_function(22, 4));
console.log(a_function(0, -1));
console.log(a_function(5, -17));