// a small function to update the min function of the calendar
const updateCalendarMin = () => {
    const calendar = document.getElementById("departure");

    const today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
        month = '0' + month;
        console.log(month);
    }

    if (day < 10) {
        day = '0' + day;
    }

    const minDate = `${today.getFullYear()}-${month}-${day}`
    console.log(minDate);
    calendar.setAttribute("min", minDate)

}

export { updateCalendarMin } 