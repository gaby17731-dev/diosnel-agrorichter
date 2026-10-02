const express = require('express');
const path = require('path');
const app = express();

// Esto sirve fotos, logo y html
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'diosnel.html'));
});

// Para Vercel
module.exports = app;

// Para probar local con node server.js
if (require.main === module) {
  app.listen(3000, () => console.log('http://localhost:3000'));
}