var pos=1;
var right=true;
var initpos=0;
var duck,scr,liv;
var t;
var v=window.innerHeight,h=window.innerWidth;
var lives=3,score=0;
function takeoff()
{
 duck=document.getElementById("duck");
 scr=document.getElementById("score");
 liv=document.getElementById("lives");
 scr.innerHTML=score;
 liv.innerHTML=lives;
 if(!right)
 {
  duck.style.left=initpos+"px";
 }
 else
 {
  duck.style.left=h*0.5+initpos-70+"px";
 }
 pos=1;
 duck.style.bottom=0+"px";
 t=setInterval(fly,Math.floor(Math.random()*10)+10);
}
function fly()
{
 pos=pos+(score+1)/10;
 if(!right)
 {
  duck.style.left=initpos+pos+"px";
 }
 else
 {
  duck.style.left=h*0.5+initpos-70-pos+"px";
 }
 duck.style.bottom=3*pos+"px";
 if((pos>v)||((!right)&&(initpos+pos+60>=h))||((right)&&(h*0.5+initpos-70-pos)<=0))
 {
  loselife();
 }
    }
function shoot()
{
 navigator.vibrate(100);
 score++;
 clearInterval(t);
 right=!right;
 if(right)
 {
  duck.style.transform="scaleX(1)";
 }
 else
 {
  duck.style.transform="scaleX(-1)";
 }
 initpos=Math.floor(Math.random()*h*0.5);
 takeoff();
}
function loselife()
{
 lives=lives-1;
 if(lives<=0)
 {
  alert("GAME OVER!\nYour final score = "+score+"\nPress Ok to Restart");
  lives=4;
  score=0;
  right=true;
 }
 else
 {
  score--;
  shoot();
 }
}