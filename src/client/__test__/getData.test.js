import 'babel-polyfill'
import {getApiKey,getGeoData,getWeatherData,getPhoto} from '../js/getData'

const mockReturnValue = {
    geonames:[{
        name:"London",
        countryName:"England",
        lng:-0.1,
        lat:52.3
    }],

    data:[{
        weather:{
            description:"Cloudy"
        },
        temp:20
    }],

    hits:[{webformatURL:"https://www.unsplash.com"}]
    
};

global.fetch = jest.fn(() => Promise.resolve({
    json:() => Promise.resolve(mockReturnValue)

})
)

it("should fetch back all data",async()=>{
    const data = await getApiKey("someURL");
    expect(data).toBe(mockReturnValue)
})


it ("should fetch back geo data",async()=>{
    const geoLoc = await getGeoData("London","123");
    expect(geoLoc.city).toMatch(/London/);
})

it ("should fetch back weather data",async()=>{
    const weatherData = await getWeatherData(-1,-2,"123",2);
    expect(weatherData.summary).toMatch(/cloudy.+20/);
})

it("should return photo URL",async()=>{
    const photoURL = await getPhoto("London","123");
    expect(photoURL.image).toBe("https://www.unsplash.com");


})