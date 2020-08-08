import 'babel-polyfill'
import { handleSubmit } from '../js/handleSubmit'


test('handleSubmit is a function', ()=>{
    expect(typeof (handleSubmit)).toBe('function')});
