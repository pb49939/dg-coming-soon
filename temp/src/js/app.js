//to start app, we do #npm init
//this will give us a ton of options to fill out that build out package.json file
//then create an html file referencing a bundle.js file
//then create an app.js file where the js that I write will go
//then run #webpack app.js -o bundle.js --watch
//this will compils app.js and transpile it into bundle.js on every save
//adding jquery -> #sudo npm install jquery --save
//adding loaders for styles -> #sudo npm install css-loader style-loader --save-dev
//if we add #webpack --watch# to the package.json file, then we can #sudo npm run build# to start up the webpack app
//we can also run sudo npm run start

require("../css/style.css");
const render = require("./render.js");
const webObjectCodes = require("./webObjectCodes");
const animate = require("./animations.js");
const $ = require("jquery");
const log = require("./log.js");

$(document).ready(function () {
  log.logUser();
  animate.navSliderAnimation();

  for (let i = 0; i < webObjectCodes.length; i++) {
    render.renderWebObjectByCode(webObjectCodes[i]);
  }
});


