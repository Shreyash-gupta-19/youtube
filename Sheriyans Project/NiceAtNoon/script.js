gsap.to(".image img", {
    duration: 12,
    repeat: -1,
    rotate: 360,
    ease: "linear"
});
gsap.to(".trnhedright img", {
    duration: 12,
    repeat: -1,
    rotate: 360,
    ease: "linear"
});

var tag = document.querySelector(".tag");
var h4 = document.querySelector(".tag h4");
var i = document.querySelector(".tag i");

tag.addEventListener("mouseenter", function () {
    tag.style.borderRadius = "30px"
    h4.style.textDecoration = "underline";
    tag.style.transition =" all ease 0.5s"
    i.style.scale = "1.2"

    tag.addEventListener("mouseleave", function () {
        tag.style.borderRadius = "10px"
        h4.style.textDecoration = "none"
        i.style.scale = 1
    });
});

gsap.from("#niceimg img",{
    x:1200,
    
    scrollTrigger:{
        trigger:"#niceimg img",
        scroller:"body",
        markers:false,
        start:"top 100%",
        end:"bottom 0",
        scrub:true,
        // scrub:1,
        // pin:true 
    }
})