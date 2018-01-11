var db = require('../db');
var tableName = "dataService";
var id = "uid";

var item = {
  getAllItems : function(callback) {
    return db.query("SELECT * from " + tableName, callback);
  },
  getItem : function(id, callback) {
    return db.query("SELECT * from " + tableName + " where " + id + "=?", [id], callback);
  },
  addItem : function(Item, callback) {
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
  updateItem : function(Item, callback) {
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
  deleteItem : function(id, callback) {
    return db.query("DELETE from " + tableName + " where " + id + "=?", [id], callback);
  }
};
module.exports = item;
