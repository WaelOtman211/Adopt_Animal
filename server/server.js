const express = require ('express');
const db = require ('./database/connections');
const app = express();
const cors = require ('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(4000,() => {console.log("server started on port http://localhost:4000")})


app.post("/SignUp" , async(req, res) =>{   
    const {username, password}=req.body;
    let data=await db.query(`INSERT INTO users (username, password) VALUES ($1,$2) RETURNING * `,[username, password]);
        res.json(data.rows)
        

});  

    

app.get('/LogIn', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    
    db.query(
        'SELECT * FROM users WHERE username = $1 AND password = $2',
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



