let obj = {
	email: false,
	pw: false,
	secpw: false,
	username: '游客',
	count: 0
}
say = (obj) => {
	console.log(obj)
}
username = () => {
	let str = document.getElementById('username').value
	obj.username = str
}
checkMailadd = () => {
	var str = document.getElementById('email').value
	console.log(str)
	var reg // 正则表达式变量
	var check = false; // 检测通过标志
	reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
	if (!reg.test(str)) {
		document.getElementById('showInfo').innerHTML = "邮箱只能包含字母、数字或下划线\'_\'!"
		obj.email = false
	} else {
		obj.email = str
		document.getElementById('showInfo').innerHTML = "√邮箱通过验证(" + counter() + "/3)"
		check = true
	}
	return check;
}
checkpw = () => {
	var str = document.getElementById('password').value
	sessionStorage.setItem('pw', str)
	console.log('pw"' + str)
	var check = false
	obj.pw = false
	var reg
	if (str.length < 6) {
		document.getElementById('showInfo').innerHTML = "密码过短!"
	} else if (str.length > 16) {
		document.getElementById('showInfo').innerHTML = "密码过长!"
	} else {
		reg = /^[a-zA-Z0-9_]+$/
		if (!reg.test(str)) {
			document.getElementById('showInfo').innerHTML = "密码只能包含字母、数字或下划线\'_\'"
		} else {
			obj.pw = str
			document.getElementById('showInfo').innerHTML = "√密码验证通过(" + counter() + "/3)"
			check = true
		}
	}
	return check
}
checksecpw = () => {
	var secpw = document.getElementById('secPassword').value
	var pw = sessionStorage.getItem('pw');
	if (secpw == pw && secpw.length > 5) {
		obj.secpw = true
		document.getElementById('showInfo').innerHTML = "√重复密码正确(" + counter() + "/3)"

		return true
	}
	document.getElementById('showInfo').innerHTML = "两次密码输入不相同!"
	obj.secpw = false
	return false
}
register = () => {
	console.log(obj)
	if (obj.email && obj.pw && obj.secpw) {
		console.log(obj.username)
		localStorage.setItem('isLogin', true)
		localStorage.setItem('username',obj.username)
		localStorage.setItem('email',obj.email)
		localStorage.setItem('pw',obj.pw)
		self.location = "../index.html"
	} else {
		document.getElementById('showInfo').innerHTML = "请检查输入是否有误!"
	}
}
counter = () => {
	let count = 0;
	if (obj.email) {
		count++;
	}
	if (obj.pw) {
		count++;
	}
	if (obj.secpw) {
		count++;
	}
	console.log(obj)
	return count
}
