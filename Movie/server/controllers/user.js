const { User } = require('../schemas/User');

//Register user
exports.registerUser = async (req, res) => {
  //client form 에 입력된 정보로 user 인스턴스 생성
  const user = new User(req.body);
  //user 저장
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    console.log('user 정보 저장');
    return res.status(200).json({
      success: true,
      userInfo,
    });
  });
};

//Login user
exports.loginUser = async (req, res, next) => {
  //요청된 이메일이 있는지 db 에서 확인
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '이메일이 존재하지 않습니다.',
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) return res.status(400).send(err);
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 일치하지 않습니다.',
        });
      }
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 로컬 쿠키에 토큰을 저장한다.
        return res.cookie('x_auth', user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  } catch (error) {
    next(error);
  }
};

//User's Auth Checking
exports.checkAuth = (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    name: req.user.name,
    email: req.user.email,
    posts: req.user.posts.length > 0 ? true : false,
    role: req.user.role,
  });
};

//로그아웃
exports.logoutUser = async (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '' },
    { new: true },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
};

//유저 업데이트
  exports.updateUser = async (req, res) => {
    try {
      //바꿀 패스워드
      const newUser = {
        //하드코딩으로 바꿈
        //프론트에서 바꿀 때는 req.body 에 담아서
        name: req.user.name,
        password: req.user.password,
      };
      const user = await User.findOne({ _id: req.user.id }).then((user) => {
        console.log(user);
        user.name = newUser.name;
        user.password = newUser.password;

        user.markModified('name');
        user.markModified('password');

        user.save((err, userInfo) => {
          if (err) return res.json({ success: false, err });
          console.log('user 정보 업데이트');
          return res.status(200).json({
            success: true,
            userInfo,
          });
        });
      });
    } catch (error) {
      return res.json({ error });
    }
  };

//닉네임 중복 체크
exports.checkName = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  } catch (error) {
    return res.json({ err });
  }
};
