
//#6
let characters = [
    {name: "Vlad", age: 20},
    {name: "Oleg", age: 40}
];

function pluck(array) {
    return array.map(item => item.name)
        .filter((value, index, self) => self.indexOf(value) === index)
}

console.log(pluck(characters)); 
