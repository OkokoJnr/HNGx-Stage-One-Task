// Function to update the current date and time
function updateDateTime() {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Update the current day of the week
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayElement.textContent = dayOfWeek;

    // Update the current UTC time
    const hours = currentDate.getUTCHours().toString().padStart(2, '0');
    const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    timeElement.textContent = `${hours}:${minutes} UTC`;
}

// Call the function to update date and time initially
updateDateTime();

// Set an interval to update the date and time every minute
setInterval(updateDateTime, 60000);
