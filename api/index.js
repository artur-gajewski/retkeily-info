const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sql = require("./db");

require("dotenv").config({ path: ".env.development.local" });
//const { API_PORT } = process.env;
const API_PORT = 3001;

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const router = express.Router();

router.post("/accounts", (req, res) => {
  const data = req.body;
  sql.query(
    "SELECT * FROM accounts WHERE external_id = ?",
    data.external_id,
    function(err, results) {
      if (results.length === 0) {
        sql.query("INSERT INTO accounts SET ?", data, function(err, results) {
          if (err) {
            res.status(400);
            res.send("Error inserting account: " + err.message);
          }
          return res.json(results);
        });
      }
    }
  );
});

router.get("/news", (req, res) => {
  sql.query(
    "SELECT a.name as author, a.picture_url, p.title as park, n.trail, n.area, n.content, n.created_at FROM accounts a, news n, parks p WHERE a.external_id = n.author and p.slug = n.park ORDER BY created_at DESC",
    function(err, results) {
      if (err) {
        res.status(400);
        res.send("Error fetching news: " + err.message);
      }
      return res.json(results);
    }
  );
});

router.post("/news", (req, res) => {
  const data = req.body;
  sql.query("INSERT INTO news SET ?", data, function(err, results) {
    if (err) {
      res.status(400);
      res.send("Error inserting news: " + err.message);
    }
    return res.json(results);
  });
});

router.get("/parks", (req, res) => {
  sql.query(
    'SELECT slug as "value", title as "label" FROM parks ORDER BY title',
    function(err, results) {
      if (err) {
        res.status(400);
        res.send("Error fetching parks");
      }
      return res.json(results);
    }
  );
});

app.use("/", router);
app.listen(API_PORT, () => console.log(`API running on port ${API_PORT}!`));
