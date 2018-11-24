var express=require('express');

var mysql=require('mysql')

var app=express()


app.use(function (req, res, next) {
	console.log('这个肯定会进来');

	// 处理跨域  这个是允许的请求的地址的源
  	res.set('Access-Control-Allow-Origin', '*');

  	res.set("Access-Control-Allow-Headers", "content-type");
	next();
})

//登录
app.post('/login', function (req, res) {

	var body = '';

	var client = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'vue'
	})

	req.on('data', function(chunk) {
		body += chunk;
	})

	req.on('end', function() {
		body = JSON.parse(body);

        var phone = body.phone;
        var email=body.email;
		var password = body.password;
		console.log(phone, password);

		// 数据库一个链接
		client.connect();
		var sql = `select * from users where phone='${phone}' and password='${password}'`;
		client.query(sql, function(err, results, fields) {
			if (err) {
				console.log(err);
				res.send({ code: -1, msg: '登录失败' });
			} else {
				if (results.length > 0) {
					res.send({ code: 0, msg: '登录成功' });
					console.log(results);
				} else {
					res.send({ code: -2, msg: '用户名或密码错误' });
				}
			}
		})

		client.end();
	})


})

//注册
app.post('/register',function(req,res){

	var body = '';

	var client = mysql.createConnection({
		host: 'localhost',
		user     : 'root',
		password : '',
		database : 'vue'
	})

	req.on('data', function(chunk) {
		body += chunk;
	})

	req.on('end', function() {
		body = JSON.parse(body);

        var phone = body.phone;
		var password = body.password;
		console.log(phone, password);

		// 数据库一个链接
		client.connect();
		var sql = `select * from users where phone='${phone}'`;
		console.log('kkk'+sql);
		client.query(sql, function(err, results) {
			if (err) {
				console.log(err);
				res.send({ code: -1, msg: '查询失败' });
			} else {
				// console.log(results);
				if (results.length <= 0) {
					var sql1 = `insert into users(phone,password) values('${phone}',${password})`;
					console.log(sql1);
					client.query(sql1,function(err) {
						if(err) {
							console.log(err);
							res.send({ code: -1, msg: '插入失败' });
						}else {
							res.send({ code: 0, msg: '注册成功' });
						}
					})
					client.end();

				} else {
					res.send({ code: -2, msg: '该用户已存在' });
					client.end();
				}
			}
		})

		//
	})

})
app.listen(4000);
