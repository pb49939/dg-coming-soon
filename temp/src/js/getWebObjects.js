const database = require("./firebase.js");

function buildWebObject(val, code) {
  let webObject = new Object();
  webObject.code = code;
  webObject.value = val;
  return webObject;
}

function getWebObjectByCode(code) {
  return new Promise((resolve, reject) => {
    var webOjbectsRef = database.ref(`/webObjects/${code}`);
    webOjbectsRef.on("value", function(snapshot) {
      const webObject = buildWebObject(snapshot.val(), code);
      resolve(webObject);
    });
  });
}

module.exports = {
  doStuff: async code => {
    const webObject = await getWebObjectByCode(code);
    return webObject;
  }
};
