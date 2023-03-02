document.getElementById("add").addEventListener("click", e => {
    const div = document.createElement("div");
    div.classList.add("row");

    const input = document.createElement("input");
    input.classList.add("in");

    input.setAttribute("type", "number");

    const span = document.createElement("span");
    span.classList.add("remove");
    span.innerHTML = "&times;";

    span.addEventListener("click", e => {
       e.target.parentElement.remove();
    })

    div.append(input, span);
    document.querySelector(".container").append(div);
    input.focus();


});

document.getElementById("calc").addEventListener("click", e => {
    const inputList = document.getElementsByClassName("in");

    let sum = 0;
    for(let input of inputList) { 
        sum += Number(input.value);
    }
    alert("합계:" + sum);
})

