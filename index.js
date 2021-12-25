//BUTTON CLICK EVENT DETECTION
var numberOfBtns = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      drumSound(this.textContent);
      buttonAnimation(this.textContent);
  });
}

// KEYBOARD EVENT DETECTION
document.addEventListener("keydown",function(event){
  drumSound(event.key);
  buttonAnimation(event.key);
  }
);

//EFUNCTION WHICH WILL BE CALLED FOR BOTH EVENTS
function drumSound(text){
  switch (text) { //SWITCH HAS THE SAME LOGIC AS IF we write the condition
    case "w":     // and then in the case we check whether condition holds or not .
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
  }
}

function buttonAnimation(key){
  var clickedDrum = document.querySelector("."+key);
  clickedDrum.classList.add("pressed");
  setTimeout(function (){
    clickedDrum.classList.remove("pressed");
  },100);
}
