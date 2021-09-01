var form1=document.querySelector("#form1");
var form2=document.querySelector("#form2");
var form3=document.querySelector("#form3");
var form4=document.querySelector("#form4");

var outputDiv1=document.querySelector(".m1");
var outputDiv2=document.querySelector(".m2");
var outputDiv3=document.querySelector(".m3");
var outputDiv4=document.querySelector(".m4");

var outputMessage1=document.querySelector(".mess1");
var outputMessage2=document.querySelector(".mess2");
var outputMessage3=document.querySelector(".mess3");
var outputMessage4=document.querySelector(".mess4");


var base=document.querySelector("#base");
var height=document.querySelector("#height");

function calculateAreaForRightTriangle(event){
    event.preventDefault();
    var b=Number(base.value);
    var h=Number(height.value);

    var area=(b*h)/2
    area=area.toFixed(2);
    outputDiv1.style.display='block';
    outputMessage1.innerText=`The area of a triangle whose base is ${b} units and height is ${h} units is ${area} sq.units`
}

var side=document.querySelector("#side")
function calculateAreaForEquilateralTriangle(event){
    event.preventDefault();
    var a=Number(side.value)

    var area=(Math.pow(a,2)*Math.pow(3,0.5))/4;
    area=area.toFixed(2);
    outputDiv2.style.display='block';
    outputMessage2.innerText=`The area of an equilateral triangle whose each side length is of ${a} units is ${area} sq.units.`
}

var side1=document.querySelector("#side1");
var side2=document.querySelector("#side2");
var side3=document.querySelector("#side3");

function calculateAreaOfTriangle(event){
    event.preventDefault();
    var a=Number(side1.value);
    var b=Number(side2.value);
    var c=Number(side3.value);
    if((a+b>c)&&(b+c>a)&&(c+a>b)){
        var s=(a+b+c)/2;
        var product=s*(s-a)*(s-b)*(s-c);
        var area=Math.pow(product,0.5);
        area=area.toFixed(2);

        outputDiv3.style.display='block';
        outputMessage3.innerText=`The area of a triangle whose side lengths are of ${a} units,${b} units and ${c} units is ${area} sq.units.`
        outputMessage3.style.color='#0A1931';
    }
    else{
        outputDiv3.style.display='block';
        outputMessage3.innerText=`Enter valid side lengths such that each side length should be less than sum of other two sides`
        outputMessage3.style.color='red';
    }
    
}

var sideAngle1=document.querySelector("#side-angle1");
var sideAngle2=document.querySelector("#side-angle2");
var angle1=document.querySelector("#angle1");

function calculateAreaOfTriangleProvided(event){
    event.preventDefault();
    var s1 = Number(sideAngle1.value);
    var s2 = Number(sideAngle2.value);
    var ang1=Number(angle1.value);

    var rad1=(Math.PI*ang1)/180;
    var sinAng=Math.sin(rad1);

    var area=(s1*s2*sinAng)/2;
    area=area.toFixed(2);

    outputDiv4.style.display='block';
    outputMessage4.innerText=`The area of a triangle whose side lengths are of ${s1} units and ${s2} units with an angle of ${ang1}° is ${area} sq.units.`

}

form1.addEventListener("submit",(e)=>calculateAreaForRightTriangle(e))
form2.addEventListener("submit",(e)=>calculateAreaForEquilateralTriangle(e));
form3.addEventListener("submit",(e)=>calculateAreaOfTriangle(e));
form4.addEventListener("submit",(e)=>calculateAreaOfTriangleProvided(e))