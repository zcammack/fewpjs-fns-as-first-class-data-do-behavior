/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let timeSplit = time.split(':');
  if (timeSplit[0] < 12) {
    return "Good Morning";
  } else if (timeSplit[0] > 17) {
      return "Good Evening";
  } else {
      return "Good Afternoon";
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}