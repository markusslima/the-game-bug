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
		var left = 'left:'+Math.floor((Math.random() * 292))+'px;',
			top = 'top:'+Math.floor((Math.random() * 272))+'px;',
			img = Math.floor((Math.random() * 4))+1;
		
		$('#game').html('<div class="bug bug'+img+'" style="'+top+left+'"></div>');
		
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