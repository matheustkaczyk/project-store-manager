const express = require('express');
const error = require('./middleware/error');
const PORT = 3000;

const app = express();

app.use(express.json());

app.use(error);

app.use('/products', require('./controllers/root'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => `Listening on port ${PORT}`);
