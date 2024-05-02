  // Function to generate a random color in hexadecimal format
  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to change the background color of each div with the class "randomDiv"
function changeColors() {
    var divs = document.querySelectorAll('.randomDiv');
    divs.forEach(function(div) {
        var randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;
    });
}

// Call the function initially to set the colors
changeColors();

// Call the function every second to change the colors
setInterval(changeColors, 1000)