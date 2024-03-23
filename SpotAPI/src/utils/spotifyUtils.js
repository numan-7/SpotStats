const axios = require('axios');

const fetchPlaylists = async (accessToken) => {
  const endpoint = `https://api.spotify.com/v1/me/playlists`;
  try {
    const response = await axios.get(endpoint, {
      headers: { 
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching Spotify stats with Axios:', error);
    throw new Error('Failed to fetch Spotify stats'); 
  }
};

const userInformation = async (accessToken) => {
  const endpoint = `https://api.spotify.com/v1/me/`;
  try {
    const response = await axios.get(endpoint, {
      headers: { 
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching Spotify stats with Axios:', error);
    throw new Error('Failed to fetch Spotify stats'); 
  }
};

const fetchArtists = async (accessToken) => {
  const endpoint = `https://api.spotify.com/v1/me/top/artists?limit=10`;
  try {
    const response = await axios.get(endpoint, {
      headers: { 
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching Spotify stats with Axios:', error);
    throw new Error('Failed to fetch Spotify stats'); 
  }
};

module.exports = { fetchPlaylists, fetchArtists, userInformation };
