# Travel App 
Udacity capstone project

This project is a single-page web app that allows users to obtain necessary information such as weather, destination images for their future trip, according to the destination location and departure date input.

## Setup Node.js

Before you start, you will need to install [Node.js](https://nodejs.org/en/) on your computer.


## Getting started

### Install

Type in following commands in your terminal to build the project:

```
npm install
npm run build-prod
npm run start 
```

**The App should work properly at PORT 3030.**


### Development Mode

To use development mode, run `npm run build-dev`. Website will automatically open in your browser. At the same time, run `npm run start` to open the local server.

_Note: You may notice there is a service worker error shown in the console. This is because service worker is disabled in dev-mode. This error will not interrupt with your development process._

### Test 

Close all the servers, and use `npm run test` to run tests 

**IMPORTANT:** Make sure to close all servers before running the test, otherwise the server test file `server.test.js` will fail due to port conflicts

### Test files

There are two `__test__` folders, one in the client folder and another in the server folder.


## App Usage

- Type in a single city name (e.g. London, Paris)
- Select departure date from the date picker

_Note: a departure date that earlier than today is invalid_

### Notes for Usage

It might take a few seconds to get the result, especially the photo.
The App only works with English content.



## Dependencies

`npm install` should automatically install all the dependencies in this project. If not, please find all dependencies in the `package.json` file or the list below. Use `npm i [package-name]` to install dependencies, and use `npm i -D [package-name]` to install dev dependencies.

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


## Known Issue

If you are using Chrome, you may find this warning in the console:

> A cookie associated with a cross-site resource at http://pixabay.com/ was set without the `SameSite` attribute. It has been blocked, as Chrome now only delivers cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/563352162218803

This is because the image presented in the result hotlinks to the Pixabay website. This will not affect normal usage of the app. However, the link is not permanent and will be erased anytime. To permanently store the images, save them to the server as soon as possible.


## License

This travel app is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE) file.