function calculateDays() {
    const startDateVal = document.getElementById('start-date').value;
    const endDateVal = document.getElementById('end-date').value;
    const resultText = document.getElementById('result-text');

    // Validate inputs
    if (!startDateVal || !endDateVal) {
        resultText.textContent = "Please select both dates.";
        return;
    }

    const startDate = new Date(startDateVal);
    const endDate = new Date(endDateVal);

    // Validate that the start date is before or equal to the end date
    if (startDate > endDate) {
        resultText.textContent = "Start date must be before end date.";
        return;
    }

    // Calculate time difference in milliseconds
    const timeDifference = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to days (1000 ms * 60 sec * 60 min * 24 hours)
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const dayDifference = Math.round(timeDifference / millisecondsPerDay);

    // Include the end date by adding 1
    const totalDays = dayDifference + 1;

    // Display the result
    if (totalDays === 1) {
        resultText.textContent = `There is 1 day.`;
    } else {
        resultText.textContent = `There are ${totalDays} days.`;
    }
}
