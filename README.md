# Travel App 
capstone project
by Hannah Wu

## Project Logic

- User enters city name and departure date, and then submit the form
- Client side will then fetch the API keys from the server (note: all 3 api keys are stored in the server)
- After getting the API keys, 3 APIs will be fetched in the client side, and the data for this submission will be stored in the `singleClientData` (client side member:value pair)
- Client side will then post the `singleClientData` to the server and stored in the server endpoint `projectData`
- Server will push the `projectData` into the `dataBase` object, in which a complete history of data will be stored (server side member:value pair)

### member:value pairs

Client side: the `singleClientData` object in the `handleSubmit.js` file
Server side: the `projectData` and `dataBase` objects in the `server.js` file


## Project Extra

- Allow the user to remove the trip
- Allow user to Print their trip and/or export to PDF
- Add multiple trip



## Getting started

- type in following commands in your terminal to build the project

```
npm install
npm run build-prod
npm run start 
```

***Note: the App should work properly at PORT 3030.***

- To use development mode, run `npm run build-dev`. Website will automatically open in your browser. At the same time, run `npm run start` to open the local server.

***Note: A service worker error will be shown in the console in the dev-mode. This is because service worker is disabled in webpack.dev.js.***


- Close all the servers, and use `npm run test` to run tests (**IMPORTANT:**
Make sure to close all the server before running the test, otherwise the server test file `server.test.js` will fail due to port conflicts)

### Test files

Two `__test__` folders are located separately in the client and server folder.



## App Usage

- Type in a single city name (e.g. London, Paris)
- Select departure date from the date picker

***Note: a departure date that earlier than today is invalid***

### Notes for Usage

- It might take a few seconds to get the result, especially the photo.
- The App only works with English content.



## Dependencies

You can find all dependencies in the `package.json` file or the list below:

```
"dependencies": {
    "aylien_textapi": "^0.7.0",
    "body-parse": "^0.1.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mockdate": "^3.0.2",
    "node-fetch": "^2.6.0",
    "nodep-date-input-polyfill": "^5.2.0",
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.5"
  },
  "devDependencies": {
    "@babel/core": "^7.10.5",
    "@babel/preset-env": "^7.10.4",
    "babel-jest": "^26.1.0",
    "babel-loader": "^8.1.0",
    "babel-polyfill": "^6.26.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.6.0",
    "file-loader": "^6.0.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^26.1.0",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.14.1",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "resolve-url-loader": "^3.1.1",
    "sass-loader": "^9.0.2",
    "style-loader": "^1.2.1",
    "supertest": "^4.0.2",
    "terser-webpack-plugin": "^3.0.7",
    "webpack-dev-server": "^3.7.2",
    "workbox-webpack-plugin": "^5.1.3"
  },
```

