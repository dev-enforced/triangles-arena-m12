var angle1=document.querySelector("#angle1");
var angle2=document.querySelector("#angle2");
var angle3=document.querySelector("#angle3");
var form=document.querySelector("#main-form");
var outputDiv=document.querySelector(".main-message");
var outputMsg=document.querySelector("#output-short");
var resetBtn=document.querySelector("#btn-reset");
function calculateAngleSum(a1,a2,a3){
    var sum=a1+a2+a3;
    return sum;
}
function checkAngleSum(event){
    event.preventDefault();

    var ang1=Number(angle1.value);
    var ang2=Number(angle2.value);
    var ang3=Number(angle3.value);
    var sum=calculateAngleSum(ang1,ang2,ang3);
    outputDiv.style.display="block"
    if(sum===180){
        outputMsg.innerText='These angles form a triangle';
    }else{
        outputMsg.innerText="These angles don't form a triangle";
    }

    
}
form.addEventListener("submit",(e)=>checkAngleSum(e));

function reset(){
    outputDiv.style.display='none';
    outputMsg.innerText='';
    angle1.value='';
    angle2.value='';
    angle3.value='';
}
resetBtn.addEventListener('click',reset)