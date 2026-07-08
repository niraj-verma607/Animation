gsap.to("#page2 h1", {
    transform: "translateX(-125%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        marker: true,
        start: "top 0",
        end : "top -100%",
        scrub: 4,
        pin : true,
    }
})