// Get the input field element
const inputField = document.getElementById('input-field');

// Add an event listener for when the form is submitted
document.querySelector('form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user input from the input field
    const userInput = inputField.value;

    // Store the user input in Chrome storage
    chrome.storage.local.set({ 'userInput': userInput }, () => {
        console.log(`User input saved: ${userInput}`);
    });
});