var input = process.stdin;
input.setEncoding('utf-8');
console.log("Enter Input:");
var inp = '';
let arr
input.on('data', function(data){
    if (data == "end\r\n"){
       arr = inp.split("\r\n");
       print(arr);
        process.exit();
    }

    if (data == "end\n"){
        arr = inp.split("\n");
        print(arr);
        process.exit();
    }

    inp += data;
});

function print(arr){
    console.log(arr);
}

