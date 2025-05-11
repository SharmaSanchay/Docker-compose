const mysql = require('mysql2');
const express = require('express');

const app = express();
const port = 3000;

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'admin123',
  database: 'testdb'
};

const connectWithRetry = () => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) {
      console.error('Database connection failed. Retrying in 5 seconds...', err.code);
      setTimeout(connectWithRetry, 5000); // Retry every 5 seconds
    } else {
      console.log('Connected to MySQL DB');

      app.get('/', (req, res) => {
        connection.query('SELECT * from admin', (err, results) => {
          if (err) return res.status(500).json({ error: err });
          console.table(results);
          return res.send(results);
        });
      });

      app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`);
      });
    }
  });
};

connectWithRetry();
