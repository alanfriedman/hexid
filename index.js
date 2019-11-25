const crypto = require('crypto')

function hexID(numberOfBytes = 16) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(numberOfBytes, function(err, buffer) {
      if (err) {
        reject(err);
        return;
      }
      resolve(buffer.toString('hex'))
    });
  });
}

module.exports = hexID;