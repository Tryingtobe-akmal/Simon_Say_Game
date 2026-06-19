let gameSeq=[];
let userSeq=[];
let scores=[];

let color=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2 =document.querySelector("h2");
let btn=document.querySelectorAll(".btn");
let body=document.querySelector("body");
let button=document.querySelector(".primary-btn");

button.addEventListener("click",function(){
    if(started==false){
        started=true;
       levelUp();
    }   
});

//btn flash function by game 
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash");
    },200);
}
//btn flash function by user
function userFlash(btn){
    btn.classList.add("flashh");
    setTimeout(function(){
     btn.classList.remove("flashh");
    },200);
}

//level up function 
function levelUp(){
    userSeq=[];//imp
    level++;
    h2.innerText=`Level ${level}`;
    //random btn flash;
        let ranIdx=Math.floor(Math.random()*4);
        let ranColor=color[ranIdx];
        let ranBtn=document.querySelector(`.${ranColor}`);
    gameFlash(ranBtn);

    gameSeq.push(ranColor);
    console.log(gameSeq);
}


//SELECTING ALL BTNS AND ADDING EVENT LISTENER
let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnPress);
}
//btn press function
function btnPress(){
    if(started==false){
        return;
    }
    userFlash(this);  
    btn=this;
    let color=this.getAttribute("id");
    userSeq.push(color);
    // console.log(userSeq);

    checkAns(userSeq.length-1);

}


//maching or checking
function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){ //in game seq t reverse thr order write [gameSeq.length-idx-1]
        if(userSeq.length===gameSeq.length){
           setTimeout(levelUp,1000); 
        }
    }else{
        h2.innerText=`Game over! press any key to start`;
            body.classList.add("body_style");
            setTimeout(function(){
                body.classList.remove("body_style");
            },250);
     
     let score_heading=document.createElement("h3");
     h2.appendChild(score_heading);
     score_heading.innerText=`your score is ${level}`;

     scores.push(level);
     console.log(scores);
    // let winner=Math.max(...scores);
    //  console.log(max_scores);
    let h4=document.createElement("h4");
    score_heading.appendChild(h4);
    h4.innerText=`The highest score till now is ${Math.max(...scores)}`;



     reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}