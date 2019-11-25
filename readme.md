# hexid

Generates a random hex string of n bytes in Node.js.

## Usage

- Defaults to 16 bytes
- Asynchronous. Returns a Promise

```
const hexid = require('hexid');

const hex = await hexid(); // dc56f142fb58017ad74504b11df02416
const hex2 = await hexid(32);
```