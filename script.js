var navEle = document.createElement("nav");

var contentEle = document.createElement("div");

var titleEle = document.createElement("h1");

var nameEle = document.createElement("h3");

var counterEle = document.createElement("div");

var counterbutton = document.createElement("button");

navEle.classList.add("nav");

var counter = 0;

counterbutton.innerHTML = "Increase Counter";
counterEle.innerHTML = "Counter: " + counter;

counterbutton.addEventListener("click", function () {
  counter = counter + 1;
  counterEle.innerHTML = "Counter: " + counter;
});

contentEle.appendChild(titleEle);
contentEle.appendChild(nameEle);
contentEle.appendChild(counterbutton);
contentEle.appendChild(counterEle);
document.body.appendChild(navEle);
document.body.appendChild(contentEle);




function app (){
  var pages = ["Home", "About", "Interact"];
  nav(pages);
  renderPage("Home");
}

function nav(pages) {
  for (var i = 0; i < pages.length; i++) {
    const pageButton = document.createElement("button");
    const navTitle = pages[i];
    pageButton.innerHTML = navTitle;
    pageButton.addEventListener("click", function () {
      renderPage(navTitle);
    });
    navEle.appendChild(pageButton);
  }
}

function renderPage(page) {
  if (page == "Home") {
    home();
  } else if (page == "About") {
    about();
  } else if (page == "Interact") {
    interact();
  }
}

function home() {
  titleEle.innerHTML = "Home";
  nameEle.innerHTML = "";
  counterEle.innerHTML = "";
  counterbutton.style.visibility = "hidden";
}

function about() {
  titleEle.innerHTML = "About";
  nameEle.innerHTML = "Jayden Manning";
  counterEle.innerHTML = "";
  counterbutton.style.visibility = "hidden";
}

function interact() {
  titleEle.innerHTML = "";
  nameEle.innerHTML = "";
  counterbutton.style.visibility = "visible";
  counterEle.innerHTML = "Counter: " + counter;
}

app();