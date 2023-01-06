const express = require("express");
const db = require("./database/connections");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log("server started on port http://localhost:4000");
});

const saltRounds = 10;
app.post("/SignUp", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, saltRounds);
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  let data = await db.query(
    `INSERT INTO users (username, password) VALUES ($1,$2) RETURNING * `,
    [username, hash]
  );
  res.json(data.rows);
});

app.post("/LogIn", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    `SELECT * FROM users WHERE username = $1`,
    [username],
    async (err, result) => {
      if (err) {
        return res.json({ err: err });
      } else if (result) {
        //console.log(result);
        let compare = await bcrypt.compare(password, result.rows[0].password);
        console.log(compare);
        if (compare) {
          return res.json(result.rows[0]);
        } else {
          res.json({ message: "wrong username/password" });
        }
      }
    }
  );
});
