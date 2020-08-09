
import './styles/resets.scss'
import './styles/base.scss'
import './styles/input.scss'
import './styles/result.scss'


// import { addCard } from './js/addCard'
import { removeCard } from './js/removeCard'
// import { formatDate } from './js/formatDate'
// import { getDaysLeft} from './js/getDaysLeft'
import { updateCalendarMin } from  './js/updateCalendarMin'
// import { getApiKey,getGeoData,getWeatherData,getPhoto } from './js/getData'
import { handleSubmit } from './js/handleSubmit'
// import { postData } from './js/postData'

// cross browser date picker
import 'nodep-date-input-polyfill'

console.log("index.js existed!");

// set the min value of the calendar as today's date
updateCalendarMin();

document.getElementById("result-container").addEventListener('click',removeCard);

document.getElementById('submit').addEventListener('click',handleSubmit);

// export {
//     addCard,
//     removeCard,
//     formatDate,
//     getDaysLeft,
//     getApiKey,
//     getGeoData,
//     getWeatherData,
//     getPhoto,
//     postData
// }