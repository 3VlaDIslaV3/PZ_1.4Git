let electrical_network = 0;
let profit = 0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
class Electricity_consumption{
    constructor(e1, e2) {
        this.electricity1 = e1 * 1;
        this.electricity2 = e2 * 1;
    }
    consumption(){
        electrical_network += this.electricity1 + this.electricity2;
    }
    string(){
        let a = "Виготовлення/Споживання електроенергії вдень: " + this.electricity1 +
            "\nВиготовлення/Споживання електроенергії вночі: " + this.electricity2;
        return a;
    }
}
class Power_plant extends Electricity_consumption{
    constructor() {
        super(getRandomInt(1, 101), 0);
    }
}
class Solar_panel extends Electricity_consumption{
    constructor() {
        super(getRandomInt(1, 6), 0);
    }
}
class Residential_building extends Electricity_consumption{
    constructor(count_hourse) {
        super((-1) * count_hourse * 0.004, (-1) * count_hourse * 0.001);
        this.count_hourse = count_hourse;
    }
}
class Power_line{
    constructor() {
        this.power = getRandomInt(1, 21);
        this.the_price_is_megawatts = getRandomInt(30, 41);
        this.power_days = this.power;
    }
    output(){
        if (electrical_network !== 0){
            if (electrical_network < 0){
                if (Math.abs(electrical_network) < this.power_days){
                    profit -= Math.abs(electrical_network) * this.the_price_is_megawatts;
                    this.power_days -= Math.abs(electrical_network);
                    electrical_network = 0;
                }
                else {
                    profit -= this.power_days * this.the_price_is_megawatts;
                    electrical_network += this.power_days;
                    this.power_days = 0;
                }
            }
            else {
                if (electrical_network < this.power_days){
                    profit += electrical_network * this.the_price_is_megawatts;
                    this.power_days -= electrical_network;
                    electrical_network = 0;
                }
                else {
                    profit += this.power_days * this.the_price_is_megawatts;
                    electrical_network -= this.power_days;
                    this.power_days = 0;
                }
            }
        }
    }
    string(){
        let a = "Кількість можливих перевезень МВатт в один день: " + this.power +
        "\nЦіна за один МВатт: " + this.the_price_is_megawatts;
        return a;
    }
}
let days = 10;
let power_plants = [];
let solar_panels = [];
let residential_buildings = [];
let power_lines = [];
function Creater(){
    console.log("Електростанції: {");
    for (let a = 0; a < getRandomInt(1, days); a++){
        power_plants[a] = new Power_plant();
        console.log(power_plants[a].string());
    }
    console.log("}");
    console.log("Сонячні панелі: {");
        for (let a = 0; a < getRandomInt(1, days); a++){
        solar_panels[a] = new Solar_panel();
        console.log(solar_panels[a].string());
    }
    console.log("}");
    console.log("Житлові будинки: {");
    for (let a = 0; a < getRandomInt(1, days); a++){
        residential_buildings[a] = new Residential_building(getRandomInt(1, 401));
        console.log(residential_buildings[a].string());
        console.log("Кількість квартир в будинку: " + residential_buildings[a].count_hourse)
    }
    console.log("}");
    console.log("Лінії електропередач: {");
    for (let a = 0; a < getRandomInt(1, days); a++){
        power_lines[a] = new Power_line();
        console.log(power_lines[a].string());
    }
    console.log("}");
}
function Electrical_network_of_this_days(){
    for (let a = 0; a < power_plants.length; a++){
        power_plants[a].consumption();
    }
    for (let a = 0; a < solar_panels.length; a++){
        solar_panels[a].consumption();
    }
    for (let a = 0; a < residential_buildings.length; a++){
        residential_bu


ildings[a].consumption();
    }
}
function Job(){
    Creater();
    for (let a = 0; a < days; a++){
        Electrical_network_of_this_days();
        for (let b = 0; b < power_lines.length; b++){
            if (electrical_network !== 0){
                power_lines[b].output();
            }
            power_lines[b].power_days = power_lines[b].power;
        }
        console.log("Електрична мережа міста  " + (a + 1) + " становить: " + electrical_network);
        console.log("Заробіток " + (a + 1) + " становить: " + profit);
    }
}
Job();
