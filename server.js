// env 연결하기
require('dotenv').config();

// express 라이브러리 사용하기
const express = require('express');
const app = express();

// router 사용
app.use('/login', require('./routes/login'))
app.use('/register', require('./routes/register'))
app.use('/blog', require('./routes/blog'))
app.use('/chat', require('./routes/chat'))

// mysql 사용하기
const mysql = require('mysql2');

// db 연결하기
const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

db.connect((err)=>{
    if(err){
        console.log('데이터베이스 연결 실패 : ', err.stack);
        return;
    } else {
        console.log('데이터베이스 연결 성공')
    }
})

// 서버 띄우기
app.listen(process.env.PORT, ()=>{
    console.log("http://localhost:8080")
})

app.get('/', (req, res)=>{
    db.query('select * from register', (error, result, field)=>{
        if(error){
            console.log(error)
        } console.log ('result : ', result[0].userId)
    });
    res.send('hello');
})

