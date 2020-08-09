import { printTrip } from "./printTrip"
import print from '../images/print.png'

const addCard = (id,city,country,image,date,daysLeft,summary) => {
    console.log('addCard!');
    const resultContainer = document.getElementById('result-container');

    
    const cardHTML = `

    <div class="result-card" id=${id}>
            <div><img src="${image}" alt="city photo"></div>
            <div class="result-text">
                <div class="print"><img src="${print}" alt="print"></div>
                <p>Destination</p>
                <div>${city}, ${country}</div>
                <p>Departure Date</p>
                <div>${date}</div>
                <p>Information</p>
                <span>${city} is in </span><span>${daysLeft}</span><span> day(s) away!</span><br>
                <div>${summary}</div>
                <button type="button" class="button btn-outline">Remove Trip</button>
            </div>

    
    </div>

    `

    resultContainer.insertAdjacentHTML('afterbegin',cardHTML)

    document.querySelector(".print").addEventListener("click",printTrip)

}

export {addCard}