// function to write into narration box based on what user clicks in response box
function responseWrite(txtID, type) {
  element = document.getElementById(txtID);
  element.innerHTML = element.getAttribute('data-' + type);
}

// function to switch themes by editing body element
function themeSwitch(type) {
    let body = document.body;
    body.className = "";
    switch (type) {
        case 'df-theme':
            body.classList.add("df-theme");
            break;
        case 'ig-theme':
            body.classList.add("ig-theme");
            break;
        case 'dc-theme':
            body.classList.add("dc-theme");
            break;
    }
}

// function to get theme
function themeGet(){
    return document.body.className;
}

// function to read theme from url param
function themeParse(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    return urlParams.get('theme');
}

// function to set the ad in instagram #2 page
function advertisement(type){
    let ad = document.getElementById("ad")
}

// function to set the quote in instagram #2 page
function quote(type){
    let ad = document.getElementById("quote")
    switch (type) {
        case 'A':
            ad.src = "images/timmy-quote.png";
            break;
        case 'B':
            ad.src = "images/parent-quote.png";
            break;
        case 'C':
            ad.src = "images/pol-quote.png";
            break;
  }
}

// audio file for discord #2 page
let audio = new Audio('audios/ping.mp3');

// function that plays the discord audio
function playAudio(type, count){
    if (type == "delay") {
        setTimeout(function(){
            console.log("Playing sound");
            audio.play();
        }, 2000)
    }

    else if (type == "repeat") {
        for (let i = 0; i < count * 3; i++) {
            setTimeout(function(){
                console.log("Playing sound");
                audio.play();
            }, 750 * i)
        }
    }
}

// function that evaluates the responses on discord #2 page
function evalResponses(){
    let box1 = document.getElementById("scenario1");
    let box2 = document.getElementById("scenario2");
    let box3 = document.getElementById("scenario3");

    let boxArray = [box1, box2, box3];
    let count = 1;
    boxArray.forEach(element => {
        if (element.checked == true) {
            count++;
        }
    });

    if (count == 1){
      responseWrite('rspS', 'A');
    }
    else {
      responseWrite('rspS', 'B');
    }


    playAudio("repeat", count);
}

/* IMPORTANT: YOU WILL USE THIS FOR FADE IN SCROLLING
HTML syntax
The syntax is simple. Any attribute on any element whose attribute name starts with data- is a data attribute. Say you have an article and you want to store some extra information that doesn't have any visual representation. Just use data attributes for that:

<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  …
</article>
Copy to Clipboard
JavaScript access
Reading the values of these attributes out in JavaScript is also very simple. You could use getAttribute() with their full HTML name to read them, but the standard defines a simpler way: a DOMStringMap you can read out via a dataset property.

To get a data attribute through the dataset object, get the property by the part of the attribute name after data- (note that dashes are converted to camelCase).

const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
Copy to Clipboard
Each property is a string and can be read and written. In the above case setting article.dataset.columns = 5 would change that attribute to "5".

*/