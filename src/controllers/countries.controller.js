const axios = require("axios");
const getToken = require("../models/token");

async function getCountries(req, res) {
  let token = await getToken(); //gets the reloadly authorization token

  try {
    let response = await axios({
      method: "GET",
      url: "https://topups.reloadly.com/countries?page=1&size=1",
      header: {
        Accept: "application/com.reloadly.topups-v1+json",
        Authorization: `Bearer ${token}`,
      },
    });
    let countries = response.data; //the list of countries is extracted from the axios response body
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = getCountries;
