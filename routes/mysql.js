var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var dbConfig = require('../config/DBConfig');
var connection = mysql.createConnection(dbConfig.mysql);
connection.connect();

/*console.log(connection)
 
connection.query('select * from user',function(error,results,fields){
	if (error) throw error;
  console.log('The solution is: ', results);
})*/

module.exports = router