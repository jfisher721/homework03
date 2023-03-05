// This helped me understand what fetch and async were doing,
// and how to test them.
// https://dmitripavlutin.com/javascript-fetch-async-await/
// https://jestjs.io/docs/asynchronous

const queryNetwork = require('../src/queryNetwork');
const fetch = require('../dependencies/fetch');

// Mock fetch.js
jest.mock('../dependencies/fetch');

describe('queryNetwork', () => {

  // Test that fetch is invoked
  test('Fetch is invoked', async() => {
    let url = 'http://example.com';
    let json = jest.fn(() => Promise.resolve({})); // Mock function that returns a resolved promise with an empty object
    let response = {json}; // An object with the property json

    fetch.mockResolvedValue(response); // Set fetch's resolved value to response
    await queryNetwork(url);

    expect(fetch).toHaveBeenCalledWith(url);
  })

  // Test that the returned promise resolves into the object
  // your mock is using for the json() method
  test('Promise resolves to object used for json', async () => {
    let url = 'http://example.com';
    let data = {key: 'value'}; // Mock json will resolve with this
    let json = jest.fn(() => Promise.resolve(data)); // Returns new function that resolves to data
    let response = {json}; // Key = mock json
    
    fetch.mockResolvedValue(response); // return response

    let result = await queryNetwork(url);

    expect(result).toEqual(data);
  });
});
