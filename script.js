var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end: "70% 60%",
    scrub:true,
   
}})

tl.to("#fanta",{
    top:"120%",
    left:"6%"
},'orange')
tl.to("#orange-cut",{
  top:"160%",
  left:"23%"
},'orange')

tl.to("#orange",{
    width:"20%",
    top:"164%",
    right:"10%"
  },'orange')

  tl.to("#leaf",{
    
    top:"104.5%",
   left:"82%",
   rotate:"120deg"
  },'orange') 

  tl.to("#leaf2",{
    
    top:"110%",
   left:"3%"
  },'orange') 

  var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end: "20% 60%",
    scrub:true,
   

}})

 tl2.from(".lemon1",{
    rotate: "-90deg",
    left:"-90%",
    top:"110%"

 },'ca')

 tl2.from("#cocacola",{
    rotate: "-90deg",
    
    top:"110%"

 },'ca')

 tl2.from(".lemon2",{
    rotate:"90deg",
    left:"90%",
    top:"110%"

},'ca')

  tl2.from("#pepsi",{
    rotate:"90deg",
    left:"90%",
    top:"110%"

  },'ca')
  tl2.to("#fanta",{
    width:"28%",
    left:"35%",
    top:"210%"

  },'ca')


 tl2.to("#orange-cut",{
   
    left:"41.5%",
    top:"205%"

},'ca')

  


 




