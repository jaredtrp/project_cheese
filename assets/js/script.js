var beerses = [];
var container = $("#beer-card");
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

    const BeerBtn = document.querySelector('#beer-btn-container');

    /* check to see the temperature and if the temp is above 65 degrees return a random
    beer of 7.5% abv or greater otherwise return a random beer of 7.4% abv or lower */
    if (tempVal >= 65) {
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
    BeerBtn.addEventListener('click', getData);
    
})

var container = $("#beer-card");

const beerses = [];


//print the cards of beer on the page at open
var printBeerCards = function(name, tagline, description, volume, volumeValue, volumeUnit, abvValue) {
        
    // var image = $('<img />', {
    //     id: "image-", 
    //     class: "card-image",
    //     src: href="https://images.punkapi.com/v2/keg.png"
    // }) 

    var taskdiv = $("<div>")
        .saveBtn
    // var taskdiv = $("<div>")
    //     .attr('id', "taskdiv-")
    //     .addClass("taskdiv row");

    var beerName = $("<h3>")
        .addClass("cheese-name columns")
        .text(name);

    var beerTagline = $("<h4>")
        .addClass("beer-tagline columns")
        .text(tagline)
        
    var ABVPrint = $("<h4>")
        .addClass("ABV-Value columns")
        .text(abvValue)

    var beerInfo = $("<p>")
        .addClass("beer-info columns")
        .text(description)

    var beerVol = $("<p>")
        .addClass("beer-vol")
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
