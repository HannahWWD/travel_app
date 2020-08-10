// get api key from server

const getApiKey = async (url) => {
    const request = await fetch(encodeURI(url));
    try {
        const data = await request.json();
        console.log("api fetch completed");
        return data
    } catch (error) {
        console.log("error: ", error);

    }
}

// get longitude and latitude 

const getGeoData = async (city, key) => {
    const url = `http://api.geonames.org/searchJSON?name=${city}&maxRows=5&username=${key}`
    const request = await fetch(encodeURI(url));
    try {
        const data = await request.json();
        if (data.totalResultsCount != 0) {
            const geoLocation = {
                city: data.geonames[0].name,
                country: data.geonames[0].countryName,
                lon: data.geonames[0].lng,
                lat: data.geonames[0].lat
            }
            console.log("location pull finished");
            return geoLocation;
        } else {
            document.getElementById("error-destination").style.visibility = "visible";
            throw new Error("cannot find this place");
        }


    } catch (error) {
        console.log("error: ", error);

    }
}

// get weather

const getWeatherData = async (lon, lat, key, daysLeft) => {
    let url = "";

    if (daysLeft <= 7) {
        url = `https://api.weatherbit.io/v2.0/current?&lon=${lon}&lat=${lat}&key=${key}`
    } else {
        url = `https://api.weatherbit.io/v2.0/forecast/daily?lon=${lon}&lat=${lat}&key=${key}`
    }


    const request = await fetch(encodeURI(url));
    try {
        const data = await request.json();
        let weather = {};

        if (daysLeft <= 7) {
            weather = {
                summary: `The weather at that date will be ${data.data[0].weather.description.toLowerCase()}, with temperature of ${data.data[0].temp} &#8451;.`
            }
        } else if (daysLeft < 16) {
            weather = {
                // the 0 item date is the same as today
                summary: `The weather at that date will be ${data.data[daysLeft].weather.description.toLowerCase()}, with high ${data.data[daysLeft].high_temp} &#8451; and low ${data.data[daysLeft].low_temp} &#8451;`


            }
        } else {
            weather = {
                summary: `The weather at that date will be ${data.data[15].weather.description.toLowerCase()}, with high ${data.data[15].high_temp}&#8451; and low ${data.data[15].low_temp} &#8451;`
                // the api only has 16 days forcast, hence for dates later than 16days it will return the latest item [15]

            }
        }
        console.log("weather pull finished");
        return weather

    } catch (error) {
        console.log("error: ", error);

    }

}


const getPhoto = async (city, key) => {

    const url = `https://pixabay.com/api/?key=${key}&q=${city}&image_type=photo&pretty=true&per_page=3`
    const request = await fetch(encodeURI(url));
    try {
        const data = await request.json();

        const photoURL = {
            image: data.hits[0].webformatURL
        }

        console.log("image URL pull finished");
        return photoURL

    } catch (error) {
        console.log("error: ", error);

    }
}
export {
    getApiKey,
    getGeoData,
    getWeatherData,
    getPhoto
}
