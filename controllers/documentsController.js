const express = require('express');
const router = express.Router();
const documents = require('../models/song');

router.get('/', (req, res) => {
    documents.getAll((err, documentList) => {
        if(err){
            res.json({ success: false, message: 'Failed to load all documents. Error: ' + err});
        } else {
            res.write(JSON.stringify({success: true, documents: documentList}, null, 2));
            res.end();
        }
    });
});

router.get('/:id', (req, res) => {
    const id = req.params['id'];
    documents.getById(id, (err, document) => {
        if(err){
            res.json({ success: false, message: 'Failed to load document. Error: ' + err});
        } else {
            res.write(JSON.stringify({success: true, document: document}, null, 2));
            res.end();
        }
    });
});

module.exports = router;