const https = require("https");

const options = {
  host: 'jsonplaceholder.typicode.com',
  path: '/users',
  method: 'POST',
  headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json; charset=UTF-8'
  	}

};

const requestData = {
    name: 'New User',
    username: 'doedoedoe',
    email: 'doejohn@sample.com',
    address: {
      street: 'North Pole',
      city: 'Murmansk',
      zipcode: '12345-6789',
    },
    phone: '555-1212',
    website: 'doejohn.com',
    company: {
      name: 'John Doe Inc.',
      catchPhrase: 'Welcome to the developer cloud',
      bs: 'cloud scale security'
    }
  };
  
let request = https.request(options,  (res) => {
    //console.log(res)
    if (res.statusCode !== 201) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
    }
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

 request.write(JSON.stringify(requestData));

 request.end()

 request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
  });
  