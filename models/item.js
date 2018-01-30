var db = require('../db');
var tableName = "dataService";
var tableId = "uid";

var item = {
  getAllItems : function(callback) {
    return db.query("SELECT * from " + tableName, callback);
  },
  getItem : function(id, callback) {
    return db.query("SELECT * from " + tableName + " where uid=?", [id], callback);
  },
  addItem : function(Item, callback) {
    let uid = Math.random() * 99999999;
    return db.query(`INSERT INTO ${tableName} values(?,?,?,?,?,?,?)`,
      [
        uid,
        Item.item_name,
        Item.item_amount,
        Item.item_type,
        Item.transaction_location,
        Item.transaction_date,
        Item.transaction_description
      ],
      callback);
  },
  updateItem : function(Item, callback) {
    return db.query("UPDATE `" +
      tableName + "` SET `uid`=" +
      Item.uid + ",`item_name`='" +
      Item.item_name + "',`item_amount`='" +
      Item.item_amount + "',`item_type`='" +
      Item.item_type + "',`transaction_location`='" +
      Item.transaction_location + "',`transaction_date`='" +
      Item.transaction_description + "',`transaction_description`='" +
      Item.transaction_date + "' WHERE `uid`=" + Item.uid, callback);
  },
  deleteItem : function(id, callback) {
    return db.query("DELETE from " + tableName + " where uid=?", [id], callback);
  }
};
module.exports = item;
