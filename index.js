const crypto = require('crypto');
const utils = require('util');

const awaitableRandomBytes = utils.promisify(crypto.randomBytes);

async function hexID(numberOfBytes = 16) {
  const buffer = await awaitableRandomBytes(numberOfBytes);
  
  return buffer.toString('hex');
}

(async () => console.log(await hexID(32)))()


module.exports = hexID;
