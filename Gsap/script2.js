gsap.from(".page1 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})

gsap.from(".page2 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true,
        // scrub:2
        pin:true
    }
})

gsap.from(".page3 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    scrollTrigger:".page3 .box"    /* can also use scrollTrigger like this */
})

gsap.from(".page4 h1",{
    x:600,
    duration:1,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body"
    }
})
gsap.from(".page4 h2",{
    x:-600,
    duration:1,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page4 h2",
        scroller:"body"
    }
})