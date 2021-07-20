

//varible counter
let connt=0

let countEl=document.getElementById("count-el")
console.log(connt)
console.log(countEl)


function incerment()
{

    console.log("Clicked !")
    connt= connt+1
    console.log(connt)
    countEl.innerText=connt
    console.log(countEl)


}

function save()
{
    console.log(connt)
}