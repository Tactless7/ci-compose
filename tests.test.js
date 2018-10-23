const axios = require('axios');

test('go to root page', async () => {
  let res = await axios.get('http://localhost:3000');
  expect(res.data).toEqual('Hello copain');
});
