let nClick= -1;
let uPattern=[];
let cPattern=[];
let pColor=["red","blue","yellow", "green"];

let level=0;
let highscore=0;

$('.button').click(function(buttonClicked){
  nClick++;
  let color=buttonClicked.target.id;
  cAnimation('#'+ color);
  audioPlay(color);
  ChAnswer(color);
});

function ChAnswer(color){
  uPattern.push(color);
  if(color == cPattern[nClick]){
    if(uPattern.length == cPattern.length){
      setTimeout(function(){
        uPattern =[];
        nClick = -1;
        nextLevel();
      },1000);
    }
  }else {
    document.getElementById("h2").textContent="Game over!try again!" ;
    document.body.style.background = 'pink';
    uPattern=[];
    cPattern=[];
    level=0;
    nClick= -1;
  }
}

function nextLevel(){
  level++;
  document.getElementById("level").textContent=level ;
  let rand = Math.floor(Math.random() * 4);
  let color = pColor[rand];
  cPattern.push(color);
  audioPlay(color);
  cAnimation('#'+ color);
}

function audioPlay(color){
  let src = 'sounds/'+color+'.mp3';
  let audio= new Audio(src);
  audio.play();
}

function cAnimation(id){
  $(id).fadeOut(100).fadeIn(100);
}

$(document).keydown(function(){
  if(level== 0){
    nextLevel();
  }
});
