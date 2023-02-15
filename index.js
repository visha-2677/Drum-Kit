// Use  Function name(){} mean  name of function can use
// document.querySelector("button").addEventListener("click",clickfun);
// function clickfun(){
//     alert("Click first button");
// }
// But Most of use Anonimuce Function because simple to use direct
// Use Anonimuce Function (){} mean no name of function can use
// document.querySelector("button").addEventListener("click",function (){
//     alert("Click first button");
// })
var numDbtn=document.querySelectorAll(".drum").length;
for(var i=0;i<numDbtn;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        // alert("Click first button");
        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();
        // this.style.color="white";

        var buttoninnerHtml=this.innerHTML;
        makeSound(buttoninnerHtml);
       buttonAnimation(buttoninnerHtml);

    })
}
// pass parameter 'event' is called pressed our key through keybourd
document.addEventListener("keypress",function(event){
    // view pass parameter 'event' is called pressed our key through keybourd
    // How is this work ? in  8_Java Script/Lern_4 
    // console.log(event);
    // use keypress is function of javascript EventListener than call key itme to (.)dot like constructer 
    // How is this work ? in  8_Java Script/Lern_4 
    makeSound(event.key);
    buttonAnimation(event.key);

})
function makeSound(key){
    switch (key) {
        case "w":
            var audio1=new Audio("sounds/tom-1.mp3");
            // use like 8_java Script/Lern_3 in constructer to call item '.' dot oprater to play item of Audio function
            audio1.play();
            break;
        case "a":
            var audio2=new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            var audio3=new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            var audio4=new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            var audio5=new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        case "k":
            var audio6=new Audio("sounds/kick-bass.mp3");
            audio6.play();
            break;
        case "l":
            var audio7=new Audio("sounds/crash.mp3");
            audio7.play();
            break;
    }
}
// add class in button to Animate Durumkit
function buttonAnimation(currentkey){
    // convert key to class string css like .classname Ex=.keyname
    var activeButton=document.querySelector("."+currentkey);
    // add css class in activeButton
    activeButton.classList.add("pressed");

    // Remove class in activeButton some time to delay
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}