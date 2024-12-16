const display = document.getElementById("display");
const keys = document.getElementById("keys");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

keys.addEventListener("click", (event) => {
    const { value } = event.target.dataset;
    if (!value) return;
    display.value += value;
});

clearButton.addEventListener("click", () => {
    display.value = "";
});

equalsButton.addEventListener("click", () => {
    try {
        const result = eval(display.value);
        display.value = formatNumber(result);
    } catch(error) {
        display.value = "Error";
    }
});

function formatNumber(number) {
    if(isNaN(number)) return "Error";
    return number.toLocaleString("en-US");
}