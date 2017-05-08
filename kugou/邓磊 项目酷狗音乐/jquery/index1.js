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


		var i = 0; 

		i++;

		i=i%4;

	

		// function chan(){

		// 	$('.songform'+i+' ul').css('dispaly','none');

		// 	$('.songform'+i+' ul').eq(nLeft).css('dispaly','block');

		// }

		$('.page #turnleft').click(function(){

			var n =$('.page #turnleft').next().html().slice(0,1);

			var nLeft = parseInt(n);

			nLeft<=1?nLeft=1:nLeft--;

			$('.page #turnleft').next().html(nLeft+'/3');

			$('.songform1 ul').css('display','none');

			// console.log($('.songform1 ul'));

			if(nLeft==1){

				$('.songform1 ul').eq(0).css('display','block');

			}else if(nLeft==2){

				$('.songform1 ul').eq(1).css('display','block');

			}else if(nLeft==3){

				$('.songform1 ul').eq(2).css('display','block');

			}

		})

		$('.page #turnright').click(function(){

			var n =$('.page #turnright').prev().html().slice(0,1);

			var nLeft = parseInt(n);

			nLeft>=3?nLeft=3:nLeft++;

			$('.page #turnleft').next().html(nLeft+'/3');			

			$('.songform1 ul').css('display','none');
			if(nLeft==1){
				$('.songform1 ul').eq(0).css('display','block');
			}else if(nLeft==2){

				$('.songform1 ul').eq(1).css('display','block');

			}else if(nLeft==3){

				$('.songform1 ul').eq(2).css('display','block');

			}	
		})



// 用ul控制改变下面内容
// 	$('#middle .left .newsong > ul li').mouseover(function(){

// 			$('.songform1 ul').each(function(){

// 			$('.songform1 ul').css('display','none');

// 		})
// 			$('.songform1 ul').eq(this.value).css('display','block')

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