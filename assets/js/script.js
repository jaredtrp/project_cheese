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
                const tagline = data[0].tagline
                const description = data[0].description
                const {volume} = data[0]
                const volumeValue = volume.value
                const volumeUnit = volume.unit

                // randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit;
                // descriptionDisplay.innerHTML = description;

                printBeerCards(name, tagline, description, volume, volumeValue, volumeUnit);
            })
    }

    startBtn.addEventListener('click', getData);

    
})

var container = $("#beer-card");

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

const beerses = [
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
            .addClass("cheese-name transparent columns")
            .text(name);

        var beerTagline = $("<h3>")
            .addClass("beer-tagline transparent columns")
            .text(tagline)

        var beerInfo = $("<p>")
            .addClass("beer-info transparent columns")
            .text(description)

        var beerVol = $("<p>")
            .addClass("beer-vol transparent")
            .text(volumeValue + volumeUnit)
        
        var cutBtn = $("<button/>")
            .addClass("button cutBtn")
            .text('CUT IT')
            .click(function () {
                console.log("hello")
                beerCard($(this).parent())
            });
            

        holdMyBeer();
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

var holdMyBeer = function () {
    localStorage.setItem('search-bar', JSON.stringify(beerses));
};

var fillMyBeer = function () {
    var savedBeer = localStorage.getItem('search-bar');

        if(!savedBeer) {
            return false;
        }

        savedBeer = JSON.parse(savedBeer);


        for (var i = 0; i < savedBeer.length; i++) {
            beerses[i] = (savedBeer[i]);
        }

        for (var i = 0; i < savedBeer.length; i++) {
            beerHistoryBtns = $('<button></button>')
                .text(savedBeer[i])
                .attr('id', 'beerHistoryBtn' + i)
                .addClass('button');
                taskdiv.append(beerHistoryBtns);
        }



}

fillMyBeer();

// call the printcheesecards function
// printBeerCards();


// var saveHistory = function () {
//     localStorage.setItem("city-history", JSON.stringify(cityHistoryBtnsArr));
//   }
  
//   var loadHistory = function () {
//     var savedHistory = localStorage.getItem("city-history");
  
//     if(!savedHistory) {
//       return false;
//     }
  
//     console.log("Found Saved History!");
  
//     savedHistory = JSON.parse(savedHistory);
  
//     for(var i = 0; i < savedHistory.length; i++) {
//       cityHistoryBtnsArr[i] = (savedHistory[i]);
//     }
  
//     for (var i = 0; i < cityHistoryBtnsArr.length; i++) {
//       var cityHistoryBtns = $('<button></button>')
//         .text(cityHistoryBtnsArr[i])
//         .attr("id", 'city-history-btn' + i)
//         .addClass("city-history-btns btn btn-secondary col-9 p-2") 
//         cityHistory.append(cityHistoryBtns);
//     }
//   }
  
//   $("#search-btn").on("click", function() {
//     $(".card-container").remove();
//     getLocation(cityInput);
//   });
  
//   $("#city-history").on("click", function(event) {
//     $(".city-history-btns").remove();
//     var value = event.target.innerText.trim();
//     $('.search-bar').val(value);
//     var containerChildren = forecastCardsSection.children();
//     containerChildren.remove();
//     getLocation(cityInput);
//   });
  
//   $("#clear-btn").click(function() {
//     cityHistoryBtnsArr = [];
//     saveHistory();
//     populateCityHistory();
//   });
    
  
//   loadHistory();