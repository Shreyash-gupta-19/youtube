let tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    duration:1,
    delay:1,
    opacity:0,
    repeat:-1
})

tl.from("h3",{
    y:-30,
    duration:1,
    opacity:0,
    repeat:-1,
    stagger:0.5
})
tl.from("h1",{
    opacity:0,
    scale :0.5,
    duration:1,
    repeat:-1
})