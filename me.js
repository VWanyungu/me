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

// Media queries
function myFunction(x) {
    if (x.matches) { // If media query matches
        nameDiv.classList.add("flex-column")
        nameDiv.style.marginLeft = ("5px")
        nameDivChildren.forEach(function(child){
            child.classList.add("mt-5")
        })
        nameDivChildren[1].style.backgroundColor = "blue"
        nameDivChildren[1].classList.add("p-4")
        


        document.body.style.backgroundColor = "yellow";
    } else{
        
        document.body.style.backgroundColor = "white"
    }
  }
  
  var x = window.matchMedia("(max-width: 480px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  
