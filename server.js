const express = require('express');
const path = require('path');
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(8080, () => {
  console.log('listening on Port 8080');
});
