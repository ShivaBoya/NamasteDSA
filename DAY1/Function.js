function sum(a,b){
    let add = a+b;
    console.log(add)
}
let a=10
let b=20
sum(a,b)

function square(x){
    let result = x*x;
    return result
}

let res=square(3)
console.log(res)

function Vote(n){
        if(n>18){
            console.log("Eligeble")
        }else{
            console.log("Not Eligeble")
        }
    }
Vote(12)

function EvenOdd(n){
        if(n % 2 == 0){
            console.log("Even")
        }else{
            console.log("Odd")
        }
    }

EvenOdd(11)

let arr=[1,2,3,4,5,6,7,8,9,89,78,65,34]
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}


function Negitive(arr1){
    let count=0
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++
        }
        
    }
    return count
}
let arr1 = [12,23,2,33,44,-1,-5,-6]
let res1 = Negitive(arr1)
console.log(res1)

function Smallest(arr2){
    let Small = Infinity
    for(let i=0; i<arr2.length; i++){
        if(arr2[i] < Small){
            Small = arr2[i]
        }
    }
    return Small
}
let arr2 = [1,2,3,4,5,6,7,-6,-1]
let res2 = Smallest(arr2)
console.log(res2)

function Largest(arr3){
    let Large = -Infinity
    for(let i=0; i<arr3.length; i++){
        if(arr3[i] > Large){
            Large = arr3[i]
        }
    }
    return Large
}
let arr3 = [1,2,3,4,5,6,7,-6,-1]
let res3 = Largest(arr3)
console.log(res3)