var form=document.querySelector("#main-form");
var base=document.querySelector("#base");
var height=document.querySelector("#height");
var outputDiv=document.querySelector(".main-message");
var outputMsg=document.querySelector("#output-short");
var resetBtn=document.querySelector("#btn-reset");

function calculateHypotenuse(base,height){
    var sum=Math.pow(base,2)+Math.pow(height,2);
    var hypotenuse=Math.pow(sum,0.5);
    hypotenuse=hypotenuse.toFixed(2);
    return hypotenuse;
}

function hypotenuseHandler(event){
    event.preventDefault()
    var b=Number(base.value);
    var h=Number(height.value);
    var hypotenuse=calculateHypotenuse(b,h);

    outputDiv.style.display='block';
    outputMsg.innerText=`The hypotenuse of a triangle which has a base of ${b} units and a height of ${h} units is ${hypotenuse} units.`
}
function reset(){
    outputDiv.style.display='none';
    outputMsg.innerText='';
    base.value='';
    height.value='';
    
}
form.addEventListener("submit",(e)=>hypotenuseHandler(e))
resetBtn.addEventListener('click',reset)