const express = require('express');
const app = express();
const axios = require('axios');
const parser = require('xml2json-light');
const socrataKey = process.env.SOCRATA_KEY
const zillowKey = process.env.ZILLOW_KEY


// socrata API
// median_income
// county
// taxable_year

// get socrata API data by county
app.get('/socrata/:county', async (req, res) => {
    axios.get(`https://data.ftb.ca.gov/resource/5hsv-c2q6.json?county=${req.params.county}&$$app_token=${socrataKey}`)
    .then(function (response) {
        return res.json(response.data)
    })
    .catch(function (error) {
    console.log(error)
    })
})

// zillow api 
// to get into the county name go into 'name'
// to get into median cost of houses go into zindex._@ttribute
// check the console.log if confused 
app.get('/zillow/:county', async (req, res) => {
    axios.get(`http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=${zillowKey}&state=ca&childtype=county`)
    .then((response) =>  {
        let json = parser.xml2json(response.data); 
        // console.log(json.RegionChildren.response.list.region);
        return res.json(json.RegionChildren.response.list.region);
    })
    .catch(function (error) {
    console.log(error)
    })
})





module.exports = app