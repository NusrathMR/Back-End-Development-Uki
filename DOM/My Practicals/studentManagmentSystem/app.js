//first we want select the html elements from index.html


const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const studentsList = document.getElementById("studentsList");

//handle the form event//

form.addEventListener("submit", function(event){
    event.preventDefault();
}); 

//Normally, when a form is submitted, the browser refreshes/navigates. 
//So we want to add preventDefault() function for stop refreshing.

//get the user input and assign for the variables.

const name = nameInput.value;
const age = ageInput.value;
const email = emailInput.value;
const course = courseInput.value;

// .value is helps for get the value endered by the user.






