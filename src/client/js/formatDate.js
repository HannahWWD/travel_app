const formatDate = (date_str) => {
    // format 2020-01-01
    const dateList = date_str.split("-");
    console.log(dateList);
    
    // this is to prevent the the input date time from being adjusted according to the timezone
    let d = new Date(dateList[0],dateList[1]-1,dateList[2]);
    console.log(d)
    // format date
    const formatter = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric' });
    let newDate = formatter.format(d);

    return newDate;

}

export {formatDate}