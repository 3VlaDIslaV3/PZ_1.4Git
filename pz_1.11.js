// function seconds (total) {
//     if (total<60)
//         console.log("ERROR! Total < 60 !")
//     else
//     console.log( total % 60);

// }
// seconds(1000)



// function perimeter (sideLength, count) {
//     return sideLength * count;
// }
// console.log(perimeter(5,5))

// function printDigits (n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("fizzbuzz");
//         }
//         else if (i % 3 == 0) {
//             console.log("fizz");
//         }
//         else if (i % 5 == 0) {
//             console.log("buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// printDigits(15)

// function calculate (num1, num2, num3) {
//     return (num1 + num2 + num3) / 3;
// }
// console.log(calculate(5,10,15))

// function isDivisible(n,x,y){
//     let end;
//     if(n%x==0 && n%y==0){
//         end="Success";
//     }else{
//         end="Error";
//     }
//     return end;
// }
// console.log(isDivisible(12,3,4));
// //Part 2
// function isD(n,x,y){
//     let res=(n%x==0 && n%y==0) ? 'Success' : 'Error';
//     return res;
// }
// console.log(isD(13,3,4));

// //Part 3
// const isd= (n,x,y) =>{
//     const s=(n%x==0) && (n%y==0);
//     return s;
// };
// console.log(isd(12,3,4))


// function magicArrayFunction(elementsCount) {
//     function random(min, max) {
//         return Math.round(min + Math.random() * (max - min));
//     }
//     let magicArrayOfOdd = [];
//     let magicArray = [];
//     for (let i = 0; i < elementsCount; i++) {
//         magicArray.push(random(1,100));
//     }
//     console.log(magicArray);
//     let maxValue = 0;
//     let minValue = 1000;
//     let elementsSum = 0;
//     for (let i = 0; i < magicArray.length; i++) {
//         if (magicArray[i] > maxValue) {
//             maxValue = magicArray[i];
//         }
//         if (magicArray[i] < minValue) {
//             minValue = magicArray[i];
//         }
//         if (magicArray[i] % 2 == 1) {
//             magicArrayOfOdd.push(magicArray[i]);
//         }
//         elementsSum += magicArray[i];
//     }
//     console.log("Biggest number is " + maxValue);
//     console.log("Lowest number is " + minValue);
//     console.log("Sum of elements is " + elementsSum);
//     console.log("Average is " + elementsSum / magicArray.length);
//     console.log("Odd numbers is " + magicArrayOfOdd);
// }
// magicArrayFunction(10);



function magic2DArrayFunction() {
    let magicArray = [[],[],[],[],[]];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            magicArray[i][j] = Math.round(-50 + Math.random() * (100));
        }
    }  
           console.log(magicArray); 
    
    setTimeout(()=>{
        let newMagicArray = magicArray.slice();
        for (let i = 0; i < 5; i++) {
            if (newMagicArray[i][i] < 0) {
                newMagicArray[i][i] = 0;
            }
            if (newMagicArray[i][i] > 0) {
                newMagicArray[i][i] = 1;
            }
        }       
               console.log( newMagicArray)
            
    }, 2000);
}
magic2DArrayFunction()



// function mathOperations(number1, number2, operationType) {
//     switch (operationType) {
//         case "Add":
//             console.log (number1 + number2);
//         case "Sub":
//             console.log (number1 - number2);
//         case "Mul":
//             console.log (number1 * number2);
//         case "Div":
//             if(number2 == 0) {
//                 console.log("Can't divide by 0");
//                 break;
//             }
//             else {
//                 console.log (number1 / number2);
//             }
//         default:
//             console.log("Hello World");
//             break;
//     }
// }
// mathOperations(50,5,"Div")


// function numberDetector(number) {
//     let description = "";
//     if (number < 0) {
//         description += "Negative ";
//     }
//     if (number > 0) {
//         description += "Positive ";
//     }
//     function isSimple(number) {
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) return "Not Simple ";
//         }
//         return "Simple ";
//     }
//     description += isSimple(number);
//     if (number % 2 == 0) {
//         description += "Dividable by 2 ";
//     }
//     if (number % 2 != 0) {
//         description += "Not Dividable by 2 ";
//     }
//     if (number % 3 == 0) {
//         description += "Dividable by 3 ";
//     }
//     if (number % 3 != 0) {
//         description += "Not Dividable by 3 ";
//     }
//     if (number % 5 == 0) {
//         description += "Dividable by 5 ";
//     }
//     if (number % 5 != 0) {
//         description += "Not Dividable by 5 ";
//     }
//     if (number % 6 == 0) {
//         description += "Dividable by 6 ";
//     }
//     if (number % 6 != 0) {
//         description += "Not Dividable by 6 ";
//     }
//     if (number % 9 == 0) {
//         description += "Dividable by 9 ";
//     }
//     if (number % 9 != 0) {
//         description += "Not Dividable by 9 ";
//     }
//     console.log( description);
// }
// numberDetector(50)

// let arr = [3,5,"d",45,34,"vlad"]
// function arrayTrick(array) {
//     array.reverse();
//     for (let i = 0; i < array.length; i++) {
//         if (!isNaN(Number.parseInt(array[i]))) {
//             array[i] *= array[i];
//         }
//     }
//     console.log( array);
// }
// arrayTrick(arr)