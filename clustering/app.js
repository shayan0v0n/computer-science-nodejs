import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.get('/heavy', (req, res) => {
  let total = 0;
  for (let i = 0; i < 20_000_000_000; i++) {
    total++
  }

  res.send(`the result of the cpu intensive task is ${total} \n`)
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
  console.log(`process id: ${process.pid}`)
});