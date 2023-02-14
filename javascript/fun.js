funName1();
funName2(1,2);
console.log(Add(5,6));


function funName1(){
    console.log("I am simple function with no param and return type");
}

function funName2(p1,p2){
    console.log("Iam a function with params : "+p1 +" and "+p2);
    funName1();
}
function Add(p1,p2){
    return p1+p2;

}
function sum(num1,num2){
    var result = num1+num2
    console.log("<br>sum of" + num1 +num2 + ":" + result )

}
(sum(5,6))
(sum(10,20))
("<br> sum of 50,50:" + sum(50,50))
("I am nikki")