var title = document.getElementById("title");
var desc = document.getElementById("desc");
var submit= document.getElementById("submit")
var output = document.getElementById("output")
var storage = JSON.parse(localStorage.getItem("data"))||[];

function bilal(task){
    // var task1=title.value
    // var task2=desc.value
    var notes=document.createElement("div");
    var head=document.createElement("h1");
    var para=document.createElement("p");
    var delBtn=document.createElement("button")

    
    delBtn.innerHTML="Delete"
    head.innerHTML=task.title
    para.innerHTML=task.desc
    notes.append(head,para,delBtn)
    output.append(notes)
    delBtn.addEventListener("click",function(){
        output.removeChild(notes)
        localStorage.removeItem("data")
    })
}
    submit.addEventListener("click",function(){
    var task={
        title:title.value,
        desc:desc.value
    }
    storage.push(task)
    localStorage.setItem("data",JSON.stringify(storage))
    bilal(task)
    title.value=""
    desc.value=""

})
window.addEventListener("load",function(){
    storage.forEach(element => {bilal(element)
        
    });
})
