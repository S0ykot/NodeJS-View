var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  if(req.cookies['username']!=null)
  {
    console.log('Student Add requested!');
    res.render('TeacherStudentReg');
  }else{
    res.redirect('/logout');
  }
});

module.exports = router;