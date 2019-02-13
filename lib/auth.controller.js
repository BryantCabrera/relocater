exports.google = (req, res) => {
  const io = req.app.get('io')
  // console.log(req.user, ' this is req.user from exports.google');
  const user = { 
    name: req.user.username,
    //added _id to have it match express sign-in
    _id: req.user._id,
    isNew: req.user.isNew
  }

  // console.log(user, ' this is user from exports.google');
  //sending user to front-end
  io.in(req.session.socketId).emit('google', user)
}
