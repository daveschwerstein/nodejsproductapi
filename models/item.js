var db = require('../db');
var tableName = "dataService";
var id = "uid";

var item = {
  getAllProduct : function(callback) {
    return db.query("SELECT * from " + tableName, callback);
  },
  getProduct : function(id, callback) {
    return db.query("SELECT * from " + tableName + " where " + id + "=?", [id], callback);
  },
  addProduct : function(Item, callback) {
    return db.query("INSERT into " + tableName + " values(?,?,?,?,?,?)",
      [
        Item.uid,
        Item.item_name,
        Item.item_amount,
        Item.item_type,
        Item.transaction_location,
        Item.transaction_date,
      ],
      callback);
  },
  updateProduct : function(Item, callback) {
    return db.query("UPDATE " + tableName + " SET values(?,?,?,?,?,?)",
      [
        Item.uid,
        Item.item_name,
        Item.item_amount,
        Item.item_type,
        Item.transaction_location,
        Item.transaction_date,
      ],
      callback);
  },
  deleteProduct : function(id, callback) {
    return db.query("DELETE from " + tableName + " where " + id + "=?", [id], callback);
  }
};
module.exports = item;