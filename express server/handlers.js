const db = require("./database/connection");// DB connection object import

const login = require('./handlers/login.js');




async function LogIn(req,res) {
    await login(req,res)
//     const user=req.body;
//   const result= await db.query("select * from users where username='"+user.username+"'")// find the specific user in the DB users table and put it in result as object that includes array
//     //      (`select * from users where username='${user.username}'`)  second option of the previous line
    
//     if (result.rows.length<1)
//     res.status (403).send(`<h1> USER NOT FOUND <h1>`)

//     else {

//         const pass= await db.query("select * from password where userID='"+result.rows[0].id+"'")// bring the password with the specific user ID per the user
        
      


//         if (pass.rows[0].password===user.password){ //compare password entered with password in table 
//             res.cookie("LoggerUserID",result.rows[0].id,{maxAge:600000}); // to be able to know who loged in and make a change 
//             res.redirect("/PoliceView")
//          }
    
//         else {res.status (403).send(`<h1> Wrong Password <h1>`)}

//     }
  
}

//-------------------------------------------------------------------------------------------------------
//----------------------case creat form------------------------------------



async function police_form_view(req,res){
    const ResultsItemDetails= await db.query(`select * from crime where id = ${req.params.crimeID}`) // use crime ID send in the URL and pull the relevant details from the DB per this ID
    const CaseItemDetails = ResultsItemDetails.rows[0];
    const ResultsWitnessInput= await db.query(`select description from witness where crimeID = ${req.params.crimeID}`) // use crime ID send in the URL and pull the relevant details from the DB per this ID
    const WitnessInputs = ResultsWitnessInput.rows.map(x=>x.description).join("\r\n ******************************************************\r\n"); // border between details and witness text
    res.status(200).send(
        Police_form_template("view",CaseItemDetails,WitnessInputs)// returns the html in Edit mode with the text "view" in the type 
        

    )
} 

module.exports= {}; //export function