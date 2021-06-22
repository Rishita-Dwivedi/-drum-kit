// document.querySelectorAll("button")[0].addEventListener("click",function(){
//   alert("hello i got clicked!!!");
// });
// document.querySelectorAll("button")[1].addEventListener("click",function(){
//   alert("hello i got clicked!!!");
// });
// document.querySelectorAll("button")[2].addEventListener("click",function(){
//   alert("hello i got clicked!!!");
// });
// document.querySelectorAll("button")[3].addEventListener("click",function(){
//   alert("hello i got clicked!!!");
// });
// document.querySelectorAll("button")[4].addEventListener("click",function(){
//   alert("hello i got clicked!!!");
// });
// instead of all this we can also write like....................................

// for (var i=0;i<7;i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//    alert("hello i got clicked!!!");
//  });}


// detecting button press..............
var numberofbuttondrums = document.querySelectorAll(".drum").length;
for (var i=0;i<numberofbuttondrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML;
    makesound(buttonInnerHtml)
    buttonAnimation(buttonInnerHtml)

});
}
 // detecting keyborad press...............

document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key){
  switch(key){
    case'w':
    var tom1=new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case'a':
    var tom2=new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case's':
    var tom3=new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case'd':
    var tom4=new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case'j':
    var crash=new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case'k':
    var snare=new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case'l':
    var kick=new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    default:console.log(buttonInnerHtml)


  }

}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
