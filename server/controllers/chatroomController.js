const mongoose = require("mongoose");
const Chatroom = mongoose.model("Chatroom");

exports.createChatroom = async (req, res) => {
  const { name } = req.body;
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) 
    throw "Tên chỉ chứa chữ";

  const chatroomExists = await Chatroom.findOne({ name });
  if (chatroomExists) 
    throw "Tên đã tồn tại";

  const chatroom = new Chatroom({
    name
  });
  await chatroom.save();
  res.json({
    message: "Phòng chat đã được tạo"
  });
};