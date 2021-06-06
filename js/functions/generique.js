/********************************************intro du jeu *******************************************/

function generique(){
	var war= document.getElementById('war');
	war.className= "war_on";
	var deroule= document.getElementById('deroule');
	deroule.className= "deroule_on";
	var generique= document.getElementById('generique');
	generique.className= 'generique_on';
	var player = document.querySelector('#audioPlayer1');
	player.play();
	 
};

generique();

function startFirst(){
        var start= document.getElementById('start');
        start.className= "btn_start_off";
    
        var startfirst=document.getElementById('aire_de_jeu');
        startfirst.className= "jeu_on";
    
        var btnStart= document.getElementById('niveau_un');
        btnStart.className="btn_niveau_un_off";
    
        var war= document.getElementById('war');
        war.className= "war_off";
    
        var deroule= document.getElementById('deroule');
        deroule.className= "deroule_off";
    
        var generique= document.getElementById('generique');
        generique.className= 'generique_off';
    
        var sound = document.querySelector('#audioPlayer1');
        sound.pause();
}    