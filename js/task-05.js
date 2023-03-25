const inputFieldEl = document.querySelector("input#name-input");
const outputFieldEl = document.querySelector("span#name-output")

inputFieldEl.addEventListener("input", (evt) => {
    if(evt.currentTarget.value === "") {
        outputFieldEl.textContent = "Anonymous"
        return;
    }

    outputFieldEl.textContent = evt.currentTarget.value;
})
