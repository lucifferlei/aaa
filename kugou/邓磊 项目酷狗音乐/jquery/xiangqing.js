var songText = document.getElementById('songText');

var rollText = songText.getElementsByTagName('p');
// console.log(songText);
console.log(rollText);
var play = document.getElementById('btn_four');

var stop =document.getElementById('btn_two');

var music= document.getElementById('music');
// console.log(music);


var timer = null;

var speed = 0;

var step = 1;

var playStatus = true;

var mark = null;

var playTimer = null;

function roll(){

	songText.scrollTop=(songText.scrollTop+step);

	timer = setTimeout(roll,200);

}


play.onclick = function(){

	clearTimeout(timer);
	
	play.setAttribute('disabled','disabled');

	music.play();

	this.style.display = 'none';

	stop.style.display = 'block';

	speed = 0 ;

	 var wait=setTimeout(roll,20000);

	if(playStatus){
		clearTimeout(playTimer);
		playTimer = setTimeout(light,16000);
		playStatus = true;
	}else{
		clearTimeout(playTimer);
		playTimer = clearTimeout(highMark);
		setTimeout(light,3000);
	}
}

stop.onclick =function(){

	speed = speed;

	this.style.display = 'none';

	play.style.display = 'block';

	play.removeAttribute('disabled');

	music.pause();

	playStatus= false;

	clearTimeout(highMark);

	highMark = null;

	clearInterval(timer);

	timer= null;
}

var num = 0;

var highMark = null;

function light(){

	clearTimeout(highMark);

	for(var i =0;i<rollText.length;i++){

		rollText[i].style.color = '#aaa';
	}

	if(num<rollText.length){

		rollText[num].style.color = '#aff';
		num++;

	}else{

		return false;
	}

	highMark = setTimeout(light,3700);
}



function run(){

	var oLine=document.getElementById('line');

	var playTool = document.getElementById('playtool');

	playTool.style.left = parseInt(playTool.style.offsetLeft)+0.5+"%";

	if(playTool.style.left=='98%'){

		window.clearTimeout(timeout);
		return;
	}
	var timeout = window.setTimeout('run()',1000)
}
	window.onload = function(){

		run();

		}
