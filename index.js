const express = require('express');

const PORT = 3000;
const error = require('./middleware/error');

const app = express();

app.use(express.json());

app.use(error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', require('./controllers/productsRoot'));
app.use('/sales', require('./controllers/salesRoot'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
