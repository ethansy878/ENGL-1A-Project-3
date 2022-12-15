// JavaScript for whole website (all html pages)

// Function: runs when page is loaded, sets up click control
function initializeItems() {
    window.addEventListener('DOMContentLoaded', (event) => {
        // Get HTMLCollection of nar and res divs in page
        const elementsCollection = document.getElementsByClassName("item");
        
        // Convert to static array (live-ness of HTMLColl. is bad for this)
        const elements = Array.prototype.slice.call(elementsCollection);

        revealItem(0, elements);

        // Set up mouse over events, different for nar and res divs
        elements.forEach((elem) => {
            if (!elem.classList.contains("res")){
                // For nar, add listener to all divs 
                elem.addEventListener('click', (event) => {
                    // Guard against bad clicks
                    if (!elem.classList.contains("focus")){
                        return;
                    }

                    let thisItem = elements.indexOf(elem);
                    // the targetItem is thisItem + 1
                    console.log("hovered over " + elem.classList);
                    revealItem(thisItem + 1, elements);
                })
            }
            else if (elem.classList.contains("res")){
                // For res buttons, start with HTMLColl of responses
                const buttonsCollection = elem.getElementsByClassName("res-but");

                // Convert to static array
                const buttons = Array.prototype.slice.call(buttonsCollection);

                console.log(buttons);

                // Making sure to apply event to all buttons
                buttons.forEach((elemm) => {
                    // Add listeners
                    elemm.addEventListener('click', (event) => {
                        // Guard against bad clicks
                        if (!elem.classList.contains("focus")){
                            return;
                        }

                        let thisItem = elements.indexOf(elem);
                        // the targetItem is thisItem + 1
                        console.log("clicked on a button in " + elem.classList);
                        revealItem(thisItem + 1, elements);
                    });
                });
            }
        })
    });
}

// Helper variable for next function
let endPage = false;

// Function: reveals the current item and increments item index
function revealItem(i, elements){
    // Guard against endless end of page attempts
    if (endPage){
        return;
    }

    // Do the reveal by removing the "hiding" class
    try {
        elements[i].classList.toggle("item", false);
        elements[i].classList.toggle("focus", true);
        if (!i == 0){
            elements[i-1].classList.toggle("focus", false);
        }
        console.log("revealing " + elements[i].classList);
    } catch (error) {
        //alert("End of page");
        // NOTE: I decided to get rid of the alert after
        // testing how the site runs.

        // Remove focus from last text box here
        elements[i-1].classList.toggle("focus", false);

        // Print to console and activate start-of-function guard
        console.log("end of page, stopping reveal functions");
        endPage = true;
    }
}

// Function: write into narration box based on what user clicks in response box
function responseWrite(txtID, type) {
    element = document.getElementById(txtID);
    element.innerHTML = element.getAttribute('data-' + type);
}

// Function: write dialogue into res box and delete buttons
function fillRes(button){
    const parent = button.parentElement;
    const chosenText = button.innerText;

    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    parent.innerText = chosenText;

}

// Function: to switch themes by editing body element
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
        default:
            body.classList.add("df-theme");
    }
}

// Function: get theme
function themeGet(){
    return document.body.className;
}

// Function: read theme from url param
function themeParse(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    return urlParams.get('theme');
}

// Function: set the ad in instagram #2 page
function advertisement(type){
    let ad = document.getElementById("ad")
    switch (type) {
        case 'A':
            ad.src = "./images/pizza-hut-ad.png";
            break;
        case 'B':
            ad.src = "./images/iphone-ad.png";
            break;
        case 'C':
            ad.src = "./images/workout-ad.png";
            break;
  }
}

// Function: set the quote in instagram #2 page
function quote(type){
    let ad = document.getElementById("quote")
    switch (type) {
        case 'A':
            ad.src = "./images/timmy-quote.png";
            break;
        case 'B':
            ad.src = "./images/parent-quote.png";
            break;
        case 'C':
            ad.src = "./images/pol-quote.png";
            break;
  }
}

// audio file for discord #2 page
let audio = new Audio('./audios/ping.mp3');

// Function: play the discord audio
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

// Function: evaluate the responses on discord #2 page
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