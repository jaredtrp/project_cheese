document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.querySelector('.beer-button');
    const randomBeer = document.querySelector('.random-beer');
    const descriptionDisplay = document.querySelector('.description');

    function getData(e) {
        e.preventDefault()

        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                const name = data[0].name
                const description = data[0].description
                const {volume} = data[0]
                const volumeValue = volume.value
                const volumeUnit = volume.unit

                randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit;
                descriptionDisplay.innerHTML = description;
            })
    }

    startBtn.addEventListener('click', getData);

    
})

var container = $("#container");

var getBeer = function(beer) {

    // format the OpenWeather API url
    var apiURL = "https://api.punkapi.com/v2/";

    // make a request to the URL
    fetch(apiURL)
        .then(function(response) {
            // request was successful
            if (response.ok) {
                response.json().then(function(data) {
                    // console log to test
                    console.log(data);
                    
                })
            }
        })
}

const cheeses = [
    {
        name: "Havarti",
        img: "<img src=./assets/images/Havarti-hero_grande.jpg>",
        smell: "Foot, Fart, Dead Animal",
        type: "Semi-soft", 
        taste: "Butter, Magic, Unicorn Milk",
        origin: "Denmark" 
    },
    {
        name: "Cheddar",
        img: "src=./assets/images/Havarti-hero_grande.jpg",
        smell: "Foot, Fart, Dead Animal",
        type: "Semi-soft", 
        taste: "Butter, Magic, Unicorn Milk",
        origin: "Denmark"
    },
    {
        name: "Goat",
        img: "<img src=./assets/images/Havarti-hero_grande.jpg>",
        smell: "Foot, Fart, Dead Animal",
        type: "Semi-soft", 
        taste: "Butter, Magic, Unicorn Milk",
        origin: "Denmark"
    }
];


//print the cards of cheese on the page at open
var printCheeseCards = function() {
    for(var i = 0; i < cheeses.length; i++) {
        console.log("card# " + cheeses[i]);
        var taskdiv = $("<div>")
            .attr('id', "taskdiv-" + i)
            .addClass("taskdiv");

        var image = $('<img />', {
            id: "image-" + i, 
            class: "card-image",
            src: href="https://images.punkapi.com/v2/keg.png"
            
        })         

        var cheeseName = $("<h2>")
            .addClass("cheese-name")
            .text(cheeses[i].name);
        
        var cutBtn = $("<button/>")
            .addClass("cutBtn")
            .text('CUT IT')
            .click(function () {
                console.log("hello")
                cheeseCard($(this).parent())
            });
            

        
        container.append(taskdiv);
        taskdiv.append(image);
        taskdiv.append(cheeseName);
        taskdiv.append(cutBtn);
    };      
            
};

// print large cards on btn click
var cheeseCard = function(event) {
    console.log(event);
    var taskdivBig = $('<div>')
        .addClass("taskdivBig")
        container.prepend(taskdivBig);

        var imageBig = $('<img />', {
            id: "imageBig", 
            class: "card-imageBig",
            src: href="https://images.punkapi.com/v2/keg.png"
            
        })   
        
        var wineMeBtn = $("<button/>")
            .addClass("wineBtn")
            .text('WINE ME, BBY!')
            .click(function () {
                console.log("wine is fine")
            })

        var detailsSection = $("<section>")
            .addClass("detailsSection")

        var beerName = $("<h2>")
            .addClass("beerName")
            .text("Deschute's Porter")
        
        var originText = $("<p>")
            .addClass("originText")
            .text("Origin: " + "Denmark")

        var noseText = $("<p>")
            .addClass("noseText")
            .text("Nose: " + "Foot, Fart, Dead Animal")

        var tasteText = $("<p>")
            .addClass("tasteText")
            .text("Taste: " + "Butter, Magic, Unicorn Milk")

        var grateItBtn = $("<button/>")
            .addClass("grateBtn")
            .text("GRATE IT")
            .click(function() {
                container.append(taskdivBig);
            })

        taskdivBig.append(imageBig, wineMeBtn, detailsSection, beerName, originText, noseText, tasteText, grateItBtn);
};

// $('<button/>')
//     .text('Test')
//     .click(function () { alert('hi'); });

// or

// $('<button>Test</button>').click(function () { alert('hi'); });





// var createTask = function(taskText, taskDate, taskList) {
//     create elements that make up a task item
//     var taskLi = $("<li>").addClass("list-group-item");
//     var taskSpan = $("<span>")
//       .addClass("badge badge-primary badge-pill")
//       .text(taskDate);
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(taskText);
  
//     append span and p element to parent li
//     taskLi.append(taskSpan, taskP);
  
//     check due date
//     auditTask(taskLi);
  
//     append to ul list on the page
//     $("#list-" + taskList).append(taskLi);
//   };


// call the printcheesecards function
printCheeseCards();