var express = require('express');
var router = express.Router();
var item = require("../models/item");

// www.xyz.com/students/1
router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    item.getItem(req.params.id, function(err, rows) {
      if (err) throw err;
      res.json(rows);
    });
  } else {
    item.getAllItems(function(err, rows) {
      if (err) throw err;
      res.json(rows);
    });
  }
});

router.post('/:id?', function(req, res, next) {
  if (req.params.id) {
    item.updateItem(req.body[0], function(err, count) {
      if (err) throw err;
      res.json(req.body[0]);
    });
  } else {
    item.addItem(req.body[0], function(err, count) {
      if (err) throw err;
      res.json(req.body[0]);
    });
  }
});

router.delete('/:id', function(req, res, next) {
  item.deleteItem(req.params.id, function(err, count) {
    if (err) throw err;
    res.json(count);
  });
});
module.exports = router;
