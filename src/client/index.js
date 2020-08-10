
import './styles/resets.scss'
import './styles/base.scss'
import './styles/input.scss'
import './styles/result.scss'


import { removeCard } from './js/removeCard'
import { updateCalendarMin } from './js/updateCalendarMin'
import { handleSubmit } from './js/handleSubmit'

// cross browser date picker
import 'nodep-date-input-polyfill'

console.log("index.js existed!");

// set the min value of the calendar as today's date (only works in chrome)
updateCalendarMin();

document.getElementById("result-container").addEventListener('click', removeCard);

document.getElementById('submit').addEventListener('click', handleSubmit);