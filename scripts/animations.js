const main = document.querySelector('main')

    

gsap.fromTo(main.children,{y: '+=130',opacity:0},{y:0, opacity:1,duration:1.2, stagger:0.4, scrollTrigger:{
    trigger: main,
    start:'top 82%'
} });


