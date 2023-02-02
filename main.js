//console.error("Error 111");
/*
var num;
num = 5;*/

var num = 5;
num = 7;
console.log("Variable : " + num);

var number;
number = 5.5;

var num_1 = 5;
var num_2 = '5';
console.log(num_1 + num_2);

var num_3 = 5;
var num_4 = 15;

var res = num_3 - num_4;
console.log("Minus:" + (num_3 % num_4))

var num_5 = 5;
num_5 = num_5 + 7;
num_5 += 3
num_5++;
console.log(num_5)

var str_1 = "12";
var str_2 = "2";
console.log("Result : " + (str_1 + str_2))

var str_1 = Number("12");
var str_2 = Number("2");
console.log("Result : " + (str_1 + str_2));

console.log("Math : " + Math.PI);
console.log("Math : " + Math.E);
console.log("Math : " + Math.min(4,54,47,6,-9,0));
console.log("Math : " + Math.max(4,54,47,6,-9,0));
/*----------------------------------------------*/
var number = 15;
var isHasHause = true;


if ( number ==5 && !isHasHause ){
    console.log("Ok");
}
else if(number == 7){
    console.log("7!")
}
else if (number <10 ){
    console.log("Nice");
}

else  if (number >= 15){
    console.log(">=15")
}
else {
    console.log("Not ok");
}

var string = "word";

switch (string){
    case '4' :
        console.log("Variable 4");
        break;
    case 'word' :
        console.log("WORD!");
        break;
    default:
        console.log("default");
}