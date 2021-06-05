/*************************************canvas*********************************************/

var canvas= document.getElementById('aire_de_jeu');
var ctx= canvas.getContext('2d');

canvas.width= window.innerWidth-10;
canvas.height= window.innerHeight-10;

function startFirst()
{

/****************************changement des classes  des divs du generiques************************/

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

	var player = document.querySelector('#audioPlayer1');
	player.pause();
	var player = document.querySelector('#audioPlayer2');
	player.play();







	/********************controle souris**********************/
	// canvas.addEventListener("mousemove", controlSouris);
	// 	function controlSouris(e) 
	// 	{
 //    		joueur.x = e.offsetX;
	// 	}


/**************************constructeur***********************/
	var Element= function(x, y, vx, vy, width, height, color)
	{
		this.x= x;
		this.y= y;
		this.vx= vx;
		this.vy=vy;
		this.width= width;
		this.height= height;
		this.color= color;
		this.draw= function()   //dessiner l'element
		{
			ctx.fillStyle=this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		};
	};
	
/******************************le joueur prend forme*************************************/

	var joueur= new Element(canvas.width/2, canvas.height-150, '', '', '','', '');

	joueur.draw= function()
	{
		var vaisseau= document.getElementById('vaisseau');
		ctx.drawImage(vaisseau, joueur.x, joueur.y, 100, 100);

	}

	joueur.bouge= function()
	{
		canvas.addEventListener("mousemove", controlSouris);
		function controlSouris(e) 
		{
			joueur.x = e.offsetX;
			joueur.y = e.offsetY;
		}

	};

	joueur.tire= function()
	{
		canvas.addEventListener("click", projectile, false);
		function projectile(e)
		{
			var balle= new Element(joueur.width/2, joueur.y, "", "", 5, 10, 'lime' )
			balle.draw();
		}
	}
	
/**************************le mechant prend forme aussi****************************/	

	var mechant= new Element(canvas.width/2, 5, 4, '', 10, 10, 'red');	
	var projectile= new Element('', '', 0, 5, 2, 8, 'lime');

	mechant.bouge= function()
	{
		this.x += this.vx;
		if(this.x + this.width >= canvas.width)
		{
    		this.vx = -this.vx;
		};

		if (this.x <= 0)
		{
    		this.vx = -this.vx;
		};
	};

	mechant.tire= function()
	{
		projectile.draw();
		projectile.x = (mechant.x + mechant.width/2) - (projectile.width/2);
		projectile.y = mechant.y + mechant.height;
		
	}

	projectile.bouge= function()
	{
		projectile.y += projectile.vy;

		if(projectile.y != mechant.y) 
		{
			projectile.vx = 0;
		}
		window.requestAnimationFrame(projectile.bouge);
	}


	/******************************les adversaires tirent*************************************/

	



	/***************la function qui dessinne tous les elements à l'ecran*************/	

	function draw()
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		joueur.draw();
		joueur.bouge();
		mechant.draw();
		mechant.bouge();
		mechant.tire();
		projectile.bouge();
		window.requestAnimationFrame(draw);
	};
		window.requestAnimationFrame(draw);
	console.log(projectile);
}





/******************************************************deuxieme niveau******************************************/