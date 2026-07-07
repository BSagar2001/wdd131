// Select the HTML elements

const input = document.querySelector("#favchap");

const button = document.querySelector("button");

const list = document.querySelector("#list");


// Create a list item

const li = document.createElement("li");


// Create a delete button

const deleteButton = document.createElement("button");


// Put the input text inside the list item

li.textContent = input.value;


// Put an X on the delete button

deleteButton.textContent = "❌";


// Accessibility label

deleteButton.setAttribute("aria-label", "Remove Chapter");


// Add the button into the list item

li.append(deleteButton);


// Add the list item into the unordered list

list.append(li);