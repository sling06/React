const { User } = require('../schemas/User');

//인증 처리 미들웨어
let auth = (req, res, next) => {
  //클라이언트 쿠키에서 토큰을 가져온다.
  let token = req.cookies.x_auth;
  //토큰 복호화 -> 유저 탐색
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({ isAuth: false, message: '유저 정보가 없습니다.' });

    //진행 중인 라우터에서 req.token, req.user 를 사용할 수 있게 함
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
