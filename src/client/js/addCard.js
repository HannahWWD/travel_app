const addCard = (id,city,country,image,date,daysLeft,summary) => {
    console.log('addCard!');
    const resultContainer = document.getElementById('result-container');
    // const destinationForm = document.getElementById('destination');
    // const dateForm = document.getElementById('departure');
    // let date = "";
    // let daysLeft = "";
    
    // // this lets the Jest test file ignore the Client library
    // if (typeof Client !== 'undefined'){
    //    date = Client.formatDate(dateForm.value)
    //    daysLeft = Client.getDaysLeft(dateForm.value)
    // }
    
    const cardHTML = `

    <div class="result-card" id=${id}>
            <div><img src="${image}" alt="city photo"></div>
            <div class="result-text">
                <p>Destination</p>
                <div>${city}, ${country}</div>
                <p>Departure Date</p>
                <div>${date}</div>
                <p>Information</p>
                <span>${city} is in</span><span>${daysLeft}</span><span> day(s) away!</span><br>
                <div>${summary}</div>
                <button type="button" class="button btn-outline" onclick="return Client.removeCard(event)">Remove Trip</button>
            </div>

    
    </div>

    `

    resultContainer.insertAdjacentHTML('afterbegin',cardHTML)

}

export {addCard}