var request = require('request');

var options = {
    uri: 'http://fusion.qiniuapi.com/v2/tune/refresh',
    multipart: {
        Authorization:'D0kBjb8UpWlNtfKDUwkPkG1m1oIHE6mpnYIa3Yvw',
        "Content-Type": "application/json"
    }
};

// request.post(options.uri, options.multipart,function(error,response,body){
//     console.log(error,response,body)
// })

request({
    method: 'POST',
    preambleCRLF: true,
    postambleCRLF: true,
    uri: options.uri,
    multipart: {
      chunked: false,
      data: [
        {
          'content-type': 'application/json',
          Authorization:'D0kBjb8UpWlNtfKDUwkPkG1m1oIHE6mpnYIa3Yvw',
          body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
        },
        { body: 'I am an attachment' }
      ]
    }
  },
  function (error, response, body) {
    if (error) {
      return console.error('upload failed:', error);
    }
    console.log('Upload successful!  Server responded with:', body);
  })