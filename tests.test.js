const axios = require('axios');

test('go to root page', async () => {
  let res = await axios.get('http://ci-compose:3030');
  expect(res.data).toEqual('Hello copain');
});
