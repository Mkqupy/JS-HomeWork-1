// 1
var age = 14;

console.log(age);


// 2
let name = "Maria";

console.log(name);


// 3
let isStudent = "true";

console.log(isStudent);


// 4
let myString = "Будь-чого російського не має бути серед українців. Ми маємо винищувати, випалювати усе в нашій країні, що так чи інакше пов'язано із росією, тому що це в наших інтересах – Сергій Стерненко. ";

console.log(myString);


// 5
let myNumber = 11;

myNumber += 10;

console.log(myNumber);


// 6
let myNull = null;

console.log(myNull);


// 7
let prm = prompt("Введіть своє ім'я")
if(prm){
    alert("Вітаємо на сайті, " + prm)
}


// 8
let conf = confirm("Підтвердіть дію")
if(conf){
    alert("Дякую за підтвердження!")
}
else{
    alert("Дію відмінено!")
}


//9
alert("Ця дія може бути небезпечною")
let cnfr = confirm("Ви підтверджуєте цю дію?")
if(cnfr){
    alert("Дякую за підтвердження!")
}
else{
    alert("Дію відмінено!")
}