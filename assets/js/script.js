document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.querySelector('#beer-button-container');
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
                const tagline = "Style: " + data[0].tagline
                const description = "Info: " + data[0].description
                const {volume} = data[0]
                const volumeValue = "vol: " + volume.value
                const volumeUnit = " " + volume.unit

                // randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit;
                // descriptionDisplay.innerHTML = description;

                printBeerCards(name, tagline, description, volume, volumeValue, volumeUnit);
            })
    }

    startBtn.addEventListener('click', getData);

    
})

var container = $("#beer-card-container");

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

// const cheeses = [
//     {
//         name: "Havarti",
//         img: "<img src=./assets/images/Havarti-hero_grande.jpg>",
//         smell: "Foot, Fart, Dead Animal",
//         type: "Semi-soft", 
//         taste: "Butter, Magic, Unicorn Milk",
//         origin: "Denmark" 
//     },
//     {
//         name: "Cheddar",
//         img: "src=./assets/images/Havarti-hero_grande.jpg",
//         smell: "Foot, Fart, Dead Animal",
//         type: "Semi-soft", 
//         taste: "Butter, Magic, Unicorn Milk",
//         origin: "Denmark"
//     },
//     {
//         name: "Goat",
//         img: "<img src=./assets/images/Havarti-hero_grande.jpg>",
//         smell: "Foot, Fart, Dead Animal",
//         type: "Semi-soft", 
//         taste: "Butter, Magic, Unicorn Milk",
//         origin: "Denmark"
//     }
// ];


//print the cards of cheese on the page at open
var printBeerCards = function(name, tagline, description, volume, volumeValue, volumeUnit) {
    
        var taskdiv = $("<div>")
            .attr('id', "taskdiv-")
            .addClass("taskdiv row");

        // var image = $('<img />', {
        //     id: "image-", 
        //     class: "card-image",
        //     src: href="https://images.punkapi.com/v2/keg.png"
            
        // })         

        var beerName = $("<h2>")
            .addClass("cheese-name columns")
            .text(name);

        var beerTagline = $("<h3>")
            .addClass("beer-tagline columns")
            .text(tagline)

        var beerInfo = $("<p>")
            .addClass("beer-info columns")
            .text(description)

        var beerVol = $("<p>")
            .addClass("beer-vol")
            .text(volumeValue + volumeUnit)
        
        var cutBtn = $("<button/>")
            .addClass("cutBtn")
            .text('CUT IT')
            .click(function () {
                console.log("hello")
                beerCard($(this).parent())
            });
            

        
        container.prepend(taskdiv);
        // taskdiv.append(image);
        taskdiv.append(beerName);
        taskdiv.append(beerTagline);
        taskdiv.append(beerInfo);
        taskdiv.append(beerVol);
        taskdiv.append(cutBtn); 
    };      
            

// print large cards on btn click
var beerCard = function(event) {
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



// call the printcheesecards function
// printBeerCards();