let count = 0;

document.getElementById("clickMe").addEventListener("click", function btnClick() {
    console.log("Button clicked", ++ count);
});