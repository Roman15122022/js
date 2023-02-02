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
/*If----------------------------------------------*/
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


/*Massive
* -----------------------------*/
var arr = new Array(54, 7, 6);
var arr2 = [5,78,87, true, "word", 5.7];
console.log(arr2);
console.log(arr2[3]);
arr2[3] = "1000";
console.log(arr2[3]);
console.log(arr2.length);

var matrix = [
    [4,5,6],[true, "word", 5.7],[0,-100]
];
matrix[1][0] = 90;
console.log(matrix);


/*cycles
* -----------------------------------*/
/*for (var i = 1; i <= 10; i++){
    console.log(i);
}*/
console.log("-----------------------")

/*
var j = 1000;
while (j >10){
    console.log(j + " -7")
    j -= 7;
}*/

/*
var isHasCar = true;
while (isHasCar){

}*/

/*
var x =0;
do {
    console.log(x);
    x++;
}while (x<50)
*/

/*
for (var t = 10; t <= 20; t++){
    if (t>15)
        break;
    console.log(t);
}*/

var arr_arr = [5,8,9,4,6,1, "string"];
 for (var g = 0; g < arr_arr.length; g++){
     for (var k = 0; k < arr_arr.length; k++){
         arr_arr[k] *= 2;
     }

     console. log("Элемент "  + (g+1) + ": " + arr_arr[g]);

 }

