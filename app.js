/*
let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime; 
  }

  console.log( i ); 
}*/

/*2
let i =0;
do{
   
    if(i==0)
        console.log("0 - це нуль");
    else if(i%2==0)
        console.log(`${i} - це парне число`);
    else if(i%2!=0)
        console.log(`${i} - це непарне число`);
        i++

}
while(i<=10)
*/

/*3
for(let i = 0; i<=9;console.log(i++));
*/


function triangle(n) {
  let result = '', str = '', add = '*';
  for (let i = 0; i < n; i++) {
      str += add;
      add = '*';
      if (!(i % 1)) result += str + '\n';
  }
  return result;
}

console.log(triangle(5))

let q = 0,
  w = 0;
let maxq = 5;
let spaceq = "";
  starq = "";

while (q < maxq) {
  spaceq = "";
  starq = "";
  for (w = 0; w < maxq - q; w++) spaceq += " ";
  for (w = 0; w < 2 * q + 1; w++) starq += "*";
  console.log(spaceq + starq);
  q++;
}

function romb(a){
for (let i = 1; i <= a / 2; i++) {
      let countOfStars = i * 2 - 1;
      let countOfSpaces = a - countOfStars;
      let string = '';
      for (let j = 0; j < countOfSpaces / 2; j++) {
          string += ' ';
      }
      for (let j = 0; j < countOfStars; j++) {
          string += '*';
      }
      for (let j = 0; j < countOfSpaces / 2; j++) {
          string += ' ';
      }
      console.log(string);
  }
  let string = '';
  for (let i = 0; i < a; i++) {
      string += '*'
  }
  console.log(string)
  
  for (let i = 1; i <= a / 2; i++) {
      let countOfStars = a - 2 * i;
      let countOfSpaces = a - countOfStars;
      let string = '';
      for (let j = 0; j < countOfSpaces / 2; j++) {
          string += ' ';
      }
      for (let j = 0; j < countOfStars; j++) {
          string += '*';
      }
      for (let j = 0; j < countOfSpaces / 2; j++) {
          string += ' ';
      }
      console.log(string);
  }
}
console.log(romb(13))

/*5
let numb = 10000;
let counter =0;
while(numb>50){
    numb/=2;
    counter++;
}
console.log(numb);
console.log(counter);
*/

/*6
let mouth= (Number)(prompt("Enter number mounth"))
switch(mouth){
  case 1:
    alert("Зима");
    break;    
  
  case 2:
    alert("Зима");
    break;    
  
  case 3:
    alert("Весна");
    break;    
  
  case 4:
    alert("Весна");
    break;    
  
  case 5 :
    alert("Весна");
    break;    
 
  case 6:
    alert("Літо");
    break;

  case 7:
    alert("Літо");
    break; 

  case 8:
    alert("Літо");
    break; 

  case 9:
    alert("Осінь");
    break;

  case 10:
    alert("Осінь");
    break; 

  case 11:
    alert("Осінь");
    break; 

  case 12:
    alert("Зима");
    break;        
 default:
   alert("Такого місяця не існує");

}
*/


/*7
let tempC = -40;
let tempF =(9/5) * tempC + 32 ;
alert(tempF);
*/

/*8
let day= (Number)(prompt("Enter day week"))
switch(day){
  case 1:
    alert("Понеділок");
    break;    
  
  case 2:
    alert("Вівторок");
    break;    
  
  case 3:
    alert("Середа");
    break;    
  
  case 4:
    alert("Четвер");
    break;    
  
  case 5 :
    alert("П'ятниця");
    break;    
 
  case 6:
    alert("Субота");
    break;

  case 7:
    alert("Неділя");
    break; 
    default:
      alert("Немає такого дня");
}
*/