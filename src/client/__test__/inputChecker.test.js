import 'babel-polyfill'
import { checkDate,checkDestination } from '../js/inputChecker'
// import * as daysLeftModule from '../js/getDaysLeft'
// import getDaysLeft from '../js/getDaysLeft'


test("if checkDestination returns false when destination is empty", ()=> {

    expect(checkDestination("")).toBeFalsy();

})

test("if checkDate returns false if date format is incorrect", ()=>{

    expect(checkDate("2021-1-1")).toBeFalsy();

})


// test("if checkDate returns false if date is earlier than today", ()=>{
//     const spy = jest.spyOn(daysLeftModule,'getDaysLeft');
//     spy.mockImplementation((date)=>{
//         const today = new Date();
//         const inputDate = new Date (date);
//         const dayLeft = inputDate-today;
//         console.log(dayLeft);
//         return dayLeft;

//     })

//     expect(checkDate("2020-01-01")).toBeFalsy();

// })

test("if checkDate returns false if date is earlier than today", ()=>{
   
    expect(checkDate("2020-01-01")).toBeFalsy();

})

