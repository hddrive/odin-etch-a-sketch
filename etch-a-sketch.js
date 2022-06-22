// Create 16x16 grid of square divs 
//     Create in javascript as the user will need to choose the size
// place these squares in a "container"
// Choose a method or mix and match to make the grid

// Use a hover effect so grid changes color as mouse passes over leaving a trail like a pen 
// Button to prompt user for size of grid up to 100 max 
//     the size of the grid will still use the same amount of pixels
 
// Understand. Plan, Research. Pseudocode. Divide. Debug, Reassess, Research.

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
//      Set grid size default to 16
//      Select container div
//      For each div in grid size
//          create div
//          append div to parent div element
//          add class of grid to div
//      Add event listener for hover over divs, changes stay
//      Add event listener for grid size button
//      Create prompt for grid size button event listener
//      Add reset of hover effect after prompt is accepted by user
//      Get grid size when button is pressed
//      Update grid size the new size
//          
//  CSS
//      Set height and width of div container
//      Set border of div container
//      Create grid using grid methods
//      Set hover for grid divs
//      Set color change for hover
//      Set grid divs box to 0 all around
//      Set grid divs to be relative to parent div size
//      Set grid size button size
//      Set grid size button corner roundness
//      Set grid size button location
//      Set button type to button
//      Set transition of divs to .5 s
//      
//  HTML
//      Create div container for grid divs
//      Create and class button for resetting
//      

let gridSize = 16**2;
const grid = document.querySelector(".grid");

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement("div");
        grid.appendChild(div);        
        div.classList.add("pixel");
        // div.textContent = "hey";
    }
}

// Grabs all pixel divs and applies an eventlistener to each one using a for loop instead of the forEach method
function applyButtonEventListener () {
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < gridSize; i++) {
        pixels[i].addEventListener("mouseenter", function (event) {
            event.target.style.backgroundColor = "blue";
        })
    }
}

createGrid(gridSize);
const reset = document.querySelector(".reset");

applyButtonEventListener();


reset.addEventListener('click', () => {
    let trueSize;
    do {
        gridSize = parseInt(prompt("Please enter a new size between 1 and 100"));
        console.log(gridSize);
    } while (gridSize < 1 || gridSize > 100);

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(gridSize ** 2);
    applyButtonEventListener();
    grid.style.setProperty("--grid-column-count", gridSize);
    grid.style.setProperty("--grid-column-size", (100/gridSize) + "%")
})

// grid.style.setProperty("--grid-column-count", Math.sqrt(gridSize));



// using min-width or height, access grids height and width and make the divs size relative to that in relation to the amount of divs