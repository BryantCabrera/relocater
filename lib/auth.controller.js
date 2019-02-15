exports.google = (req, res) => {
  const io = req.app.get('io');
  const user =  req.user;

  //sends user to front-end
  io.in(req.session.socketId).emit('google', user);
};
