/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { dbConnection } from './connection.js';

const searchProducts = () => dbConnection.query('SELECT name FROM products;');

export default searchProducts;
