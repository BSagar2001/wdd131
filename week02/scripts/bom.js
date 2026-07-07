// Select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// Wait for button click
buttonElement.addEventListener("click", function () {

    // Check if input is not empty
    if (inputElement.value.trim() !== "") {

        // Create list item
        const li = document.createElement("li");
        li.textContent = inputElement.value;

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        // Accessibility
        deleteBtn.setAttribute(
            "aria-label",
            `Remove ${inputElement.value}`
        );

        // Delete chapter
        deleteBtn.addEventListener("click", function () {
            listElement.removeChild(li);
            inputElement.focus();
        });

        // Add button to list item
        li.appendChild(deleteBtn);

        // Add list item to list
        listElement.appendChild(li);

        // Clear input
        inputElement.value = "";
    }

    // Return cursor to input
    inputElement.focus();
});