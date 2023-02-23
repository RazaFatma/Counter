let text = document.getElementById("text");
let count = 0;

function count_increse() {
    count++;
    text.innerHTML = count;
    if(count > 0) {
        text.style.color = "green"
    }
}

function count_reset() {
    count = 0;
    text.innerHTML = count;
    text.style.color = "black"

}
 
function count_decrese() {
    count--;
    text.innerHTML = count;
    if(count < 0) {
        text.style.color = "red"
    }
}