import axios from 'axios';
const URL = `https://api.github.com/users/`;

const getUserActivity = async (username) => {
    try {
      const response = await axios.get(`${URL}${username}/events/public`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      process.exit(1);
    }
  };

  export default getUserActivity;