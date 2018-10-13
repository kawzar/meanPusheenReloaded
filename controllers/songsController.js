const express = require('express');
const router = express.Router();
const songs = require('../models/song');

router.get('/', (req, res) => {
    songs.getAll((err, songList) => {
        if(err){
            res.json({ success: false, message: 'Failed to load all songs. Error: ' + err});
        } else {
            res.write(JSON.stringify({success: true, songs: songList}, null, 2));
            res.end();
        }
    });
});

module.exports = router;