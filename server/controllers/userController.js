const mongoose = require('mongoose');
const User = mongoose.model("User");
const sha256 = require('js-sha256');
const jwt = require('jwt-then');

exports.register = async(req, res) => {
    const {name, email, password} = req.body;
    const emailRegex = /[@gmail.com|@yahoo.com|@hotmail.com|@live.com]/;
    if(!emailRegex.test(email))
        throw "Email không được hỗ trợ cho miền của bạn.";
    if(password.length < 8)
        throw "Mật khẩu phải dài ít nhất 8 kí tự.";
    
    const userExists = await User.findOne({
        email, 
    });
    if (userExists)
        throw "Địa chỉ email đã tồn tại.";

    const user = new User({
        name, 
        email, 
        password: sha256(password + process.env.SALT)
    });
    await user.save();
    res.json({
        message: "Đăng ký thành công."
    })
};

exports.login = async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({
        email, 
        password: sha256(password + process.env.SALT)
    });
    if(!user)
        throw "Sai email hoặc mật khẩu.";
    
    const token = jwt.sign({id: user.id}, process.env.SECRET);
    res.json({
        message: "Đăng nhập thành công.",
        token
    })
};