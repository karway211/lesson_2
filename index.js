const cowsay = require('cowsay');
const request = require('request');

const params = {
  url: 'http://helloacm.com/api/fortune',
  method: 'GET'
}

const callback = (error, response, body) => {
  if (!error) {
    if (response.statusCode === 200) {
      console.log(cowsay.say({
        text: body,
        e: 'oO',
        T: "U "
      }))
    }
  } else {
    console.log('Network error:', error);
  }
}

request(params, callback);
