const crypto = require('crypto');
const utils = require('utils');

const awaitableRandomBytes = utils.promisify(crypto.randomBytes);

async function hexID(numberOfBytes = 16) {
  const buffer = await awaitableRandomBytes(numberOfBytes);
  
  return buffer.toString('hex');
}

module.exports = hexID;
