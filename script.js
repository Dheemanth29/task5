const works = {
    "task1" : {"title" : "Project 1", "url" : "task1.html"},
    "task2" : {"title" : "Project 2", "url" : "task2.html"},
    "task3" : {"title" : "Project 3", "url" : "task3.html"},
};

function loadNavigation() {
    const navDiv = document.getElementById("nav_div");
    for (let task in works) {
        let button = document.createElement("button");
        button.innerText = works[task].title;
        button.onclick = () => loadContent(works[task].url);
        navDiv.appendChild(button);
    }
}


function loadContent(url) {
    document.getElementById("content_frame").src = url;
}

document.addEventListener("DOMContentLoaded", loadNavigation);