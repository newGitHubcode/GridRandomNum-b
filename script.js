// Add event listener to the window
document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the elements
    const grid = document.getElementById("grid");
    const usrInput = document.getElementById("usrInput");
    const submitBtn = document.getElementById("submitBtn");

    // new valu  
    let sum = 0;
    for (let i = 0; i < 80; i++) {
        // Create a new div element
        const square = document.createElement("div");
        // Add some content to it
        square.classList.add("square");
        // Add it to the page
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        square.textContent = randomNumber;
        grid.appendChild(square);

        // Update the sum
        sum += randomNumber;
    }

    submitBtn.addEventListener("click", function() {
        usrGuess = parseInt(usrInput.value);
        if (usrGuess === sum) {
         alert("Correct!");
        } else {
            alert("Wrong!");
        }
    })

    //sumDiv.textContent = "Sum: " + sum;
    console.log(sum)
});
