//declaration
var express 		= require('express');
var path 			= require('path');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var adminHome 		= require('./controllers/TeacherHome');
var addStd 			= require('./controllers/TeacherStudentReg');
var changePassword 	= require('./controllers/TeacherChangePassword');
var profile			= require('./controllers/TeacherProfile');
var appvStudent 	= require('./controllers/TeacherStudentApproval');
var studentList		= require('./controllers/TeacherStudentDetails');
var addTopic		= require('./controllers/TeacherTopicAdd');



var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use('/login', login);
app.use('/', login);
app.use('/TeacherHome', adminHome);
app.use('/logout', logout);
app.use('/TeacherStudentReg', addStd);
app.use('/TeacherChangePassword',changePassword);
app.use('/TeacherProfile',profile);
app.use('/TeacherStudentApproval',appvStudent);
app.use('/TeacherStudentDetails',studentList);
app.use('/TeacherTopicAdd',addTopic);



//routes
app.get('/', function(req, res){
	res.render('index');
});

//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
	console.log('server started at 3000!');
});
