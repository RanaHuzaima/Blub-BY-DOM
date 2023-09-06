// 4 Pillars of DOM

// 1. Seclection of an Element ✅
// 2. Changing HTML ✅
// 3. Changing CSS ✅
// 4. Event Listener ✅


// var a = document.querySelector("h1")
// // console.log(a)

// a.innerHTML = "RANA HUZAIMA";
// a.style.color = "Green"
// a.style.backgroundColor = "#0005"
// a.style.fontFamily = "monospace"

// a.addEventListener("click",function () {
//     a.innerHTML = "RANA IMTIAZ"
//     a.style.color = "Yellow"
// })


var blub = document.getElementById("blub")
var on = document.querySelector(".ON")
var off = document.querySelector(".OFF")
on.addEventListener("click",function(){
    blub.style.backgroundColor = "Yellow"
    blub.style.border = "Yellow"
    blub.style.boxShadow = "0px 0px 5px 5px black"
})

off.addEventListener("click",function(){
    blub.style.backgroundColor = "white"
    blub.style.border = "1px solid black"
    blub.style.boxShadow = "0px 0px 5px 5px white"
})

