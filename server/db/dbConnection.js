import Sequelize from 'sequelize';
if (!process.env) { require('dotenv').config(); }

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  },
  logging: false
});
