/*const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
*/

function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

let cursor = document.querySelector(".cursor")
let main = document.querySelector(".main")
main.addEventListener("mousemove",function(dets){
    //console.log("i'm moving")
    //console.log(dets.x)
    // the styling of the mouse will follow mouse movement on the x and y axis
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        //markers:true,
        start:"top 30%",
        end:"top 0",
        scrub:3
    }
})

//scroll direction 
tl.to(".page1 h1", {
    x:-100,
}, "anim")

tl.to(".page1 h2", {
    x:100
},"anim")

// On scroll increase the width of the video from 60% (CSS) to 90%
tl.to(".page1 video",{
    width:"90%"
},"anim")

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        //markers:true,
        start:"top -90%",
        end:"top -100%",
        scrub:3
    }
})
// Change the background color on scroll 
tl2.to(".main",{
    backgroundColor:"#fff",
},"anim")

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
       // markers:true,
        start:"top -290%",
        end:"top -300%",
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})
/*
let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top -400%",
        end:"top -420%",
        scrub:3
    }
})
tl4.to(".main",{
    backgroundColor:"#A7C7E7",
},"anim")
*/

//JS to deal with page 4 animations 
function part4(){
    let parentEl = document.querySelector(".bg")
    let childEl = document.querySelectorAll(".first-container .first")

    childEl.forEach((item) => {
    item.addEventListener("mouseenter", ()=>{
        let ids = item.getAttribute("data-id");
        let bgEl=document.querySelector(`.id-${ids}`)
        console.log(bgEl)

        parentEl.querySelectorAll('video').forEach((video) => {
           video.style.display = 'none'
        })

        bgEl.style.display = "block"

        gsap.to(cursor, {
            height:"50px",
            width:"50px",
            duration: 0.1,
            margin: "20px",
        })
    } )

    item.addEventListener("mouseleave", ()=>{
        let ids = item.getAttribute("data-id");
        let bgEl=document.querySelector(`.id-${ids}`)
        console.log(bgEl)

        parentEl.querySelectorAll('video').forEach((video) => {
           video.style.display = 'none'
        })

        bgEl.style.display = "none"

        gsap.to(cursor, {
            height:"15px",
            width:"15px",
            duration: 0.1,
        })
    } )
})

}
part4()