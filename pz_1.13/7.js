function count(obj) {
    let count = 0;
    for (let key in obj) {
      
        count++
    }
    
    return count;
}

let a = { a: 1, b: 2 };
console.log(count(a)); 
let b = function () {};
console.log(count(b)); 
let c = [1, 2, 3];
console.log(count(c)); 
let d = [];
d[100] = 1;
console.log(count(d)); 
