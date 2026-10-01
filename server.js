const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'diosnel.html'));
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('CORRIENDO http://localhost:3000/diosnel.html');
  });
}