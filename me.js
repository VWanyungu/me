let work = document.getElementById("workButton")
let projects = document.getElementById("projectsButton")
// let articles = document.getElementById("articlesButton")
let contact = document.getElementById("contactButton")

let workDiv = document.getElementById("work")
let projectsDiv = document.getElementById("projects")
// let articlesDiv = document.getElementById("articles")
let contactDiv = document.getElementById("contact")

workDiv.style.display = "block"
projectsDiv.style.display = "none"
// articlesDiv.style.display = "none"
contactDiv.style.display = "none"

work.addEventListener("click", function(){
    workDiv.style.display = "block"
    projectsDiv.style.display = "none"
    // articlesDiv.style.display = "none"
    contactDiv.style.display = "none"
})
projects.addEventListener("click", function(){
    workDiv.style.display = "none"
    projectsDiv.style.display = "block"
    // articlesDiv.style.display = "none"
    contactDiv.style.display = "none"
})
// articles.addEventListener("click", function(){
//     workDiv.style.display = "none"
//     projectsDiv.style.display = "none"
//     articlesDiv.style.display = "block"
//     contactDiv.style.display = "none"
// })
contact.addEventListener("click", function(){
    workDiv.style.display = "none"
    projectsDiv.style.display = "none"
    // articlesDiv.style.display = "none"
    contactDiv.style.display = "block"
})


