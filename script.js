const textEl=document.getElementById('text')

const text='Welcome to my first project.';

let speed=300/3;
let charactorId= 1;

writeText();

function writeText(){
    textEl.innerHTML=text.slice(0,charactorId);
    charactorId++;

    if(charactorId>text.length){
        charactorId=1
    }

     setTimeout(writeText, speed)
}