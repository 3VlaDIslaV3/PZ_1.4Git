const color = require('colors');
const faker = require('faker');
const say = require('say') 
const os = require('os')
const path = require('path') 
var readline = require('readline');

let randomName = faker.name.findName();
let randomEmail = faker.internet.email();
let randomCard = faker.helpers.createCard();
console.log("Name:  "+randomName+"  Email: "+ randomEmail+" "+randomCard);

let text = "Slava Ukraine";
say.speak(text,1);
console.log( color.random(text));



// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter path ", function(answer) {
    
//     console.log(path.basename(answer)+"  "+path.extname(answer)+"  "+os.type());
  
//     rl.close();
// });


 
 
 
 
 
 
  function eagle(){

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      let min =0;
      let max =2;

     let result=Math.round( Math.random())
      rl.question("Enter 0 or 1 ", (number)=> {
    
        if(result===Number.parseInt(number)){
            console.log("You win")
        }
        else{
            console.log("You louse")
        }
      
        rl.close();
      });


        
    }
        eagle();