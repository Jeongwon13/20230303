const container = document.getElementsByClassName("container")[0];
const area = document.getElementsByClassName("area");
const box = document.getElementsByClassName("box");
const boxColor = document.getElementsByClassName("box-color");

container.style.display = "flex";

for(let item of area) {
    item.style.height = "170px";
    item.style.width = "150px";
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style.flexDirection = "column";
}

for(let item of box) {
    item.style.height = "150px";
    item.style.borderBottom = "1px solid black";
}

for(let item of boxColor) {
    item.style.border = "none";
    item.style.outline = "none";
}

for(let i=0; i<boxColor.length; i++) {
    boxColor[i].addEventListener("change", function() {
        box[i].style.backgroundColor = this.value;
        this.style.color = this.value;
    })
}

document.getElementById("btn1").addEventListener("click", function() {
    const duration = document.getElementById("input1").value;

    for(let item of box) {
        item.style.transitionDuration = duration + "s";
    }

    document.getElementById("print1").innerText = duration;
})

document.getElementById("clearBtn").addEventListener("click", function() {
    for(let item of box) {
        item.style.backgroundColor = "";
    }

    for(let item of boxColor) {
        item.value = "";
    }
})