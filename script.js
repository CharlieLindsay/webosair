function updateTime() {
    const currentTime = new Date().toLocaleString();
    document.querySelector("#timeElement").innerHTML = currentTime;
}
setInterval(updateTime, 1000);

var biggestIndex = 1;
var welcomeScreen = document.querySelector("#welcome")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")
var aboutMeScreen = document.querySelector("#aboutme");
var aboutMeScreenClose = document.querySelector("#aboutmeclose");
var photosScreen = document.querySelector("#photos");
var photosScreenClose = document.querySelector("#photosclose");
var notes = document.querySelector("#notes");
var notesClose = document.querySelector("#notesclose");
var aboutMeScreenOpen = document.querySelector("#aboutMeScreenOpen");
var photosScreenOpen = document.querySelector("#photosScreenOpen");
var notesOpen = document.querySelector("#notesOpen");
var topBar = document.querySelector("#top");

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

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

window.onload = function() {
    dragElement(document.getElementById("welcome"));
    dragElement(document.getElementById("aboutme"));
    dragElement(document.getElementById("photos"));
    dragElement(document.getElementById("notes"));
};

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () => handleWindowTap(element));
}

addWindowTapHandling(welcomeScreen);
addWindowTapHandling(aboutMeScreen);
addWindowTapHandling(photosScreen);
addWindowTapHandling(notes);

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

notesClose.addEventListener("click", function() {
    closeWindow(notes);
});

notesOpen.addEventListener("click", function() {
  openWindow(notes);
});

document.getElementById("notepad").value =
    localStorage.getItem("notepad_text") || "";

document.getElementById("notepad").addEventListener("input", function () {
    localStorage.setItem("notepad_text", this.value);
});