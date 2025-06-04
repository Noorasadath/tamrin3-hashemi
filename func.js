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
      <h3>${title.value}</h3> 
      <div class="card-title">
            <h5 class="date">12th Jan</h5>
            <span>.</span>
            <h5 class="assign-to">Assigned to Taha</h5>
      </div>
      <h6 class="card-Des">${description.value}</h6>

      ` 
     document.getElementById("todo").appendChild(card)
     title.value = ""
     description.value = ""

}

btncreate.addEventListener("click",create)
btnclear.addEventListener("click", clear)

