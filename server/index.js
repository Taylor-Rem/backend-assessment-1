const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getCompliments,
  getFortune,
  addCompliment,
  editFortune,

  deleteCompliment,
} = require('./controller');

app.get('/api/compliment', getCompliment);
app.get('/api/fortune', getFortune);
app.get('/api/compliments', getCompliments);
app.post('/api/compliment', addCompliment);
app.delete('/api/compliment/:id', deleteCompliment);
app.put('/api/fortune/:id', editFortune);

app.listen(4000, () => console.log('Server running on 4000'));
