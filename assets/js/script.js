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
        var taskdiv = $("<div>").append("#container");
        var image = $("<img/>").append("#container");
        var cheeseName = $("<h2>")
            .text(cheeses[i].name)
            .append("#container");
    }
}
// var createTask = function(taskText, taskDate, taskList) {
//     // create elements that make up a task item
//     var taskLi = $("<li>").addClass("list-group-item");
//     var taskSpan = $("<span>")
//       .addClass("badge badge-primary badge-pill")
//       .text(taskDate);
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(taskText);
  
//     // append span and p element to parent li
//     taskLi.append(taskSpan, taskP);
  
//     // check due date
//     auditTask(taskLi);
  
//     // append to ul list on the page
//     $("#list-" + taskList).append(taskLi);
//   };
// call the printcheesecards function
printCheeseCards();

//     for(var i = 0; i < timeSlots.length; i++) {
//         var containerSections = document.createElement("div");
//         containerSections.classList = "row d-flex flex-row";
//         containerSections.id = "containerSections";
//         containerEl.appendChild(containerSections);

//         var blockEl = document.createElement('div');
//         blockEl.classList = "time-block col-1";
//         containerSections.appendChild(blockEl);

//         var timeInSlot = document.createElement("p");
//         timeInSlot.id = "timeInSlot"  + timeSlots.indexOf();
//         timeInSlot.classList = "hour";
//         timeInSlot.textContent = timeSlots[i];
//         blockEl.appendChild(timeInSlot);

//         var eventWritingSection = document.createElement("p");
//         eventWritingSection.id = "eventWritingSection"  + timeSlots.indexOf();
//         eventWritingSection.textContent = " ";
//         eventWritingSection.classList = "past col-9";
//         containerSections.appendChild(eventWritingSection);

//         var saveButtonSlot = document.createElement("p");
//         saveButtonSlot.id = "saveButtonSlot" + timeSlots.indexOf();
//         saveButtonSlot.classList = "saveBtn col-1";
//         containerSections.appendChild(saveButtonSlot);

//         var saveButton = document.createElement("button");
//         saveButton.id = "saveButton" + timeSlots.indexOf();
//         saveButton.classList = "saveBtnKiddo";
//         saveButton.innerHTML = "<span class='glyphicon glyphicon-floppy-save'></span>"
//         saveButtonSlot.appendChild(saveButton);
//     }
    
// }