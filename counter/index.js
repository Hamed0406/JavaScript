

//varible counter
let connt=0

let countEl=document.getElementById("count-el")
console.log(connt)
console.log(countEl)
let messageEl=document.getElementById("message-save")
let pervoiusEntry=document.getElementById("pervious-entery")
let countTotal=0


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
    printEntry()
    countTotal+=connt
     messageEl.innerText="People had been enterd "+countTotal
     connt=0
     countEl.textContent=0
    console.log(messageEl)
}

function printEntry()
{
    let counterStr = connt + " - "
    pervoiusEntry.textContent+=counterStr
}