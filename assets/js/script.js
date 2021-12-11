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
        var taskdiv = $("<div>").addClass("taskdiv")
            // .append("#container");
        var image = $("<img>").addClass("image");
            // .append("#container");
        var cheeseName = $("<h2>")
            .addClass("cheese-name")
            .text(cheeses[i].name);
            // .append("#container");
        container.append(taskdiv);
        container.append(image);
        container.append(cheeseName);
    };      
            
};
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