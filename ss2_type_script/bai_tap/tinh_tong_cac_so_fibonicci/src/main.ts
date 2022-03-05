
function calculateSum(n: number) {
    let arr = [];
    if(n <= 0){
        return 0;
    }else{
        arr[0] = 0;
        arr[1] = 1;
        let sum = arr[0] + arr[1];
        for( let i =2; i <= n; i++){
            arr[i] = arr[ i - 1] + arr[i - 2];
            sum += arr[i]
        }
        return sum
    }
}
let n = 3;
console.log(calculateSum(n));