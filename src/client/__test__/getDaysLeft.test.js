import 'babel-polyfill'
import { getDaysLeft } from '../js/getDaysLeft'

test("returns correct days left",()=>{
    expect(getDaysLeft("2021-01-07")).toEqual(156);
})