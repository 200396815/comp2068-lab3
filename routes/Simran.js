'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    if (req.query)
        var name = "Simran";

    res.render('Simran', { name: name });
});

module.exports = router;
