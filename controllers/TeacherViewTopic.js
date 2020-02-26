var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  if(req.cookies['username']!=null)
  {
    console.log('Teacher profile requested!');
    res.render('TeacherViewTopic');
  }else{
    res.redirect('/logout');
  }
});

module.exports = router;