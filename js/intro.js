/********************************************intro du jeu *******************************************/

function introduction(){
	var start= document.getElementById('start');
	start.className= "btn_start_off";
	var war= document.getElementById('war');
	war.className= "war_on";
	var deroule= document.getElementById('deroule');
	deroule.className= "deroule_on";
	var generique= document.getElementById('generique');
	generique.className= 'generique_on';
	var player = document.querySelector('#audioPlayer1');
	player.play();
	 
};

introduction();