let btncreate=document.getElementById("createCard")
let btnclear=document.getElementById("clearAll")
let title=document.getElementById("titleWork")
let description=document.getElementById("descripWork")
let time = new Date()
const monthShort = time.toLocaleString('en-US', { month: 'short' })
let cardCount = 0;






function clear(){
      title.value = ""
      description.value = ""
}


function create(){
    cardCount++;
    let options = document.querySelector("input[name='persons']:checked");
    let card = document.createElement("div")
    card.className = "card-view"
    card.id = "card-" + cardCount;
    card.setAttribute("draggable", "true");

    card.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', card.id);
    });


      card.innerHTML =  `
      <h3>${title.value}</h3> 
      <div class="card-title">
            <h5 class="date">${monthShort} ${time.getDate()}th</h5>
            <span>.</span>
            <h5 class="assign-to">Assigned to ${options.value}</h5>
      </div>
      <h6 class="card-Des">${description.value}</h6>

      `

     document.getElementById("todo").appendChild(card)
     title.value = ""
     description.value = ""

}

btncreate.addEventListener("click",create)
btnclear.addEventListener("click", clear)


let zones = document.querySelectorAll(".todo");

zones.forEach(zone => {
  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    zone.appendChild(draggedElement);
  });
});

