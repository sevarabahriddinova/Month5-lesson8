const $formNav=document.querySelector("#formNav")
const $navInputs=$formNav.querySelector("#hotelList")
const $button=document.querySelector("#button")
const $wrapperList=document.querySelector("#wrapperList")

const $formList=document.querySelector("#formList")
//const $inputs=$formList.querySelector("#listInput")
const $listBtn=document.querySelector("#listBtn")
const $main=document.querySelector("main")
const $footer=document.querySelector("footer")
const $section=document.querySelector("section")
    
const NewNav= (e)=>{
  e.preventDefault();
 
}
$button.onclick = function () {
  $wrapperList.classList.add("show")
  $main.classList.add("show")
  $footer.classList.add("show2")
  $section.classList.add("show2")

}
$formNav.addEventListener("click",NewNav)

//////////

// function List(names,email,pasword){
//   this.names=names;
//   this.email=email;
//   this.pasword=pasword;
// }

 

// const createNewFormList =(e)=>{
//   e.preventDefault();
  
//   $inputs.forEach(input.value)
//   const list= new List($inputs[0].value,$inputs[1].value,$inputs[2].value)
//   }

//ro`yxat


const $musiciansList=document.querySelector("#musiciansList");
const $inputs = $musiciansList.querySelectorAll(".formInput");
const $wrapper=document.querySelector(".wrapper")

const array=JSON.parse(localStorage.getItem(("list")))|| []
 


function Musicians(name,email,nationality,count,category,description){
    this.name=name
    this.email=email
    this.nationality=nationality
    
    this.count=count
    this.category=category
    this.description=description
    this.time=new Date()      
}

const renderMusicians = (array)=>{
    $wrapper.innerHTML=""
      if(array.length){
        array.forEach((element,index) => {
            $wrapper.innerHTML+=`
            <div clacc="container2">
            <p>${element.name}
            
            </p>
            <p>${element.email}</p>
            <p>${element.nationality}</p>
            <p>${element.count}</p>
             <strong>${element.category}</strong>
            <p style="border-bottom:10px solid gray; margin-bottom:30px">${element.time} </p>
            </div>
                <button data-item-id="${index}" class="delete">Delete</button>
                <button class=" edit">Edit</button>
            </div>
            </div>
            
            `
        });
      }
      
}
renderMusicians(array)

const createNewMusiciansList = (e) =>{
    e.preventDefault()

    let values=Array.from($inputs).map(input=>input.value)

    const musicians = new Musicians(...values)
    array.push(musicians)
    localStorage.setItem("list",JSON.stringify(array))
    console.log(musicians)

    renderMusicians(array)
}

const filtrCategory=(e)=>{
    e.preventDefault()
    let newList=array.filter(data => data.category === $categoryFilter.value)
    console.log(newList)
    renderMusicians(newList)

    if(newList===$anaviy){}

    
} 
const handleItemAction = (e)=>{
  if(e.target.className==="delete"){
   console.log( e.target.getAttribute("data-item-id")) 
  const id =+e.target.getAttribute("data-item-id")
   console.log(array)
   array.splice(id, 1)
  localStorage.setItem("list",JSON.stringify(array))

  renderMusicians(array)
}
}

$wrapper.addEventListener("click",handleItemAction)


$musiciansList.addEventListener("submit",createNewMusiciansList) 

// corusel

const btn__knopka = document.querySelector(".btn__knopka");
const sidebar = document.querySelector(".sidebar");
const listItem = document.querySelectorAll(".list-item");

 

listItem.forEach(item => {
    item.addEventListener("click", () => {
        listItem.forEach(item =>{
            item.style.borderLeft = "3px solid transparent";
            item.style.color = "#ffffffc8"
        })
        item.style.borderLeft = "3px solid #fff";
        item.style.color = "#000"
})
}) 


