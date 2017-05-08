// $(function(){
// 	$('.second .cellphone input').focus(function(){
// 	var	$username = $('input[name=username]').val();

// 	if($username=''){
// 		var one = $('<span>"请输入手机号码"</span>').css('color','#ccc');
// 		one.appendTO($('.second .cellphone'));
// 		console.log($('.second .cellphone'));

// 	}

// 	}).blur(function(){
// 		// $('onetest').html('').css('color','#ccc');
// 	})


// })

var oTestone = document.getElementById('testone');
var oTesttwo = document.getElementById('testtwo');
var oTestthree = document.getElementById('testthree');

var flag=false;

// oTestone.innerHTML = '';
// oTesttwo.innerHTML = '';
// oTestthree.innerHtml = '';

var oInputone = document.getElementById('cell');
var oInputtwo = document.getElementById('pass');
var oInputthree = document.getElementById('surepass');

oInputone.onfocus = function(){
	oTestone.innerHTML ='请输入手机号码';
	oTestone.style.color = '#ccc';
}

oInputone.onblur = function(){
	var oCell= oInputone.value;
	pattern=/^1[34578]\d{9}$/;
	if(oCell==''){
		oTestone.inneHTML='';
	}else if(oCell.length!=11){
		oTestone.innerHTML= '请正确输入手机号码';
		oTestone.style.color='#f00';
	}else if(!pattern.test(oCell)){
		oTestone.innerHTML = '正确输入手机号码';
	}else{
		flag=true;
	}
}

oInputtwo.onfocus = function(){
	oTesttwo.innerHTML = '密码由6-16个字母、数字和符号组成';
	oTesttwo.style.color='#ccc';
}

oInputtwo.onblur = function(){
	var oPassword = oInputtwo.value.length;
	if(oPassword==0){
		oTesttwo.innerHTML = '密码不能为空';
		oTesttwo.style.color='#f00';
		oTesttwo.style.fontFamily='微软雅黑';
		flag=false;
	}else if(oPassword<6){
		oTesttwo.innerHTML = '密码不能少于6位';
		oTesttwo.style.color='#f00';
		oTesttwo.style.fontFamily='微软雅黑';
		flag=false;
	}else if(oPassword>16){
		oTesttwo.innerHTML='您输入的密码不符合要求';
		oTesttwo.style.color='#f00';
		flag=false;
	}
}


oInputthree.onfocus = function(){
	oTestthree.innerHTML = '请再次输入你的密码';
	oTestthree.style.color='#ccc';
}

oInputthree.onblur = function(){
	var oSure = oInputthree.value.length;
	if(oSure==0){
		oTestthree.innerHTML = '密码不能为空';
		oTestthree.style.color='#f00';
		oTestthree.style.fontFamily='微软雅黑';
		flag=false;
	}else if(oInputtwo.value=''){
		oTestthree.innerHTML = '请完成上面密码设置';
		oTestthree.style.color='#ccc';
		flag=false;
	}else if(oInputtwo.value == oInputthree.value && oInputthree.value!=''&&oSure>=6){
		oTestthree.innerHTML='√';
		oTestthree.style.color='#0f0';
		oTestthreee.style.fontFamily='微软雅黑';
		flag=true;
	}else{
		oTestthree.innerHTML = '密码不一致或密码少于6位';
		oTestthree.style.color='#f00';
		flag=false;
	}
}

// $(function(){
// 	if($('#agree').is(':checked')==true){
// 		$('#register').css('backgroundColor','blue')
// 	}else if($('#agree').is(':checked')==false){
// 		$('#register').css('backgroundColor','#ccc')
// 	};
// })

	//有待解决为何勾选之后不能变色

