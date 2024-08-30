import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/data', (req, res) => {
  res.json({
    name: 'Hari',
    age: 12,
    address: 'Pokhara',
    email: 'hari45@gmail.com'
  });
});

app.listen(8000, () => {
  console.log(`Server running at http://localhost:8000`);
});
