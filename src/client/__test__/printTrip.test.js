import 'babel-polyfill'
import { printTrip } from '../js/printTrip'

test('printTrip is a function', ()=>{
    expect(typeof (printTrip)).toBe('function')});