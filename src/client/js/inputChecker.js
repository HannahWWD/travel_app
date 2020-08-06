import { getDaysLeft } from "./getDaysLeft";


// check destination input 
const checkDestination = () => {
    const destinationForm = document.getElementById('destination');
    if (destinationForm.value == "") {
        return false;
    }else{
        return true;
    }

}

// check date input
const checkDate = () => {

    const dateForm = document.getElementById('departure');

    // for safari only
    // take care of the  date input format
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    // if data format correct, return true, otherwise return false
    const isMatch = (dateForm.value.match(dateFormat) !== null)

    if(isMatch) {
        const daysLeft = getDaysLeft(dateForm.value);
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