/*************************************canvas*********************************************/

var canvas= document.getElementById('aire_de_jeu');
var ctx= canvas.getContext('2d');

canvas.width= window.innerWidth-10;
canvas.height= window.innerHeight-10;
/*************tableau contenant toutes les gouttes*******************/
var goutte = [];
for (var i = 0; i < 300; i++) {
    goutte[i] = new Goutte();
};

/************déclaration du constructeur et de ses propriétés*******/
function Goutte() {

    this.x= Math.random()* (canvas.width-1);
    this.y= Math.random()* (canvas.height - 1);
    this.width= 1.5;
    this.height= 5;
    this.color= ffd700;
    this.dy= Math.random() * (5-2) + 2;
/**************fonction pour dessinner la goutte**********************/
    this.draw= function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
        };

/***************fonction pour faire tomber la goutte******************/					
    this.tombe= function() {
        this.y += this.dy;
        if (this.y > canvas.height){
            this.y = 0;
        };
    };
};

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 600; i++) 
    {
        goutte[i].draw();
        goutte[i].tombe();
    };
    window.requestAnimationFrame(draw); 

}
window.requestAnimationFrame(draw);