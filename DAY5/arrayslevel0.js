function move(n){
    let x = 0
    for(let i=0; i<n.length; i++){
        if(n[i] !== 0){
            n[x] = n[i]
            x++
        }
    }
    for(let i=x; i<n.length; i++){
        n[i]=0
    }
    console.log(n)
}
move([0,1,0,3,2,0,0])

function Ones(n){
    let currCount = 0
    let maxCount = 0
    for(let i=0; i<n.length; i++){
        if(n[i] == 1){
            currCount++
        }else{
            maxCount=Math.max(currCount,maxCount)
            currCount=0
        }
    }
    return Math.max(currCount,maxCount)
}

console.log(Ones([1,1,0,0,1,0,1,0,1]))


function Missing(num){
   
     let n = num.length;
    let totalSum = (n * (n + 1)) / 2;

    let partialSum = 0;
    for (let i = 0; i < num.length; i++) {
        partialSum += num[i];
    }

    return totalSum - partialSum;

}
console.log(Missing([1,0,2,4,5]))

class Solution {
    arraySortedOrNot(arr, n) {
       for(let i=0; i<arr.length-1; i++){
         for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                return false
            }
            
         }
       }
       return true
    }
}

class Solution {
    countOdd(arr, n) {
       let oddsum = 0
       for(let i=0; i<arr.length; i++){
        if(arr[i] %2 !==0){
            oddsum ++
        }
       }
       return oddsum
    }
}

class Solution {
    sum(arr,n) {
     let sum = 0
     for(let i=0; i<arr.length; i++){
        sum += arr[i]
     }
     return sum
    }
   
}
