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