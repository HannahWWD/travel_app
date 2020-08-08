import 'babel-polyfill'
import {updateCalendarMin} from '../js/updateCalendarMin'
import MockDate from 'mockdate'

// set today as stable 2020-08-07
const mockToday = new Date(2020,7,7,4,24,0)

MockDate.set(mockToday);

test("calendar start from today",()=>{
    document.body.innerHTML = `
    <div>
        <label for="departure">Departure Date</label><br>
        <input type="date" id="departure" name="departure" value="" placeholder="yyyy-mm-dd"
            min=""><br> 
    </div>
    `

    updateCalendarMin()

    expect(document.getElementById('departure').getAttribute("min")).toEqual("2020-08-07")
})

