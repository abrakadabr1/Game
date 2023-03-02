let leftButton = document.querySelector("#left");
let rightButton = document.querySelector("#right");
let leftDoor = document.querySelector("#door-left");
let rightDoor = document.querySelector("#door-right");
let message = document.querySelector("#message");
let body = document.querySelector("body");




leftButton.onclick = function(){
    rightDoor.src = "https://i.pinimg.com/originals/82/c2/0b/82c20b8eacfe5d06faacd1da2b21a678.png";
	leftDoor.src = "https://www.pinpng.com/pngs/m/111-1116128_door-png-transparent-png.png";
    message.innerHTML = "You alive";
    rightDoor.src = "https://icon2.cleanpng.com/20171220/riq/open-door-png-5a3a4f7370c783.071264731513770867462.jpg";
};

rightButton.onclick = function(){
    leftDoor.src = "https://i.pinimg.com/originals/82/c2/0b/82c20b8eacfe5d06faacd1da2b21a678.png";
	rightDoor.src = "https://www.pinpng.com/pngs/m/111-1116128_door-png-transparent-png.png";
    message.innerHTML = "You died";
    body.style.background = "red";
};