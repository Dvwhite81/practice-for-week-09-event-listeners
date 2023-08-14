// Could be cleaned up to remove duplicate declarations

const newAddButton = () => {
    const addButton = document.createElement("button");
    addButton.setAttribute("id", "add-listeners");
    addButton.innerHTML = "Add Listeners";

    const section5 = document.createElement("section");
    section5.setAttribute("id", "section-5");

    section5.append(addButton);
    document.body.append(section5);
}

const newDivHover = () => {
    const hoverDiv = document.createElement("div");
    hoverDiv.setAttribute("id", "hover-div");
    hoverDiv.style.height = "2rem";

    hoverDiv.addEventListener("mouseover", startHover = (event) => {
        hoverDiv.style.background = "cyan";
        hoverDiv.innerText = "Your mouse is touching me";
    });

    hoverDiv.addEventListener("mouseout", endHover = (event) => {
        hoverDiv.style.background = "";
        hoverDiv.innerText = "";
    });

    const section6 = document.createElement("section");
    section6.setAttribute("id", "section-6");

    section6.append(hoverDiv);
    document.body.append(section6);
}

const addBonusElements = () => {
    newAddButton();
    newDivHover();
}

window.addEventListener("DOMContentLoaded", event => {
    addBonusElements();
    alert("DOM has loaded");
    checkRedInput();
    checkAddItem();
    checkColorSelect();
    checkSpace();
    checkRemoveListeners();
    checkAddListeners();
});

const checkRedInput = () => {
    const redInput = document.getElementById("red-input");

    redInput.addEventListener("input", redListen = (event) => {
        if (event.target.value === "red") {
            redInput.style.background = "red";
        } else {
            redInput.style.background = "transparent";
        }
    });
}

const checkAddItem = () => {
    const addItem = document.getElementById("add-item");
    const listAdd = document.getElementById("list-add");
    const uList = document.getElementsByTagName("ul")[0];

    addItem.addEventListener("click", addListen = (event) => {
        const newLi = document.createElement("li");
        newLi.innerText = listAdd.value;
        uList.append(newLi);
    });
}

const checkColorSelect = () => {
    const colorSection = document.getElementById("section-3");
    const colorSelect = document.getElementById("color-select");

    colorSelect.addEventListener("input", colorListen = (event) => {
        const newColor = event.target.value;
        colorSection.style.background = newColor;
    });
}

const checkSpace = () => {
    document.addEventListener("keypress", spacePressed = (event) => {
        if (event.code === "Space") {
            alert("Space bar was pressed");
        }
    });
}

const checkRemoveListeners = () => {
    const redInput = document.getElementById("red-input");
    const addItem = document.getElementById("add-item");
    const colorSelect = document.getElementById("color-select");
    const hoverDiv = document.getElementById("hover-div");
    const removeButton = document.getElementById("remove-listeners");

    removeButton.addEventListener("click", event => {
        redInput.removeEventListener("input", redListen);
        addItem.removeEventListener("click", addListen);
        colorSelect.removeEventListener("input", colorListen);
        hoverDiv.removeEventListener("mouseover", startHover);
        document.removeEventListener("keypress", spacePressed);
    });
}

const checkAddListeners = () => {
    const redInput = document.getElementById("red-input");
    const addItem = document.getElementById("add-item");
    const colorSelect = document.getElementById("color-select");
    const hoverDiv = document.getElementById("hover-div");
    const addButton = document.getElementById("add-listeners");

    addButton.addEventListener("click", event => {
        redInput.addEventListener("input", redListen);
        addItem.addEventListener("click", addListen);
        colorSelect.addEventListener("input", colorListen);
        hoverDiv.addEventListener("mouseover", startHover);
        checkSpace();
    });
}
