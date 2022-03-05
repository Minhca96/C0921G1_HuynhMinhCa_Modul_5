// let money = 10000;
// const buyACar = (car: any) => {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money >= 10000) {
//                 resolve("can buy " + car);
//             } else {
//                 reject("Do not enough money");
//             }
//         }, 100);
//     }))
// }
//
// money = 1000001;
// const promise = buyACar("Vinfast").then(value => {
//     console.log(value);
// }, error => {
//     console.log(error);
// })
var money = 10000;
var buyCar = function (car) {
    return new Promise((function (resolve, reject) {
        setInterval(function () {
            if (money >= 10000) {
                resolve("can buy" + car);
            }
            else {
                reject("do not enough money");
            }
        }, 100);
    }));
};
money = 1000001;
var promise = buyCar("vinfast").then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
