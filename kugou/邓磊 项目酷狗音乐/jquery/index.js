$(function(){

	var timer= null;

	var num = 0;

	$('.navi .left li').not($('.navi .left li')[0]).mouseover(function(){

		$(this).css('backgroundColor','#0c8ed9')

	}).mouseout(function(){

		$(this).css('backgroundColor','#000')

	});

	$('.navi .left .shade').mouseover(function(){

		$('.navi .left .show').css('backgroundColor','#0c8ed9')

	}).mouseout(function(){

		$('.navi .left .show').css('backgroundColor','#000');

	});

	$('.navi .left .shade a').mouseover(function(){

		$(this).css({background:'#888',borderTop:'1px solid #666',color:'#fff'})

	}).mouseout(function(){

		$(this).css({background:'#555',borderTop:'none',color:'#ddd'});
	})

	function fun(){

		num++;

		num=num%5;

		num==0?num++:num;

		
		$('#lunbotu .bigimg ').css('background','url(images/'+num+'.jpg) no-repeat center top');


		$('#lunbotu .bigimg .number li').each(function(){


			$('#lunbotu .bigimg .number li').css({width:'6px',height:'6px',borderRadius:'3px',background:'#888'});

			$('#lunbotu .bigimg .number li').eq(num-1).css({width:'12px',height:'12px',borderRadius:'6px',background:'#fff'});
		})
		// if(('#lunbotu .bigimg .number li').value==num){
		// 	$(this).css({width:'12px',height:'12px',borderRadius:'6px',background:'#fff'})
		// }
	}



	clearInterval(timer);

	timer=setInterval(fun,2000) 

	$('#lunbotu .bigimg .number li').mouseover(function(){

		clearInterval(timer);

		$('#lunbotu .bigimg .number li').each(function(){
			$('#lunbotu .bigimg .number li').css({width:'6px',height:'6px',borderRadius:'3px',background:'#888'});
		})

		$(this).css({width:'12px', height:'12px', borderRadius:'6px',background:'#ddd'});

		$('#lunbotu .bigimg').css('background','url(images/'+this.value+'.jpg) no-repeat center top') ;

	}).mouseout(function(){

		$(this).css({width:'6px',height:'6px',borderRadius:'3px',background:'rgb(221,221,221)'});

		

		// console.log(this);

		clearInterval(timer);

		num=this.value;

		timer=setInterval(fun,2000);

	})
	
		// console.log($('#middle .left .newsong > ul li'));

		$('#middle .left .newsong ul li').eq(0).mouseover(function(){

				$('#wrapsongs div ul').css('display','none');

				$('#wrapsongs div').eq(0).children().eq(0).css('display','block');
		
		})

		$('#middle .left .newsong ul li').eq(1).mouseover(function(){

				$('#wrapsongs div ul').css('display','none');

				$('#wrapsongs div').eq(1).children().eq(0).css('display','block');
		
		})

		$('#middle .left .newsong ul li').eq(2).mouseover(function(){

				$('#wrapsongs div ul').css('display','none');

				$('#wrapsongs div').eq(2).children().eq(0).css('display','block');
		
		})

		$('#middle .left .newsong ul li').eq(3).mouseover(function(){

				$('#wrapsongs div ul').css('display','none');

				$('#wrapsongs div').eq(3).children().eq(0).css('display','block');
		
		})



			var i = 0 ;

			var j= 0 ;



		$('.page #turnleft').click(function(){
			

			var n =$('.page #turnleft').next().html().slice(0,1);

			var nLeft = parseInt(n);

			nLeft<=1?nLeft=1:nLeft--;

			$('.page #turnleft').next().html(nLeft+'/3');

			$('#wrapsongs div ul').css('display','none');

			//遍历之后获取不到

			// $('#wrapsongs div').each(function(){
			// 	$(this).children().each(function(){

			// 		$(this).css('display','none');
			// 	})
			// })

			// console.log($('#wrapsongs div ul'))

				if(nLeft==1){

				$('#wrapsongs div ul').eq(0).css('display','block');

			}else if(nLeft==2){
				
				$('#wrapsongs div ul').eq(1).css('display','block');


			}else if(nLeft==3){

				
				$('#wrapsongs div ul').eq(2).css('display','block');

			}	

		})

		$('.page #turnright').click(function(){

			var n =$('.page #turnright').prev().html().slice(0,1);

			var nLeft = parseInt(n);

			nLeft>=3?nLeft=3:nLeft++;

			$('.page #turnleft').next().html(nLeft+'/3');			

			// $('#wrapsongs div').each(function(){
			// 	$(this).children().each(function(){
			$('#wrapsongs div ul').css('display','none');
			// 	})
			// })
			//用该种方法无效

			if(nLeft==1){

				$('#wrapsongs div ul').eq(0).css('display','block');

			}else if(nLeft==2){
				
				$('#wrapsongs div ul').eq(1).css('display','block');


			}else if(nLeft==3){

				
				$('#wrapsongs div ul').eq(2).css('display','block');

			}	

			// i++; i<4; j++; j<3;
		})




		$('#content #middle .right>.bigpic').mouseover(function(){

			if(!$('#content #middle .right>.bigpic>a>img').is(":animated")){
			$('#content #middle .right>.bigpic>a>img').animate({width:'350px',height:'200px'},500)
			}
		}).mouseout(function(){

			$('#content #middle .right>.bigpic>a>img').animate({width:'325px',height:'175px'},500)
		})


		$('#content #middle .right>.bottom>.left>a > .tao').mouseover(function(){

			if(!$('#content #middle .right>.bottom>.left>a .tao img').is(":animated")){
			$('#content #middle .right>.bottom>.left>a .tao img').animate({width:'170px',height:'100px'},500)
			}
		}).mouseout(function(){
			$('#content #middle .right>.bottom>.left>a .tao img').animate({width:'154px',height:'84px'},500)
		})


		$('#content #middle .right>.bottom>.right>a > .mei').mouseover(function(){

			if(!$('#content #middle .right>.bottom>.right>a .mei img').is(":animated")){
			$('#content #middle .right>.bottom>.right>a .mei img').animate({width:'170px',height:'100px'},500)
			}
		}).mouseout(function(){
			
			$('#content #middle .right>.bottom>.right> a .mei img').animate({width:'154px',height:'84px'},500)
					})
		// 写图片中心放大效果的jquery



// 用ul控制改变下面内容
// 	$('#middle .left .newsong > ul li').mouseover(function(){

// 			$('#wrapsongs div ul').each(function(){

// 			$('#wrapsongs div ul').css('display','none');

// 		})
// 			$('#wrapsongs div ul').eq(this.value).css('display','block')

// 		})


})


	// $('#lunbotu .bigimg').mouseover(function(){

	// 	clearInterval(timer);

	// }).mouseout(function(){

	// 	var bgNum=$('#lunbotu .bigimg').css('background');
	// 	console.log(bgNum);

	// 	var bgN=bgNum.slice(123,124);

	// 	console.log(typeof bgN);

	// 	var bgNumber=parseInt(bgN);

	// 	num=bgNumber;

	// 	tiemr=setInterval(fun,2000);

	// })

	// $('.navi .left .shade').mouseover(function(){
	// 	$('navi .left .show').css('background','#0c8ed9')
	// }).mouseout(function(){
	// 	$('navi .left .show').css('background','#000');
	// })
	// 第一个是蓝色，其余的都是黑色的停留状态还没有解决
	// $('#lunbotu .navi .left li:eq(0)').css('background','#0c8ed9');