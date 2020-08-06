import 'babel-polyfill'
import { removeCard } from '../js/removeCard'

test('check removeCard() able to remove a card div',()=>{
    document.body.innerHTML=`

    <section id="result-container">
       <div class="result-card">
            <div><img src="/src/client/images/travelapp.jpg" alt="city photo"></div>
            <div class="result-text">
                <p>Destination</p>
                <div id="destination-result">Venice,Italy</div>
                <p>Departure Date</p>
                <div id="date-result">June 7,2021</div>
                <p>Information</p>
                <span>Venice is </span><span id="date-left">100</span><span>day(s) away!</span><br>
                <span>The weather at that date will be</span>
                <div id="weather">high 46 and low 35. Mostly Cloudy throughout the day.</div>
                <button type="button" class="button btn-outline">Remove Trip</button>
            </div>
        </div>
    </section>
    
    `;

    const removeButton = document.querySelector('button');
    const resultContainer = document.getElementById("result-container");

    removeButton.addEventListener('click',removeCard);

    removeButton.click();
   
    // resultContainer should not have child element.
    expect(resultContainer.firstElementChild).toBeNull();

})

