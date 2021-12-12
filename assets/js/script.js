var container = $("#container");

const cheeses = [
    {
        name: "Havarti",
        img: "placeholder",
        smell: "Foot, Fart, Dead Animal",
        type: "Semi-soft", 
        taste: "Butter, Magic, Unicorn Milk",
        origin: "Denmark" 
    },
    {
        name: "Cheddar",
        img: "placeholder",
        smell: "Foot, Fart, Dead Animal",
        type: "Semi-soft", 
        taste: "Butter, Magic, Unicorn Milk",
        origin: "Denmark"
    },
    {
        name: "Goat",
        img: "placeholder",
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
            .addClass("taskdiv");

        var image = $("<img>")
            .addClass(cheeses[i].img);

        var cheeseName = $("<h2>")
            .addClass("cheese-name")
            .text(cheeses[i].name);
        
        var cutBtn = $("<button/>")
            .addClass("cutBtn")
            .text('CUT IT')
            .click(function () {
                
            });
            

        
        container.append(taskdiv);
        container.append(image);
        container.append(cheeseName);
        container.append(cutBtn);
    };      
            
};

var cheeseCard = function() {};

// $('<button/>')
//     .text('Test')
//     .click(function () { alert('hi'); });

// // or

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