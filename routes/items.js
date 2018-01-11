var express = require('express');
var router = express.Router();
var item = require("../models/item");

// www.xyz.com/students/1
router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    item.getitem(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    item.getAllItems(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post('/', function(req, res, next) {
  item.additem(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
      //or return count for 1 or 0
    }
  });
});

router.delete('/:id', function(req, res, next) {
  item.deleteitem(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
module.exports = router;