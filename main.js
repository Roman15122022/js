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

/*
var arr_arr = [5,8,9,4,6,1, "string"];
 for (var g = 0; g < arr_arr.length; g++){
     for (var k = 0; k < arr_arr.length; k++){
         arr_arr[k] *= 2;
     }

     console. log("Элемент "  + (g+1) + ": " + arr_arr[g]);

 }
*/

/*Alert,prompt,confirm*/


/*
for (var l = 0; l<3;l++){
alert("Good whether");
}*/

/*
 var data = confirm("Confirm?");
 if(data){
     alert("Okay");
 }
 else {
     console.log("Why?");
 }
*/

/*
var data =  prompt("Say, how old are you?", 18);
if(data<18 && data!=null){
    alert("You not adult");
}
else if(data == null){
    alert("Okay")
}
 else alert("You are " + data);*/

/*
var person = null;
if(confirm("You are sure?")){
    person = prompt("Your Name");
    alert("Hi, " + person)
} else {
    alert("You press on cancel")
}*/

/*function
* -----------------------------------------*/

/*
function info(word) {
    console.log(word +'!')
    console.log("!")
}

function summ(a,b){
    var res = a + b;
    info(res)
}

summ(5,7)
*/

/*function summa(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

var array = [5,4,3,2,1];
var array2 = [5,45,2,12,1];

 var  res = summa(array2);
 console.log(res);

summa(array);*/

//var n = 10;

/*
function inf(){
    var n = 10;
    console.log(n)
}
inf();*/
