import 'babel-polyfill'
import { addCard } from '../js/addCard'


test('check addCard() able to add a card div', () => {

    document.body.innerHTML = `
    <form id="form-container">
    <div>
        <label for="destination">Destination</label><br>
        <input type="text" id="destination" name="destination" value="Italy" placeholder="Enter city name"><br>
    </div>
    <div>
        <label for="departure">Departure Date</label><br>
        <input type="date" id="departure" name="departure" value="2020-01-01" placeholder="yyyy-mm-dd"
            min=""><br>
    </div>
    <div class="submit-btn">
        <button type="button" class="button">Add Trip</button>
    </div>

</form>

    <section id="result-container">

    </section>
    
    `;

    const addButton = document.querySelector('button');
    const resultContainer = document.getElementById("result-container");

    addButton.addEventListener('click', addCard);

    addButton.click();

    // resultContainer should have one child element
    expect(resultContainer.childElementCount).toEqual(1);

})

