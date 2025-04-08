// Get references to the elements
const colorBox = document.getElementById('colorBox');
const colorPicker = document.getElementById('colorPicker');
const resetButton = document.getElementById('resetButton');

// Set the default color
const defaultColor = '#ffffff';
colorBox.style.backgroundColor = defaultColor;

// Load the last selected color from localStorage
const lastColor = localStorage.getItem('lastColor');
if (lastColor) {
    colorBox.style.backgroundColor = lastColor;
    colorPicker.value = lastColor; // Set the color picker to the last selected color
}

// Add event listener for color input change
colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    colorBox.style.backgroundColor = selectedColor;
    localStorage.setItem('lastColor', selectedColor); // Store the selected color in localStorage
});

// Add event listener for reset button
resetButton.addEventListener('click', () => {
    colorBox.style.backgroundColor = defaultColor; // Reset to default color
    colorPicker.value = defaultColor; // Reset the color picker
    localStorage.removeItem('lastColor'); // Remove the stored color from localStorage
});