

let money = 10000;
const buyCar = (car: any) => {
    return new Promise(((resolve,reject)=>{
        setInterval(()=>{
            if(money>=10000){
                resolve("can buy" + car)
            }else{
                reject("do not enough money")
            }
        },100)
    }))
}
money = 1000001
const promise = buyCar("vinfast").then(value => {
    console.log(value);
},error => {
    console.log(error)
})