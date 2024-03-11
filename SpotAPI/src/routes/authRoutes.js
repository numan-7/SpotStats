const express = require('express');
const axios = require('axios');
const router = express.Router();

const { fetchPlaylists, userInformation } = require('../utils/spotifyUtils');

router.get('/user-playerlists', async (req, res) => {
  if (!req.user || !req.user.accessToken) {
    return res.status(401).json({ message: 'User not authenticated' });
  }
  try {
    const data = await fetchPlaylists(req.user.accessToken);
    res.json(data);
  } catch (error) {
    console.error('Error fetching Spotify stats:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/user-info', async (req, res) => {
  if (!req.user || !req.user.accessToken) {
    return res.status(401).json({ message: 'User not authenticated' });
  }
  try {
    const data = await userInformation(req.user.accessToken);
    res.json(data);
  } catch (error) {
    console.error('Error fetching Spotify stats:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/token-validity', (req, res) => {
  if (!req.user || !req.user.accessToken || !req.user.tokenReceivedAt || !req.user.expires_in) {
    return res.status(401).json({ message: 'Authentication token not found or missing information.' });
  }

  const now = new Date();
  const tokenReceivedAt = req.user.tokenReceivedAt;
  const expiresInMilliseconds = req.user.expires_in * 1000; 
  const tokenExpirationTime = tokenReceivedAt + expiresInMilliseconds;

  if (now.getTime() > tokenExpirationTime) {
    res.json({ tokenIsValid: false, message: 'Token has expired.' });
  } else {
    res.json({ tokenIsValid: true, message: 'Token is still valid.' });
  }
});

module.exports = router;
