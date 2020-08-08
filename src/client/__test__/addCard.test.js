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

    const resultContainer = document.getElementById("result-container");


    // update UI

    const card_id = 1;
    const card_city = "LONDON";
    const card_country = "ENGLAND";
    const card_image = "https://images.unsplash.com/photo-1596787071320-c06155930dae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
    const card_date = "2021-01-01";
    const card_daysLeft = 10;
    const card_summary = "This is a test";

    addCard(card_id, card_city, card_country, card_image, card_date, card_daysLeft, card_summary);

    // resultContainer should have one child element
    expect(resultContainer.childElementCount).toEqual(1);

})

