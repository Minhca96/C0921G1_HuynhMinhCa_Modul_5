// function calculateSum(n: number)
// {
//     let fibo = [];
//     if (n <= 0)
//         return 0;
//     fibo[0] = 0;
//     fibo[1] = 1;
//
//     let sum = fibo[0] + fibo[1];
//     for(let i = 2; i <= n; i++)
//     {
//         fibo[i] = fibo[i - 1] +
//             fibo[i - 2];
//         sum += fibo[i];
//     }
//
//     return sum;
// }
// let n = 3;
// console.log(`Sum of Fibonacci numbers is :
//         ${calculateSum(n)} <br>`);
function calculateSum(n) {
    var arr = [];
    if (n <= 0) {
        return 0;
    }
    else {
        arr[0] = 0;
        arr[1] = 1;
        var sum = arr[0] + arr[1];
        for (var i = 2; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
            sum += arr[i];
        }
        return sum;
    }
}
var n = 3;
console.log(calculateSum(n));
