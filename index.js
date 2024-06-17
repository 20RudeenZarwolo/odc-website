

// GREETINGS

var greetingElement = document.getElementById("greetings") //GET THE GREETINGS ELEMENT BY ITS ID

var now = new Date(); // GET THE CURRENT DATE
var hour = now.getHours(); // GET ONLY THE CURRENT HOUR FROM THE CURRENT DATE

if (hour < 12) { // IF THE CURRENT HOUR IS LESS THEN 12 SET THE GREETING ELEMENT TO GOOD MORNING
    greetingElement.innerHTML = "Good morning! ";
} 
else if (hour < 18) { // IF CURRENT HOUR IS LESS THEN 18(6PM) SET THE GREETING ELEMENT TO GOOD AFTERNOON
    greetingElement.innerHTML = "Good afternoon! ";
} 
else { // IF CURRENT HOUR IS NOT LESS THEN 12 AND 18 SET THE GREETING ELEMENT TO GOOD EVENING
    greetingElement.innerHTML = "Good evening! ";
}




// ORANGE PROGRAMS

var coddingSchool = document.getElementById("codding-school"); // GET THE CODDING SCHOOL PROGRAM BUTTON BY ITS ID
var fabLab = document.getElementById("fab-lab"); // GET THE FAB LAB PROGRAM BY ITS BUTTON
var fab = document.getElementById("fab"); // GET THE ORANVE FAB PROGRAM BY ITS BUTTON

// LISTEN FOR CLICK ON THE CODDING SCHOOL CLICK ME BUTTON
coddingSchool.addEventListener("click", function button(){
    alert("Hello! welcome to Organe Codding School Program");
});

// LISTEN FOR CLICK ON THE FAB LAB PROGRAM CLICK ME BUTTON
fabLab.addEventListener("click", function button(){
    alert("Hello! Welcome to Orange Fab Lab Program");
});

//LISTEN FOR CLICK EVENT ON THE ORGANGE FAB CLICK ME BUTTON
fab.addEventListener("click", function button(){
    alert("Hello! Welcome to Orange Fab Program");
});
