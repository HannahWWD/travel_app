# Travel App 
capstone project
by Hannah Wu

## Project Logic

- User enters city name and departure date, and then submit the form
- Client side will then fetch the API keys from the server (note: all 3 api keys are stored in the server)
- After getting the API keys, 3 APIs will be fetched in the client side, and the data for this submission will be stored in the `singleClientData` (client side).
- Client side will then post the `singleClientData` to the server and stored in the project endpoint `projectData`
- Server will push the `projectData` into the `dataBase` object, in which a complete history of data will be stored


## Extend Options

- Add multiple trip
- Allow the user to remove the trip
- Allow user to Print their trip and/or export to PDF


## Getting started

- type in following commands in your terminal to build the project

```
npm install
npm run build-prod
npm run start 
```

***Note: the App should work properly at port 3030.***

- To use development mode, run `npm run build-dev`. Website will automatically open in your browser. At the same time, run `npm run start` to open the local server.

***Note: there will be an service worker error showing in the console in the dev-mode. This is because service worker is disabled in development mode. ***


- Close all the servers, and use `npm run test` to run tests (**IMPORTANT**
Make sure to close all the server before running the test, otherwise the server test file `index.test.js` will fail due to port conflicts)


## App Usage

- Type in a single city name (e.g. London, Paris)
- Select departure date from the date picker

***Note: a departure date that earlier than today is invalid***

### Notes for Usage

- It might take a few seconds to get the result, especially the photo.
- The App only works with English content.

