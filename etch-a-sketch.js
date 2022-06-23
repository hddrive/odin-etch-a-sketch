// Short description of the task
// 
// Create 16x16 grid of square divs 
//     Create in javascript as the user will need to choose the size
// place these squares in a "container"
// Choose a method or mix and match to make the grid
// Use a hover effect so grid changes color as mouse passes over leaving a trail like a pen 
// Button to prompt user for size of grid up to 100 max 
//     the size of the grid will still use the same amount of pixels
// Optional
//  Try changing the colors to a random color then try to get the color to change
//  by a small percentage(10% as a good place to start) until it is fully colored in
// 
// Understand. Plan, Research. Pseudocode. Divide. Debug, Reassess, Research.
// 
// Understanding, Research
//  JS
//      I need a grid of square divs in a 16x16 size(default size). I am assuming that 
//      the square refers to the shape of the div and not the shape of the grid
//      as that is implied.
//      Using DOM methods and nested for loops, I can create a 16x16 amount of divs (no nested loops, use CSS to get grid)
//      Use DOM to add attribute hover to grid divs
//      Can use event listeners for the hover effect, this should cause the change to be permanant
//      Use event listeners for when the button is pressed, and to pop up a prompt
//  CSS
//      The grid of squres will take up all existing space and maintain their square shape
//      Using CSS, I can make the grid and set the overall size of the whole grid. This grid will be the same size no matter qty of grid i.e. 16x16, 20x20, etc...
//      I think a .5 px border should be plenty big especially when grid amount increases
//      Use relative sizing to keep the divs square and touching each other with no spacing
//      Set the size of the overall grid to a specific size that will be used as reference for relative measurements
//      When hovering, div changes color and remains that color until reset
//      Use a transition so change isn't immediate
//      Button should be top and center and large-ish
//      Button type set to button
//  HTML
//      Set up div container for grid elements
//      Set up button for resetting the grid

// Pseudocode
//  JS
//      x  Set grid size default to 16
//      x  Select container div
//      x  For each div in grid size
//          x  create div
//          x  append div to parent div element
//          x  add class of grid to div
//      x  F Add event listener for hover over divs, changes stay
//      x  F Add event listener for grid-size button
//      x  f Create prompt for grid-size button event listener
//      x  Add reset of hover effect after prompt is accepted by user
//         L->  Delete all the old divs
//      x  Get grid size when button is pressed
//      x  Update grid size the new size
//          
//  CSS
//      x  Set height and width of div container
//      x  Set border of div container
//      x  Create grid using grid methods
//      --n/a  Set hover for grid divs 
//      x  Set color change for hover
//      x  Set grid div margin to auto
//      x  Set grid divs to be relative to parent div size
//      x  Set grid-size button size
//      -- n/a  Set grid-size button corner roundness
//      x  Set grid-size button location
//      x  Set button type to button
//      --n/a  Set transition of divs to .5 s
//      
//  HTML
//      x  Create div container for grid divs
//      x  Create and class button for resetting
//      x  Add script tag to end of body
//      x  Add link for CSS

// Default grid size
let gridSize = 16**2;
const grid = document.querySelector(".grid");

// Creates divs for grid. Adds them to the grid and adds a class of pixel to them
function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement("div");
        grid.appendChild(div);        
        div.classList.add("pixel");
    }
}

// Grabs all pixel divs and applies an eventlistener to each one using a for loop instead of the forEach method
function applyButtonEventListener () {
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < gridSize; i++) {
        // Added in loop so shader is applied to each pixel div
        let shader = .1;
        pixels[i].addEventListener("mouseenter", function (event) {
            // Used rgba to set shade of the color instead of color name
            event.target.style.backgroundColor = `rgba(0, 0, 0, ${shader})`;
            // Updating shader is added to the eventListener function so it applies to each pixel seperately
            if (shader < 1) {
                // Convert operation to string to one decimal place, then convert it back to number and update string
                shader = Number((shader + .1).toFixed(1));
            }
        })
    }
}

// Initial grid creations
createGrid(gridSize);
// Initial button listener
applyButtonEventListener();

const reset = document.querySelector(".reset");
// Adds listener to button when clicked. Gets the size of new grid, removes all the old divs, creates new grid, applies button listener to all new divs
//  and sets the CSS variables to the new input value
reset.addEventListener('click', () => {
    let getSize;
    do {
        getSize = parseInt(prompt("Please enter a new size between 1 and 100"));
        gridSize = getSize ** 2;
    } while (getSize < 1 || getSize > 100);

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(gridSize);
    applyButtonEventListener();
    grid.style.setProperty("--grid-column-count", getSize);
    grid.style.setProperty("--grid-column-size", (100/getSize) + "%")
})
