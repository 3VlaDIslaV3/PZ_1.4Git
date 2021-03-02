class Random {
    static nextDouble(low,high){
         return ((Math.random() * high) + low).toFixed(1);
    }
     static nextInt(low,high){
         return Math.floor(Math.random() * high) + low;
     }
     static nextElement(array){
         return array[Math.floor(Math.random() * array.length)]
     }
 }

 console.log(Random.nextDouble(1,10))
 console.log(Random.nextInt(1,10))
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(Random.nextElement(arr))