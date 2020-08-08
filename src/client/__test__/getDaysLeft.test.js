import 'babel-polyfill'
import { getDaysLeft } from '../js/getDaysLeft'
import MockDate from 'mockdate'

// set today as stable 2020-08-07
const mockToday = new Date(2020,7,7,4,24,0)
console.log(mockToday)

MockDate.set(mockToday);

test("returns correct days left",()=>{
    expect(getDaysLeft("2020-08-08")).toEqual(1);
})