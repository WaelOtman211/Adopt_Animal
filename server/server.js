const express = require("express");
const db = require("./database/connections");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
process.on("uncaughtException", function (err) {
  console.log(err);
});

app.listen(4000, () => {
  console.log("server started on port http://localhost:4000");
});

app.post("/adoptAnimal", async (req, res) => {
  const { animalID, date, userID, photo, animalName, size, status } = req.body;
  console.log(req.body);
  let data = await db.query(
    `INSERT INTO adopthistory (userID,animalID,animalPhoto,animalName,animalSize,animalStatus,adoptDate) VALUES ('${userID}','${animalID}','${photo}','${animalName}','${size}','${status}','${date}') RETURNING * `
  );
  res.json(data.rows);
});

app.post("/setfavorite", async (req, res) => {
  const { animalID, userid, photo, animalName, size, status } = req.body;

  let data = await db.query(
    `INSERT INTO myfavorite (userid,animalID,animalPhoto,animalName,animalSize,animalStatus) VALUES ('${userid}','${animalID}','${photo}','${animalName}','${size}','${status}') RETURNING * `
  );
 
  res.json(data.rows);
});

app.post("/delfavorite", async (req, res) => {
    const { ID } = req.body;
    console.log(ID);
        let data = await db.query(
      `delete from myfavorite where id=${ID} RETURNING * `
    );
    
    res.json(data.rows);
  });

app.get("/getHistory", async (req, res) => {
    let data = await db.query(
      `select * from adopthistory `
    );
    res.json(data.rows);
  });

  app.get("/getFavorite", async (req, res) => {
    let data = await db.query(
      `select * from myfavorite `
    );
    res.json(data.rows);
  });

const saltRounds = 10;
app.post("/SignUp", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, saltRounds);
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  let user = await db.query(
    `SELECT * FROM users WHERE username='${username}'`
  );
  if(user.rows.length==0){
  let data = await db.query(
    `INSERT INTO users (username, password) VALUES ($1,$2) RETURNING * `,
    [username, hash]
  );
  res.json(data.rows);
  }else{
    res.json({ message: "username already exist" });
  }
});

app.post("/LogIn", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
   console.log(username)
  db.query(
    `SELECT * FROM users WHERE username = $1`,
    [username],
    async (err, result) => {
      if (err) {
        return res.json({ err: err });
      } else if (result) {
        console.log(result);
        if(result.rows.length>0){
            let compare = await bcrypt.compare(password, result.rows[0].password);
            console.log(compare);
            if (compare) {
            return res.json(result.rows[0]);
            } else {
            res.json({ message: "wrong username/password" });
            }

        }else{
            res.json({ message: "username doesn't exist please sign up" });
        }
      }
    }
  );
});
