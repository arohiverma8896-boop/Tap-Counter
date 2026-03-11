let count = document.getElementById("count");
let button = document.getElementById("btn");
let value = 0;
button.addEventListener("click",function(){
    value = value+1;
    count.innerText = value;
});
    