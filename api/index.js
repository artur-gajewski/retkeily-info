const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: ".env.development.local" });
const { API_PORT } = process.env;

const app = express();
app.use(cors());

const router = express.Router();

router.get("/news", (req, res) =>
  res.json([
    {
      id: 1,
      created_at: "created_at_1",
      author: "first_name_1 last_name_1",
      avatar: "",
      email: "email@email_1.com",
      park: "Nuuksio",
      trail: "Kuikan kierroe",
      area: "Iso-holman leirintäalue",
      content: "Diipa daapa lorem ipsum ja niin edelleen nönnönnöö 1!"
    },
    {
      id: 2,
      created_at: "created_at_2",
      author: "first_name_2 last_name_2",
      avatar: "",
      email: "email@email_2.com",
      park: "Räyskälä",
      trail: null,
      area: "Lepakkolaavu",
      content: "Diipa daapa lorem ipsum ja niin edelleen nönnönnöö 2!"
    }
  ])
);

app.use("/v1", router);
app.listen(API_PORT, () => console.log(`API running on port ${API_PORT}!`));
