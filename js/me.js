let arrow = document.querySelectorAll(".arrow")
let hoverDiv = document.querySelectorAll(".hover")

let stats = document.querySelectorAll("#nameDiv > :nth-child(2) > div")
let nameDiv = document.getElementById("nameDiv")
let nameDivChildren = document.querySelectorAll("#nameDiv > div")

// Arrow hover
arrow.forEach(function(arrowEl){
    arrowEl.style.transition = "300ms"
})

hoverDiv.forEach(function(hoverEl){
    if(hoverEl == hoverDiv[0]){
        hoverEl.addEventListener("mouseover", function(){
            arrow[0].style.color = "darkcyan"
        })
        hoverEl.addEventListener("mouseout", function(){
            arrow[0].style.color = "black"
        })
    }
    if(hoverEl == hoverDiv[1]){
        hoverEl.addEventListener("mouseover", function(){
            arrow[1].style.color = "darkcyan"
        })
        hoverEl.addEventListener("mouseout", function(){
            arrow[1].style.color = "black"
        })
    }
    if(hoverEl == hoverDiv[2]){
        hoverEl.addEventListener("mouseover", function(){
            arrow[2].style.color = "darkcyan"
        })
        hoverEl.addEventListener("mouseout", function(){
            arrow[2].style.color = "black"
        })
    }
    
})

  
