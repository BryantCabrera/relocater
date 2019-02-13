exports.google = (req, res) => {
  const io = req.app.get('io')
  // console.log(req.user.emails, ' this is req.user from exports.google');
  const user = { 
    name: req.user.displayName,
    photo: req.user.photos[0].value.replace(/sz=50/gi, 'sz=250'),
    email: req.user.emails[0].value,
    id: req.user.id
  }
  console.log(user, ' this is user from exports.google');
  io.in(req.session.socketId).emit('google', user)
}
