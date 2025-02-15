const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

const startApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startApp();
