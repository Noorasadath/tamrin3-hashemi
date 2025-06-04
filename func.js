let btncreate=document.getElementById("createCard")
let btnclear=document.getElementById("clearAll")
let title=document.getElementById("titleWork")
let description=document.getElementById("descripWork")


function clear(){
      title.value = ""
      description.value = ""
}


function create(){
   
    let card = document.createElement("div")
    card.className = "card-view"
      card.innerHTML =  `
      <h3>${title}</h3> 
      <h6>${description}</h6>
      ` 
     document.getElementById("todo").appendChild(card)

}

btncreate.addEventListener("click",create)
btnclear.addEventListener("click", clear)

