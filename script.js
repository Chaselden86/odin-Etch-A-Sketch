// Get the grid container element
const gridContainer = document.getElementById('grid-container');

// Get the button element
const button = document.getElementById('generate-button');

// Function to generate the grid
function generateGrid(gridSize) {
  // Clear existing grid
  gridContainer.innerHTML = '';

  // Calculate the width and height of each grid square
  const squareSize = 100 / gridSize;

  // Loop to create grid squares
  for (let i = 0; i < gridSize * gridSize; i++) {
    // Create a new grid square div element
    const gridSquare = document.createElement('div');
    
    // Apply necessary CSS styles for the grid square
    gridSquare.classList.add('grid-square');
    gridSquare.style.width = `${squareSize}%`;
    gridSquare.style.height = `${squareSize}%`;

    // Add event listeners for hover effect
    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.backgroundColor = getRandomColor();
    });

    // Append the grid square to the grid container
    gridContainer.appendChild(gridSquare);
  }
}

// Helper function to generate a random RGB color
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Event listener for the button click
button.addEventListener('click', () => {
  // Prompt the user for input
  const input = prompt('Enter the number of squares per side (maximum 100):');

  // Parse the input as an integer
  const gridSize = parseInt(input);

  // Check if the input is a valid number
  if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
    // Call the generateGrid function with the new gridSize
    generateGrid(gridSize);
  } else {
    // Display an error message if the input is invalid
    alert('Invalid input! Please enter a number between 1 and 100.');
  }
});

// Call the generateGrid function with an initial gridSize
generateGrid(16);
