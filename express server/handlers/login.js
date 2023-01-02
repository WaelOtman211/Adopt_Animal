const db = require("../database/connection");// DB connection object import

async function LogIn(req, res) {
  const user = req.body;
  const result = await db.query(
    "select * from users where username='" + user.username + "'"
  ); // find the specific user in the DB users table and put it in result as object that includes array
  //      (`select * from users where username='${user.username}'`)  second option of the previous line

  if (result.rows.length < 1) res.status(403).send(`<h1> USER NOT FOUND <h1>`);
  else {
    const pass = await db.query(
      "select * from password where userID='" + result.rows[0].id + "'"
    ); // bring the password with the specific user ID per the user

    if (pass.rows[0].password === user.password) {
      //compare password entered with password in table
      res.cookie("LoggerUserID", result.rows[0].id, { maxAge: 600000 }); // to be able to know who loged in and make a change
      res.redirect("/PoliceView");
    } else {
      res.status(403).send(`<h1> Wrong Password <h1>`);
    }
  }
}

module.exports = LogIn;
