var form=document.querySelector(".main-body");
var submitBtn=document.querySelector("#btn-submit");
var score=0;
var correctAnswers=["0","Right Angled","8","180°","Equilateral","31°","Right","Isosceles"]
var outputDiv=document.querySelector(".main-message")
var outputMsg=document.querySelector("#output-short");
var quesContainer=document.querySelectorAll(".question-details")


function checkAllQuestionsAttempted(attempted_values){
    var index=0;
    for(var value of attempted_values){
        index+=1;
    }
    if(index===correctAnswers.length){
        return true
    }else{
        outputDiv.style.display="block";
        outputMsg.innerText="Please answer all the questions."
    }
}
function submitHandler(e){
    e.preventDefault();
    score=0
    var index=0;
    var formResults=new FormData(form);
    if(checkAllQuestionsAttempted(formResults.values())){
        for (let value of formResults.values()){
            if(value===correctAnswers[index]){
                score+=1;
                quesContainer[index].style.background='#90EE90';
            }else{
                quesContainer[index].style.background='#F08080'
            }
            index+=1
        }
        outputDiv.style.display="block";
        outputMsg.innerText="Your score : "+score;
    }
}
form.addEventListener("submit",(e)=>submitHandler(e))
form.addEventListener("click",function reattempt(){
    for(var q of quesContainer){
        q.style.background='#0A1931'
    }
    outputDiv.style.display='none'
    outputMsg.innerText='';
})