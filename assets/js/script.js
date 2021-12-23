const tempVal = [];

let getRequestedWeather = function (){
    // API URL to pull the current weather
    let requestWeather = 'https://api.openweathermap.org/data/2.5/weather?q=Austin,US&units=imperial&appid=73963c93b7e24695087cf9963cd9fc41';
    
    // Function that disects current weather card
    fetch(requestWeather)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        let tempValue = data.main.temp;
        console.log(tempValue);
        tempVal.push(tempValue);
    });
};


// this event listener forces the js within it to wait until all DOM elements are loaded before enabling any functionality
document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.querySelector('#beer-button-container');
    const randomBeer = document.querySelector('.random-beer');
    const descriptionDisplay = document.querySelector('.description');

    /* check to see the temperature and if the temp is above 65 degrees return a random
    beer of 7.5% abv or greater otherwise return a random beer of 7.4% abv or lower */
    if (tempVal >= 65) {
        function getData(e) {
            e.preventDefault()

            fetch('https://api.punkapi.com/v2/beers?abv_lt=7.5&page=' + Math.floor(Math.random()*3+1) + '&per_page=80')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const i = Math.floor(Math.random()*data.length)
                    const name = data[i].name
                    const tagline = data[i].tagline
                    const description = data[i].description
                    const {volume} = data[i]
                    const volumeValue = volume.value
                    const volumeUnit = volume.unit
                    const abv = data[i].abv
                    console.log(data[i])
                })
        }
    } else {
        function getData(e) {
            e.preventDefault()

            fetch('https://api.punkapi.com/v2/beers?abv_gt=7.49&page=' + Math.floor(Math.random()*2+1) + '&per_page=80')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const i = Math.floor(Math.random()*data.length)
                    const name = data[i].name
                    const tagline = data[i].tagline
                    const description = data[i].description
                    const {volume} = data[i]
                    const volumeValue = volume.value
                    const volumeUnit = volume.unit
                    const abv = data[i].abv
                    console.log(data[i])

                    randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit;
                    descriptionDisplay.innerHTML = description;

                    printBeerCards(name, tagline, description, volume, volumeValue, volumeUnit, abv);
                })
            }
    }

    // on click of "random" button, return a beer based on the temp
    startBtn.addEventListener('click', getData);
    
})

var container = $("#beer-card");

const beerses = [];


//print the cards of cheese on the page at open
var printBeerCards = function(name, tagline, description, volume, volumeValue, volumeUnit, abvValue) {
    
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
            .text('SAVE IT')
            .click(function () {
                console.log("hello")
                holdMyBeer();
            });
            

        
        container.prepend(taskdiv);
        // taskdiv.append(image);
        taskdiv.append(beerName);
        taskdiv.append(beerTagline);
        taskdiv.append(ABVPrint);
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
                $(".beer-card-container").prepend(beerHistoryBtns);
        }



}

fillMyBeer();
    
  
//   loadHistory();