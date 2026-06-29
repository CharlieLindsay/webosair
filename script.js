function updateTime() {
    const currentTime = new Date().toLocaleString();
    document.querySelector("#timeElement").innerHTML = currentTime;
}
setInterval(updateTime, 1000);
var welcomeScreen = document.querySelector("#welcome")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")
var aboutMeScreen = document.querySelector("#aboutme");
var aboutMeScreenClose = document.querySelector("#aboutmeclose");
var photosScreen = document.querySelector("#photos");
var photosScreenClose = document.querySelector("#photosclose");

// Make an element draggable
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // If element has a header, drag from header
    const header = document.getElementById(elmnt.id + "header");
    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Activate dragging for your welcome window
window.onload = function() {
    dragElement(document.getElementById("welcome"));
    dragElement(document.getElementById("aboutme"));
    dragElement(document.getElementById("photos"));
};


function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "block"
}

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

aboutMeScreenClose.addEventListener("click", function() {
    closeWindow(aboutMeScreen);
});

aboutMeScreenOpen.addEventListener("click", function() {
  openWindow(aboutMeScreen);
});

photosScreenClose.addEventListener("click", function() {
    closeWindow(photosScreen);
});

photosScreenOpen.addEventListener("click", function() {
  openWindow(photosScreen);
});