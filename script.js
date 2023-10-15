const cat = document.getElementById("cat");
const eat = document.getElementById("eat");

document.addEventListener("keydown", function(event){
    jump();
})

function jump() {
    if (cat.classList != "jump"){
        cat.classList.add("jump")
    }
    setTimeout( function() {
        cat.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(function() {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    let eatLeft = parseInt(window.getComputedStyle(eat).getPropertyValue("left"));

    if (eatLeft < 50 && eatLeft > 0 && catTop >= 140){
        alert("GAME OVER !!!")
    }
}, 10)