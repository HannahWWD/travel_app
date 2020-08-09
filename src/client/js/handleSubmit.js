import { getApiKey, getGeoData, getWeatherData, getPhoto } from "./getData"
import { getDaysLeft } from './getDaysLeft'
import { postData } from './postData'
import { addCard } from "./addCard"
import { formatDate } from "./formatDate"
import { checkDestination, checkDate } from './inputChecker'


const handleSubmit = async (event) => {

    // client side endpoint
    // single data for this submit 
    let singleClientData = {};
    // whole history of the submission. 
    // (data won't be cleared until the server restart. It won't get clear if trip is removed too)
    const dataBase = {};

    const destinationForm = document.getElementById('destination');
    const dateForm = document.getElementById('departure');
    const daysLeft = getDaysLeft(dateForm.value);
    console.log(daysLeft);

    const isValidDestination = checkDestination(destinationForm.value);
    const isValidDate = checkDate(dateForm.value);

    /* reset error message */
    document.getElementById("error-destination").style.visibility = "hidden";
    document.getElementById("error-date").style.visibility = "hidden";

    // only execute promise chain when destination and date is valid

    if (isValidDestination && isValidDate) {

        try {
            // get api key
            const apiKey = await getApiKey('http://localhost:3030/get-key');

            // get geo data
            const geoData = await getGeoData(destinationForm.value, apiKey.geo);

            // get weather data
            const weather = await getWeatherData(geoData.lon, geoData.lat, apiKey.weatherbit, daysLeft);

            // get image url
            const imageData = await getPhoto(destinationForm.value, apiKey.pixabay);

            // extra info that needs to record
            const extraInfo = {
                tripID: Math.random(),
                date: formatDate(dateForm.value),
                daysLeft: daysLeft
            };

            // assign value for this submit to variable singleClientDta
            Object.assign(singleClientData, geoData, weather, imageData, extraInfo)
            console.log(singleClientData)

            // post the singleClientData to the server and fetch the whole database info back
            const completeData = await postData("http://localhost:3030/post-data", singleClientData);
            Object.assign(dataBase, completeData);

            // update UI

            const card_id = singleClientData.tripID;
            const card_city = singleClientData.city;
            const card_country = singleClientData.country;
            const card_image = singleClientData.image;
            const card_date = singleClientData.date;
            const card_daysLeft = singleClientData.daysLeft;
            const card_summary = singleClientData.summary;

            addCard(card_id, card_city, card_country, card_image, card_date, card_daysLeft, card_summary);
            
            event.preventDefault();
            window.scrollTo(0,document.querySelector('.result-card').offsetTop);
       
        } catch (error) {
            console.log(error);
        }
        
    } else if (!isValidDestination && isValidDate) {
        // if destination is empty
        document.getElementById("error-destination").style.visibility = "visible";

    } else if (isValidDestination && !isValidDate) {
        // if date is not valid
        document.getElementById("error-date").style.visibility = "visible";
    } else{
        // if both are not valid
        document.getElementById("error-destination").style.visibility = "visible";
        document.getElementById("error-date").style.visibility = "visible";

    }


}


export { handleSubmit }