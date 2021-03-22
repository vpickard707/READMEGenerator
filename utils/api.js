// Require axios
const axios = require("axios");

const api = {
  async getUser(userResponses) {
    try {
      let response = await axios

        // For reference: https://api.github.com/users/vpickard707
        .get(`https://api.github.com/users/${userResponses.username}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

// Must always export module to call in index.js
module.exports = api;
