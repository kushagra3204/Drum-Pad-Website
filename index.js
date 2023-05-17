
//Insert new audio at last position
var audio=[new Audio('sounds/crash.mp3'),new Audio('sounds/kick-bass.mp3'),new Audio('sounds/snare.mp3'),new Audio('sounds/tom-1.mp3'),new Audio('sounds/tom-2.mp3'),new Audio('sounds/tom-3.mp3'),new Audio('sounds/tom-4.mp3')];
const a=document.querySelectorAll(".drum");
for(var i=0;i<a.length;i++)
{
  a[i].addEventListener("click",function(event){
      buttonAnimation(this.innerHTML);
      // alert("Button is clicked
      NodeList.prototype.indexOf = Array.prototype.indexOf;   // for IE11
      var index=a.indexOf(event.target);
      audio[index].play();
      // or
      // makeSound(this.innerHTML);
  });
}
document.addEventListener("keydown",function(event){
  buttonAnimation(event.key);
  switch (event.key) {
    case "w":
      audio[0].play();
      break;
    case "a":
      audio[1].play();
      break;
    case "s":
      audio[2].play();
      break;
    case "d":
      audio[3].play();
      break;
    case "j":
      audio[4].play();
      break;
    case "k":
      audio[5].play();
      break;
    case "l":
      audio[6].play();
      break;
    default:
    console.log("No audio assigned");
  }
  // or
  //makeSound(event.key);
});

function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}

function makeSound(key)
{
  switch (key) {
    case "w":
      var crash=new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kick=new Audio('sounds/kick.mp3');
      kick.play();
      break;
    case "s":
      var snare=new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1=new Audio('sounds/tom1.mp3');
      tom1.play();
      break;
    case "j":
      var tom2=new Audio('sounds/tom2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3=new Audio('sounds/tom3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4=new Audio('sounds/tom4.mp3');
      tom4.play();
      break;
    default:
    console.log("No audio assigned");
    }
}
