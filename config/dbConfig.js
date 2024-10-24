const mysql = require('mysql2');
const myconn = require('express-myconnection');

const dbOptions = {
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: 'proyectofinal2024',
		database: 'motos'
};

const dbConnection = (app) => {
		app.use(myconn(mysql, dbOptions, 'single'));
};

module.exports = dbConnection;