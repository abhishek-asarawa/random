// let myMom = false;
let myPromise = new Promise((resolve, reject) => {
    if (2000<5000){
        resolve("I kept my promise.");
    } else {
        reject("I need to do more work.");
    }
});

myPromise.then((value) => {
    console.log("I am the WINNER!!!!");
    JSON.stringify(value);
});

myPromise.catch((reason) => {
    console.log("Ummmm, It is not sufficient " + reason);
});

myPromise.finally(() => {
    console.log("I am a WARRIOR.");
});