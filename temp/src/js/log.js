const database = require("./firebase.js");
const utility = require("./utility.js");

function logUser() {
  let userHash;
  if (userHashExists()) {
    userHash = window.localStorage.getItem("USER_HASH");
  } else {
    userHash = createUserHash();
    setUserHashLocalStorage(userHash);
  }

  database.ref("users/" + userHash).set({
    lastVisit: utility.getCurrentMonthDayTime()
  });
}

function createUserHash() {
  return utility.makeId(15);
}

function setUserHashLocalStorage(userHash) {
  window.localStorage.setItem("USER_HASH", userHash);
}

function userHashExists() {
  if (window.localStorage.getItem("USER_HASH") != null) {
    console.log("user has been here");
    return true;
  } else {
    console.log("user is new");
    return false;
  }
}

module.exports = {
  logUser
};
