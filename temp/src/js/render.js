const webObjects = require("./getWebObjects.js");

const $ = require("jquery");

function toDom(webObject) {
  $(`#${webObject.code}`).text(webObject.value);
}

function renderWebObjectByCode(code) {
  webObjects.doStuff(code).then(
    webObject => {
      console.log(webObject);
      toDom(webObject);
    },
    webObject => {}
  );
}

module.exports = {
  renderWebObjectByCode
};
