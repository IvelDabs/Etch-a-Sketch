let heading = document.getElementById("heading");

let headingText = document.createElement("h1");
headingText.classList.add("heading-text");
headingText.textContent = "Etch-a-Sketch";

let paratext = document.createElement("p");
paratext.classList.add("paragraph");
paratext.textContent = "Welcome to this awesome Etch-a-Sketch application, here you will be making your favorite sketches on what seem to be something between a sketchpad and an Etch-A-Sketch";

heading.appendChild(headingText);
heading.appendChild(paratext);

let containerChild2 = document.getElementById("container-child2");

let containerChild1 = document.getElementById("container-child1");

let slider = document.createElement("input");
slider.type = "range";
slider.min = "8";
slider.max = "120";
slider.value = "8";
slider.step = "16";

containerChild1.appendChild(slider);

slider.addEventListener("input", () => {
    let divCount = parseInt(slider.value);
    containerChild2.innerHTML = "";

    containerChild2.style.gridTemplateColumns = ` repeat(${divCount}, 1fr)`;
    containerChild2.style.gridTemplateRows = `repeat(${divCount}, 1fr)`;

    for (i = 0; i < divCount * divCount; i++) {
        let child = document.createElement("div");
        child.classList.add("child-child");

        let color = "";

        child.addEventListener("click", () => {
            color = getRandomColor();
            child.style.backgroundColor = color;
        });

        child.addEventListener("mouseenter", () => {
            color = getRandomColor();
            child.style.backgroundColor = color;
        });

        child.addEventListener("mouseleave", () => {
            child.style.backgroundColor = color;
        });

        containerChild2.appendChild(child);
    }
});

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    // let r = Math.floor(Math.random() * 256);
    // let g = Math.floor(Math.random() * 256);
    // let b = Math.floor(Math.random() * 256);
    // return `rgb(${r}, ${g}, ${b})`;
}
