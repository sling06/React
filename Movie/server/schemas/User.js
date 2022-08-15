const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 30,
      required: true,
    },
    email: {
      type: String,
      maxlength: 100,
      trim: true,
      required: true,
      unique: 1,
    },
    password: {
      type: String,
      required: true,
      minlength: [5, '비밀번호는 5자리 이상이어야 합니다.'],
    },
    genre: {
      type: String,
      maxlength: 100,
    },
    role: {
      type: Number,
      //0 은 일반유저
      default: 0,
    },
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },
    //저장한 Post
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  },
  {
    //createdAt, updateAt
    timestamps: true,
  }
);

//save 메소드가 실행되기 전 실행됨
userSchema.pre('save', function (next) {
  //function 안에서의 this 는 동적으로 들어오는 객체를 가리킨다.
  let user = this;
  //비밀번호가 바뀔 때만 다시 암호화
  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        // Store hash in your password DB.
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

//비밀번호 비교
userSchema.methods.comparePassword = function (plainPassword, cb) {
  //this.password 는 bcrypt 로 암호화된 비밀번호
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

//토큰 생성
//synchronous 해야됨
userSchema.methods.generateToken = function (cb) {
  let user = this;
  //토큰 생성 ( myToken )
  const token = jwt.sign(user._id.toJSON(), 'myToken');
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

//인스턴스 안 만들고 바로 사용하기 위해 statics 사용, jsonwebtoken 사용
userSchema.statics.findByToken = function (token, cb) {
  let user = this;
  //토큰을 복호화
  jwt.verify(token, 'myToken', function (err, decoded) {
    errMessage = err;
    user.findOne(
      {
        _id: decoded,
        token: token,
      },
      function (errMessage, user) {
        if (errMessage) return cb(errMessage);
        cb(errMessage, user);
      }
    );
  });
};

const User = mongoose.model('User', userSchema);

// 객체로 exports
module.exports = { User };
