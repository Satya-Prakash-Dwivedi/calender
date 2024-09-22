const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
    host: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // This skips SSL certificate verification for development
      }
    }
  });
  

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Error connecting to the database:', err));

module.exports = sequelize;
