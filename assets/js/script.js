var beerses = [];
var container = $("#beer-card");

document.addEventListener('DOMContentLoaded', () => {

    const BeerBtn = document.querySelector('#beer-btn-container');

    function getData(e) {
        e.preventDefault()

        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data)
                const name = data[0].name
                const tagline = "Style: " + data[0].tagline
                const description = "Info: " + data[0].description
                const {volume} = data[0]
                const volumeValue = "vol: " + volume.value
                const volumeUnit = " " + volume.unit
                const abvValue = "ABV: " +  data[0].abv;

                // randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit;
                // descriptionDisplay.innerHTML = description;

                printBeerCards(name, tagline, description, volume, volumeValue, volumeUnit, abvValue);
            })
    };

    BeerBtn.addEventListener('click', getData);
})

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
};

//print the cards of beer on the page at open
var printBeerCards = function(name, tagline, description, volume, volumeValue, volumeUnit, abvValue) {
        
    // var image = $('<img />', {
    //     id: "image-", 
    //     class: "card-image",
    //     src: href="https://images.punkapi.com/v2/keg.png"
        
    // }) 

    var taskdiv = $("<div>")
        .attr('id', "taskdiv-")
        .addClass("taskdiv row");

    var beerName = $("<h2>")
        .addClass("cheese-name transparent columns")
        .text(name);

    var beerTagline = $("<h3>")
        .addClass("beer-tagline transparent columns")
        .text(tagline)
        
    var ABVPrint = $("<h3>")
    .addClass("ABV-Value transparent columns")
    .text(abvValue)

    var beerInfo = $("<p>")
        .addClass("beer-info transparent columns")
        .text(description)

    var beerVol = $("<p>")
        .addClass("beer-vol transparent")
        .text(volumeValue + volumeUnit)
    
    var saveBtn = $("<button/>")
        .addClass("button saveBtn")
        .text('SAVE')
        .click(function () {
           holdMyBeer();
        });
        
    container.prepend(taskdiv);
    // taskdiv.append(image);
    taskdiv.append(beerName);
    taskdiv.append(beerTagline);
    taskdiv.append(ABVPrint);
    taskdiv.append(beerInfo);
    taskdiv.append(beerVol);
    taskdiv.append(saveBtn); 
};                  

var holdMyBeer = function () {
    // console.log("saved");
    localStorage.setItem('in-stock', JSON.stringify(beerses));
};

var fillMyBeer = function () {
    var savedBeer = localStorage.getItem('in-stock');

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
                $("#beer-card").prepend(beerHistoryBtns);
        }


}

fillMyBeer();