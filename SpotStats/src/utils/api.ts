import axios from 'axios';

export const checkTokenValidity = async () => {
  try {
    const response = await axios.get('/api/token-validity', { withCredentials: true });
    return response.data.tokenIsValid;
  } catch (error) {
    return false;
  }
};