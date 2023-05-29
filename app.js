/*
let elem = document.getElementById('glitch-word');

function glitch() {
    // Generate a random color in hexadecimal (i.e. #62b36e)
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Create a new span element
    let newElem = document.createElement('span');
    newElem.textContent = elem.textContent;

    // Style the new element with a random color and offset
    newElem.style.color = randomColor;
    newElem.style.position = 'relative';
    newElem.style.left = Math.random() * 2 - 1 + 'px';
    newElem.style.top = Math.random() * 2 - 1 + 'px';

    // Assign the 'glitch' class to the new element
    newElem.className = 'glitch';

    // Append the new element to the original element
    elem.appendChild(newElem);

    // Remove the glitch effect after 200ms
    setTimeout(function () {
        elem.removeChild(newElem);
    }, 200);
}

// Call the glitch function every 2000ms (2 seconds)
setInterval(glitch, 3000);

*/