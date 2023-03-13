import express from 'express';
import mysql from 'mysql';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

const connection = mysql.createConnection({
    host: '192.168.15.63',
    user: 'root',
    password: '123456',
    database: 'mydbprojeto'
  });

connection.connect((error) => {
  if (error) throw error;
  console.log('Connected!');
});

app.get('/pessoas/:id', (req, res) => {
connection.query('SELECT * FROM pessoas WHERE idpessoas =' + req.params.id + ';', (error, resultado, fields) => {
  if(error) {return res.status(500).send({ error: error })}
  return res.status(200).send({response: resultado})
});
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
