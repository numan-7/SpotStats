const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/auth/spotify', passport.authenticate('spotify', { 
  scope: [
    'user-read-email', 
    'user-read-private',
    'playlist-read-private',
    'playlist-read-collaborative'
  ], 
  showDialog: true 
}));

router.get('/auth/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/login' }), function(req, res) {
  res.redirect('http://localhost:5173');
});

module.exports = router;
