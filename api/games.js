// api/games.js
const axios = require('axios');

module.exports = async (req, res) => {
  const { query } = req;
  const API_URL = 'api.rawg.io/api/games';

  try {
	const response = await axios.get(API_URL, { params: query });
	res.status(200).json(response.data);
  } catch (error) {
	res.status(500).json({ error: 'Failed to fetch data' });
  }
};