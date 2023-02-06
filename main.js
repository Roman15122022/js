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

/*event
* ---------------------------------------*/

/*
var counter = 0;

function onClickButton(el){
    counter++;
    el.innerHTML = "You press on button : " + counter;
    /!*el.style.background = "red";
    el.style.color = "white";*!/
    el.style.cssText = "border-radius: 5px; font-size: 20px;";


}

function onInput(el){
    if(el.value == 'Hello'){
        alert("Hi)))")
    }
   // console.log(el.value);
}*/


/*control HTML*/

/*
var text = document.getElementById('text');
console.log(text.title);
text.style.backgroundColor = 'blue';

text.innerHTML = "New<br> string "

//document.getElementById('text').style.color = 'purple';


//var spans = document.getElementsByTagName('span')


var spans = document.getElementsByClassName('simple-text')

for (var i = 0; i < spans.length; i++){
    console.log(spans[i].innerHTML);
}
*/

/*Form
* --------------------------------------*/
/*
document.getElementById('main-form').addEventListener("submit", checkForm);
function checkForm(event){
    event.preventDefault();
    var el = document.getElementById('main-form');
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";

    if (name == "" || pass == "" || state == ""){
;        fail = "Fill in all the fields";

    }
    else if (name.length<2 || name.length>20){
        fail = 'Write correctly name!';
    }
    else if (pass != repass){
        fail = "Password mismatch ";
    }
    else if (pass.split("&").length>1){
        fail = "Not correctly pass";
    }

    if (fail != ""){
        document.getElementById('error').innerHTML = fail;

    }
    else {
        alert("All right");
        window.location = 'https://www.youtube.com/watch?v=1nzH6WCEonQ&list=PLDyJYA6aTY1kJIwbYHzGOuvSMNTfqksmk&index=14';

    }

}*/

/*timer interval
* ------------------------------*/
/*
var id = setInterval(my__func, 1000);

var counter = 0;
function my__func(){
    counter++;
    console.log(counter)
    if (counter == 3){
        clearInterval(id);
    }
}
*/

/*
setInterval(function (){
    counter++;
    console.log(counter);
}, 1000);*/

/*
setTimeout(function (){
    console.log("Working")
}, 2000);*/

//var date = new Date();

//console.log(date.getFullYear());
//console.log(date.getMonth()+1);
//date.setHours(18);
//date.setMinutes(18);
//console.log(date.getDate());
//console.log(date.getHours() + " : " + date.getMinutes());

/*var arr123 = [-5,6,7,81,8];

//console.log(arr.join(''));
//console.log(arr123.sort());
//console.log(arr123.reverse().join(", "))

var str = arr123.reverse().join(", ");

console.log(str.split(", "));*/


/*object
* ----------------------------*/
class Person {
    constructor(name, age, happiness ) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;

    }
     info(){
        console.log("Human " + this.name + ", age: " + this.age)
    }

}

var alex = new Person("Alex", 45 , true);
var bob = new Person("Bob", 19 , false);

//alex.name = "Roma";

//console.log(alex.age);
//console.log(alex.name);
//console.log(bob.age);

alex.info();
bob.info();