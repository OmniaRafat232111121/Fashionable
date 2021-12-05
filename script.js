anime({
    targets:'.overlay div',
    scaleY:0,
    duration:1300,
    delay:anime.stagger(200,{start:1000}),
    easing:'easeOutSine'
})
anime({
    targets:'.content .item',
   opacity:[0,1],
    duration:1500,
    delay:anime.stagger(200),
    easing:'easeOutSine'
})
anime({
    targets:'.overlay',
    scaleX:0,
  delay:3500,
    easing:'easeOutSine'
})


anime({
    targets:'header',
    translateY:[-100,0],
    opacity:[0,1],
    duration:1000,
    delay:300,
    easing:'easeOutSine'
})