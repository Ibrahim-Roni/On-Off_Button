const checkbox = document.getElementById("btn");
checkbox.addEventListener("change", () => {
    console.log("Toggle state:", checkbox.checked ? "ON" : "OFF");
});
