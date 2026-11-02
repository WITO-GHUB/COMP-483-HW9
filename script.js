const today = new Date();

// Extract the pieces. getMonth() is 0-based, so add 1.
const month = today.getMonth() + 1;
const day = today.getDate();
const year = today.getFullYear();

// Convert to strings and pad with a leading zero so they are always two digits
const monthText = String(month).padStart(2, "0");
const dayText = String(day).padStart(2, "0");

// Build the final message and put it on the page
const dateMessage = "Today is " + monthText + "/" + dayText + "/" + year;
document.getElementById("dateOutput").textContent = dateMessage;