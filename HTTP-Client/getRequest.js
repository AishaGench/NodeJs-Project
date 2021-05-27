/*  --- Get Request---
const http = require('http')

const options = {
    method: 'GET'
  };

let request = https.get('https://jsonplaceholder.typicode.com/users?_limit=2',options, (res) => { 
    if (res.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
      }
    let data = '';

  res.on('data', (chunk) => {
    data += chunk;
    console.log(chunk.toString());
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });

    
});
request.end();

request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
  });
*/
// --------- Get Requests - Second Way --------------


const https = require("https");

const options = {
  method: 'GET',
  host: 'jsonplaceholder.typicode.com',
  path: '/users?_limit=2',
  headers: {
    'Accept': 'application/json'
  }
};

let request = https.request(options,  (res) => {
    //console.log(res)
    if (res.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
    };
      let data = '';

      res.on("data", (chunk) => {
        data += chunk;
        // console.log(chunk.toString())
      });
      
      res.on('close', () => {
        console.log('Retrieved all data');
        console.log(JSON.parse(data));
      });
    
 });

 request.end()

 request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
  });
  
  