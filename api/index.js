const express = require("express");
const cors = require("cors");
const sql = require("./db");

require("dotenv").config({ path: ".env.development.local" });
const { API_PORT } = process.env;

const app = express();
app.use(cors());

const router = express.Router();

router.get("/news", (req, res) => {
  sql.query("SELECT * FROM news", function(err, results) {
    if (err) {
      res.status(400);
      res.send("Error fetching news");
    }
    return res.json(results);
  });
});

router.post("/news", (req, res) => {
  const data = req.body;
  sql.query("INSERT INTO news SET ?", data, function(err, results) {
    if (err) {
      res.status(400);
      res.send("Error inserrting news");
    }
    return res.json(results);
  });
});

router.get("/parks", (req, res) => {
  sql.query("SELECT * FROM parks ORDER BY title", function(err, results) {
    if (err) {
      res.status(400);
      res.send("Error fetching parks");
    }
    return res.json(results);
  });
});

app.use("/v1", router);
app.listen(API_PORT, () => console.log(`API running on port ${API_PORT}!`));
