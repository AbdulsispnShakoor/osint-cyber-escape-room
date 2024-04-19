// const cred = require('./password.json') 
// console.log(cred)

let cred = fetch('./password.json')
.then((response) => response.json())
.then((json) => localStorage.setItem("json-data", JSON.stringify(json)) );

