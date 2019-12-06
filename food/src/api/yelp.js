import axios from 'axios';
import config from 'config.js';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: config.YelpAPIKey
  }
});
