import 'babel-polyfill'
import {postData} from '../js/postData'

global.fetch = jest.fn(() => Promise.resolve({
    json:() => Promise.resolve({database:0})

})

)

it("posts data to the server and gets the database back",async()=>{
    const returnData = await postData("someURL",{text:"hello world"});
    expect(returnData.database).toEqual(0);
    
})