/*
 * @description Class Bug
 */
var Game = function () {
	var _this = this;
		
	window.durationGame = 20000;
	window.durationBug = 0;
	window.timeoutGame = '';	
	window.timeoutBug = '';
	window.score = 0;

	
	this.play = function () {
		$('#score').val(0);
		window.score = 0;
		window.timeoutGame = setTimeout('window.endGame()', window.durationGame);
		window.durationBug = Number($('#gameMode').val());
		window.generateBug();
	};
	
	window.generateBug = function () {
		clearTimeout(window.timeoutBug);
		var arr = [
				'img/ant.png',
				'img/butterfly.png',
				'img/cricket.png',
				'img/dragon_fly.png',
				'img/ladybug.png'
			],
			left = 'left:'+Math.floor((Math.random() * 452))+'px;',
			top = 'top:'+Math.floor((Math.random() * 352))+'px;',
			img = arr[Math.floor((Math.random() * 5))];
		
		$('#game').html('<div class="bug" style="'+top+left+'"><img src="'+img+'">');
		
		window.timeoutBug = setTimeout('window.generateBug()', window.durationBug)
	};
	
	$('#game').on('click', '.bug', function () {
		window.score += 5;
		$('#score').val(window.score);
		window.generateBug();
	});
	
	window.endGame = function () {
		clearTimeout(window.timeoutGame);
		clearTimeout(window.timeoutBug);
		$('#game').find('.bug').remove();
		alert(window.score);
	};
}