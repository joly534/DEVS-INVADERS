let canvas= document.getElementById('aire_de_jeu');
let ctx= canvas.getContext('2d');

canvas.width= window.innerWidth-10;
canvas.height= window.innerHeight-10;

/*************tableau contenant toutes les asteroids*******************/
let deepSpace = [];
for (let i = 0; i < 300; i++) {
    deepSpace[i] = new Asteroid();
};


/********************controle souris**********************/
canvas.addEventListener("mousemove", controlSouris);
	function controlSouris(e) 
	{
   		joueur.x = e.offsetX;
	}

/******************************le joueur prend forme*************************************/
var joueur= new Player(canvas.width/2, canvas.height-150, '', '', '','', '');
joueur.draw= function(){
	var vaisseau= document.getElementById('vaisseau');
	ctx.drawImage(vaisseau, joueur.x, joueur.y, 100, 100);
}
joueur.bouge= function(){
	canvas.addEventListener("mousemove", controlSouris);
	function controlSouris(e) 
	{
		joueur.x = e.offsetX;
		joueur.y = e.offsetY;
	}
}
joueur.tire= function(){
	canvas.addEventListener("click", projectile, false);
	function projectile(e)	{
		var balle= new Player(joueur.width/2, joueur.y, "", "", 5, 10, 'lime' )
		balle.draw();
	}
}

/**************************le mechant prend forme aussi****************************/	
var mechant= new Player(canvas.width/2, 5, 4, '', 10, 10, 'red');	
var projectile= new Player('', '', 0, 5, 2, 8, 'lime');
mechant.bouge= function(){
	this.x += this.vx;
	if(this.x + this.width >= canvas.width)
	{
   		this.vx = -this.vx;
	};
	if (this.x <= 0)
	{
   		this.vx = -this.vx;
	};
}
mechant.tire= function(){
	projectile.draw();
	projectile.x = (mechant.x + mechant.width/2) - (projectile.width/2);
	projectile.y = mechant.y + mechant.height;	
}
projectile.bouge= function(){
	projectile.y += projectile.vy;
	if(projectile.y != mechant.y) {
		projectile.vx = 0;
	}
	window.requestAnimationFrame(projectile.bouge);
}


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 300; i++) 
    {
        deepSpace[i].draw();
        deepSpace[i].tombe();
    };
			
	joueur.draw();
	joueur.bouge();
	mechant.draw();
	mechant.bouge();
	mechant.tire();
	projectile.bouge();

    window.requestAnimationFrame(update); 

}

window.requestAnimationFrame(update);
/******************************************************deuxieme niveau******************************************/