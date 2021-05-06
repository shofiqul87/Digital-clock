
/*function genarateColor(){
let colorHex=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
let color='#';

 let num1=Math.round(Math.random()*15);
 let num2=colorHex[num1];
 
 color+=num2;
}
document.body.style.backgroundColor=color;
document.getElementById('output').style.color=color;
document.getElementById('output').innerHTML=color;

}
*/
/*
function genarateColor(){
let colorHex=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
let color='#';

for (let i = 0; i <6; i++) {
 let num1=Math.round(Math.random()*15);
 let num2=colorHex[num1];
 
 color+=num2;

}
document.body.style.backgroundColor=color;
document.getElementById('output').style.color=color;
let cn=document.getElementById('output');
cn.innerHTML=color;
color=="#F1C40F"? cn.innerHTML="Sunflower":color;
color=="#E74C3C"? cn.innerHTML="Alizarin":color;
color=="#E67E22"? cn.innerHTML="Carrot":color;
color=="#D35400"? cn.innerHTML="Pampkin":color;
color=="#F39C12"? cn.innerHTML="Orange":color;
color=="#43ed2b"? cn.innerHTML="Green":color;
color=="#F1C40F"? cn.innerHTML="Sunflower":color;
color=="#31bc33"? cn.innerHTML="Green2":color;
color=="#F1C40F"? cn.innerHTML="Sunflower":color;
color=="#F1C40F"? cn.innerHTML="Sunflower":color;
color=="#F1C40F"? cn.innerHTML="Sunflower":color;
}
/*
let red='#234asd';
let blue='#ddd'
function genarateColor2(){
  document.body.style.background=`-webkit-linear-gradient(${red},${blue})`; document.getElementById('output').innerHTML='Gradient';
}
*/

function dgClck(){


let now= new Date();
let hours=now.getHours();
let minutes=now.getMinutes();
let second=now.getSeconds();
let formate='AM';
let c=document.querySelector('.round');
let d=document.querySelector('.round2');
if (hours===0) {
  hours=12;
}
if (hours>12) {
  formate='PM';
  hours=hours-12;
}
if (hours<10) {
  hours='0'+hours;
}
if(minutes<10) {
  minutes='0'+minutes;
}
if (second<10) {
  second='0'+second;
}

let digitalClock=
  `${hours}:${minutes}:${second}`;

 
 

document.getElementById('time').innerHTML=digitalClock;
document.getElementById('am').innerHTML=formate;
c.style.width=(second/60)*100+'%';
d.style.height=(second/60)*100+'%';

 

setInterval(dgClck,1000);
setInterval(dgClck,1000);
}
dgClck();
const dgclck=document.querySelector("#dg");

dgclck.addEventListener('drug',function(event){
  console.log(event);
})