const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')
const data = require('./data/texts.json'); 
app.use(cors())
app.get('/api/text', (req, res) => {
  console.log(data)
  res.json(data);
  
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});