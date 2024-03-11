import axios from 'axios';

export const checkTokenValidity = async () => {
  try {
    const response = await axios.get('http://localhost:8888/api/token-validity', { withCredentials: true });
    return response.data.tokenIsValid;
  } catch (error) {
    console.error('Error checking token validity', error);
    return false;
  }
};