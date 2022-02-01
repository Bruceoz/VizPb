// List of requirements
const { response } = require('express');
var express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));


app.post('/jobs', (request, response) => {
    //console.log(request.body);
    const data = request.body;
    let startTime = data.timeNow;
   // console.log(startTime);
    //Request to Jobstream api
    const api_key = process.env.API_KEY;
    //console.log(api_key)
    const url = 'https://jobstream.api.jobtechdev.se/stream?date='+startTime+'';
    
    async function getJobstream(url = '', api_key = '') {
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'accept': 'application/json',
        'api-key': api_key
        }
    });
    return response.json();
  }
  let jobRegion = [];
  let jobOccField = [];
  let occupationLabel = [];
  getJobstream(url, api_key)
  .then(data => {
    var count = data.length;
    //console.log(data);
    //console.log(data[2].occupation_field.label ,'\n',data[2].workplace_address.municipality); // JSON data parsed by `data.json()` call
    for(var i = 0; i < data.length; i ++) {
      if (!data[i].removed && data[i].workplace_address.region) {
      //console.log(data[i].occupation_field.label,'\n',data[i].workplace_address.region, '\n' ,data[i].removed);
      jobOccField.push(data[i].occupation_field.legacy_ams_taxonomy_id)
      jobRegion.push(data[i].workplace_address.region_code);
      occupationLabel.push(data[i].occupation.label);
      
      
      } 
      
      

    };
    //console.log(jobRegion,'\n',jobOccField);
    //return jobRegion,jobOccField;

        response.json({
        status: 'success',
        jobRegion: jobRegion,
        jobOccField: jobOccField,
        occupationLabel:occupationLabel

    });
      
  });

 
  });