// 라우팅 변수 만들기
const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('회원가입 페이지')
})

module.exports = router;