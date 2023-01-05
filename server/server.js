const express = require ('express');
const db = require ('./database/connections');
const app = express();
const cors = require ('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
process.on('uncaughtException', function (err) {
    console.log(err);
}); 
app.listen(4000,() => {console.log("server started on port http://localhost:4000")})


app.post("/SignUp" , async(req, res) =>{   
    const {username, password}=req.body;
    let data=await db.query(`INSERT INTO users (username, password) VALUES ('${username}','${password}') RETURNING * `);

        res.json(data.rows)
        

});  

app.post("/adoptAnimal" , async(req, res) =>{   
    const {animalID,date,userID,photo,animalName,size,status}=req.body;
    console.log(req.body)
    let data=await db.query(`INSERT INTO adopthistory (userID,animalID,animalPhoto,animalName,animalSize,animalStatus,adoptDate) VALUES ('${userID}','${animalID}','${photo}','${animalName}','${size}','${status}','${date}') RETURNING * `);
        res.json(data.rows)
});  


app.post("/setfavorite" , async(req, res) =>{   
    const {animalID,userID,photo,animalName,size,status}=req.body;
    console.log(req.body)
    let data=await db.query(`INSERT INTO myfavorite (userID,animalID,animalPhoto,animalName,animalSize,animalStatus) VALUES ('${userID}','${animalID}','${photo}','${animalName}','${size}','${status}') RETURNING * `);
        res.json(data.rows)
});  


app.get('/LogIn', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    
    db.query(
        'SELECT * FROM users WHERE username = $1 AND password = $2',



        
        'SELECT * FROM users WHERE username = $ AND password = $',

        [username, password],
        (err, result) =>{
           if (err){
            res.send({err: err});
           }
           if(result){
            res.send(result);
           }
           else{
            res.send({message: "wrong username/password"});
           }
        }
    );   
});



