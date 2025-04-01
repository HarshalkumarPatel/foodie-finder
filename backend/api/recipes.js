// this code is written by deepseek
const express = require('express');
const cors = require('cors');
const recipesRouter = require('./api/recipes');
const restaurantsRouter = require('./api/restaurants');

const app = express();
app.use(cors());

app.use('/api/recipes', recipesRouter);
app.use('/api/restaurants', restaurantsRouter);

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});