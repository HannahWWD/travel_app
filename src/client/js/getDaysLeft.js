const getDaysLeft = (date_str) => {

    const dateList = date_str.split("-");
    let departureDate = new Date(dateList[0],dateList[1]-1,dateList[2]);

    let today = new Date();

    // ignore the time and local timezone, in order to get intuitive day lefts
    const departureUTC = Date.UTC(departureDate.getFullYear(),departureDate.getMonth()+1,departureDate.getDate());
    const todayUTC = Date.UTC(today.getFullYear(),today.getMonth()+1,today.getDate())

    const msPerDay = 24*60*60*1000;
    const daysLeft = Math.round((departureUTC-todayUTC)/msPerDay);

    return daysLeft;
}

export { getDaysLeft }