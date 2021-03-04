const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/users";
const getPlaceholder = async () => {
  let data = await fetch(url);
  return await data.json();
};

module.exports = getPlaceholder;
