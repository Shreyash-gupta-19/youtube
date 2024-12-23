var btn = document.querySelector("button");
var box = document.querySelector(".box");

var teams = ["./CSK.jpg","./LSG.png","./KKR.jpg","./RR.jpg","./PBKS.jpeg","./RCB.jpg","./GT.jpg","./MI.jpg","./SRH.jpg"];

btn.addEventListener("click", function(){
    var data = Math.floor(Math.random()*teams.length);
    box.style.backgroundImage = `url(${teams[data]})`
});