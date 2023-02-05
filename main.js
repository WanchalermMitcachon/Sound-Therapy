let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const musicOne=new Audio('music/Bird_singing.mp3')
const playBtnOne=document.getElementById('control-play1')
const pauseBtnOne=document.getElementById('control-pause1')

const musicTwo=new Audio('music/Cricket_chirping.mp3')
const playBtnTwo=document.getElementById('control-play2')
const pauseBtnTwo=document.getElementById('control-pause2')

const musicThree=new Audio('music/Night_wood.mp3')
const playBtnThree=document.getElementById('control-play3')
const pauseBtnThree=document.getElementById('control-pause3')

const musicFour=new Audio('music/Light_rain.mp3')
const playBtnFour=document.getElementById('control-play4')
const pauseBtnFour=document.getElementById('control-pause4')

const musicFive=new Audio('music/Rain_in_the_city.mp3')
const playBtnFive=document.getElementById('control-play5')
const pauseBtnFive=document.getElementById('control-pause5')

const musicSix=new Audio('music/Rain_on_roof.mp3')
const playBtnSix=document.getElementById('control-play6')
const pauseBtnSix=document.getElementById('control-pause6')

const musicSeven=new Audio('music/Thunderstrom.mp3')
const playBtnSeven=document.getElementById('control-play7')
const pauseBtnSeven=document.getElementById('control-pause7')

const musicEight=new Audio('music/Thunder_rain.mp3')
const playBtnEight=document.getElementById('control-play8')
const pauseBtnEight=document.getElementById('control-pause8')

const musicNine=new Audio('music/Scary_thunder.mp3')
const playBtnNine=document.getElementById('control-play9')
const pauseBtnNine=document.getElementById('control-pause9')

const musicTen=new Audio('music/Pink_noise.mp3')
const playBtnTen=document.getElementById('control-play10')
const pauseBtnTen=document.getElementById('control-pause10')

const musicEleven=new Audio('music/Brown_noise.mp3')
const playBtnEleven=document.getElementById('control-play11')
const pauseBtnEleven=document.getElementById('control-pause11')

const musicTwelve=new Audio('music/White_noise.mp3')
const playBtnTwelve=document.getElementById('control-play12')
const pauseBtnTwelve=document.getElementById('control-pause12')

playBtnOne.addEventListener('click', ()=>{
  musicOne.play();
  musicOne.loop=true;
  playBtnOne.querySelector('i.fas').classList.remove('fa-play')
  playBtnOne.querySelector('i.fas').classList.add('fa-pasue')


})
pauseBtnOne.addEventListener('click', ()=>{
  musicOne.pause();
  playBtnOne.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnOne.querySelector('i.fas').classList.add('fa-play')
})

playBtnTwo.addEventListener('click', ()=>{
  musicTwo.play();
  musicTwo.loop=true;
  playBtnTwo.querySelector('i.fas').classList.remove('fa-play')
  playBtnTwo.querySelector('i.fas').classList.add('fa-pasue')

})
pauseBtnTwo.addEventListener('click', ()=>{
  musicTwo.pause();
  playBtnTwo.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnTwo.querySelector('i.fas').classList.add('fa-play')
})


playBtnThree.addEventListener('click', ()=>{
  musicThree.play();
  musicThree.loop=true;
  playBtnThree.querySelector('i.fas').classList.remove('fa-play')
  playBtnThree.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnThree.addEventListener('click', ()=>{
  musicThree.pause();
  playBtnThree.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnThree.querySelector('i.fas').classList.add('fa-play')
})


playBtnFour.addEventListener('click', ()=>{
  musicFour.play();
  musicFour.loop=true;
  playBtnFour.querySelector('i.fas').classList.remove('fa-play')
  playBtnFour.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnFour.addEventListener('click', ()=>{
  musicFour.pause();
  playBtnFour.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnFour.querySelector('i.fas').classList.add('fa-play')
})

playBtnFive.addEventListener('click', ()=>{
  musicFive.play();
  musicFive.loop=true;
  playBtnFive.querySelector('i.fas').classList.remove('fa-play')
  playBtnFive.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnFive.addEventListener('click', ()=>{
  musicFive.pause();
  playBtnFive.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnFive.querySelector('i.fas').classList.add('fa-play')
})

playBtnSix.addEventListener('click', ()=>{
  musicSix.play();
  musicSix.loop=true;
  playBtnSix.querySelector('i.fas').classList.remove('fa-play')
  playBtnSix.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnSix.addEventListener('click', ()=>{
  musicSix.pause();
  playBtnSix.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnSix.querySelector('i.fas').classList.add('fa-play')
})

playBtnSeven.addEventListener('click', ()=>{
  musicSeven.play();
  musicSeven.loop=true;
  playBtnSeven.querySelector('i.fas').classList.remove('fa-play')
  playBtnSeven.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnSeven.addEventListener('click', ()=>{
  musicSeven.pause();
  playBtnSeven.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnSeven.querySelector('i.fas').classList.add('fa-play')
})

playBtnEight.addEventListener('click', ()=>{
  musicEight.play();
  musicEight.loop=true;
  playBtnEight.querySelector('i.fas').classList.remove('fa-play')
  playBtnEight.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnEight.addEventListener('click', ()=>{
  musicEight.pause();
  playBtnEight.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnEight.querySelector('i.fas').classList.add('fa-play')
})

playBtnNine.addEventListener('click', ()=>{
  musicNine.play();
  musicNine.loop=true;
  playBtnNine.querySelector('i.fas').classList.remove('fa-play')
  playBtnNine.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnNine.addEventListener('click', ()=>{
  musicNine.pause();
  playBtnNine.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnNine.querySelector('i.fas').classList.add('fa-play')
})

playBtnTen.addEventListener('click', ()=>{
  musicTen.play();
  musicTen.loop=true;
  playBtnTen.querySelector('i.fas').classList.remove('fa-play')
  playBtnTen.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnTen.addEventListener('click', ()=>{
  musicTen.pause();
  playBtnTen.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnTen.querySelector('i.fas').classList.add('fa-play')
})

playBtnEleven.addEventListener('click', ()=>{
  musicEleven.play();
  musicEleven.loop=true;
  playBtnEleven.querySelector('i.fas').classList.remove('fa-play')
  playBtnEleven.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnEleven.addEventListener('click', ()=>{
  musicEleven.pause();
  playBtnEleven.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnEleven.querySelector('i.fas').classList.add('fa-play')
})

playBtnTwelve.addEventListener('click', ()=>{
  musicTwelve.play();
  musicTwelve.loop=true;
  playBtnTwelve.querySelector('i.fas').classList.remove('fa-play')
  playBtnTwelve.querySelector('i.fas').classList.add('fa-pasue')
});
pauseBtnTwelve.addEventListener('click', ()=>{
  musicTwelve.pause();
  playBtnTwelve.querySelector('i.fas').classList.remove('fa-pasue')
  playBtnTwelve.querySelector('i.fas').classList.add('fa-play')
})



