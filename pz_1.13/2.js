

 function Board(length, width) {
    this.length = length;
      this.width = width;
     let string = '';
     let str = '';
     for (;length > 0; length--){
         string += '\n'
         string += length;
         for (let y = 1; y < width + 1; y++){
             if ( y % 2 !== 0){
                 string += " #"
             } else string += " @"
         }
     }
     console.log(string)
     for (let i = 0; i < width; i++) {
        str += String.fromCodePoint(65 + i) + ' ';
     }
     console.log('  ' + str);
 }

 let chess = new Board(9, 9);
 console.log(chess);



