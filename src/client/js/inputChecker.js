import { getDaysLeft } from "./getDaysLeft";


// check destination input 
const checkDestination = (destination) => {
    if (destination == "") {
        return false;
    }else{
        return true;
    }

}

// check date input
const checkDate = (date) => {

    // for safari only
    // take care of the  date input format
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    // if data format correct, return true, otherwise return false
    const isMatch = (date.match(dateFormat) !== null)

    if(isMatch) {
        const daysLeft = getDaysLeft(date);
        if (daysLeft < 0) {
            return false;
        } else {
            return true;
        }

    }else {
        return false;
    }

}

export { checkDestination, checkDate }