const express = require("express");

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`server is listening on https://localhost:${PORT}`);

  try {
  } catch (error) {
    console.error(error);
  }
});
