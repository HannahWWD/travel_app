import 'babel-polyfill'
import { formatDate } from '../js/formatDate'

test("returns correct date format",()=>{
    expect(formatDate("2020-08-04")).toMatch(/August 4, 2020/);
})