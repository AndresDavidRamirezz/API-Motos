const express = require('express');
const dbConnection = require('./config/dbConfig');
const motoRoutes = require('./routes/motoRoutes');

// Inicializando la aplicación
const app = express();
app.set('port', process.env.PORT || 3040);

// Middlewares
dbConnection(app);
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
		res.send('Welcome to my first API with MySQL, nodeJS and Express.');
});
app.use('/api/motos', motoRoutes);

// Servidor corriendo
app.listen(app.get('port'), () => {
		console.log('Server running on port', app.get('port'));
});