/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(str){
  let toRemoveColon = str.split(':').join('');
  let toNumber = parseInt(toRemoveColon);

  if(toNumber < 1200){
    return "Good Morning"
  } else if(toNumber > 1200 && toNumber < 1700){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(str){
  document.getElementById('greeting').innerText = str
}

// let main = document.querySelector('main');
// let newHeader = document.createElement('h1')
// newHeader.innerHTML = 'Dustin is the champion';