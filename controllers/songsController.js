const express = require('express');
const router = express.Router();
const songs = require('../models/song');
const passport = require('passport');
const song = require('../models/song');

router.get('/', (req, res) => {
    songs.getAll((err, songList) => {
        if(err){
            res.json({ success: false, message: 'Failed to load all songs. Error: ' + err});
        } else {
            res.write(JSON.stringify(songList), null, 2);
            res.end();
        }
    });
});

router.get('/:id', (req, res) => {
    const id = req.params['id'];
    songs.getById(id, (err, song) => {
        if(err){
            res.json({ success: false, message: 'Failed to load song. Error: ' + err});
        } else {
            res.write(JSON.stringify(song, null, 2));
            res.end();
        }
    });
});

router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    console.log(token);
    if (token) {
      var newSong = new song({
        order: req.body.order,
        title: req.body.title,
        lyrics: req.body.lyrics,
        credits: req.body.credits
      });
  
      newSong.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Save songs failed.'});
        }
        res.json({success: true, msg: 'Successful created new song.'});
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  router.put('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      const id = req.params['id'];
      songs.findByIdAndUpdate(
        id,
        req.body,
        {new: true},
        (err, song) => {
        if (err) {
          return res.json({success: false, msg: 'Save songs failed.'});
        }
        res.json({success: true, msg: 'Successful created new song.'})}
      )
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  router.delete('/:id', (req, res) => {
    const id = req.params['id'];
    var token = getToken(req.headers);
    if (token) {
    songs.findByIdAndDelete(id, (err, song)=> {
      if(err){
        res.json({ success: false, message: 'Failed to delete song. Error: ' + err});
      } else {
        res.write(JSON.stringify({success: true, songId: id}, null, 2));
        res.end();
    }
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

module.exports = router;