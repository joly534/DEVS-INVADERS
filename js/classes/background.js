/************déclaration du constructeur et de ses propriétés*******/
function Asteroid() {

    this.x= Math.random()* (canvas.width-1);
    this.y= Math.random()* (canvas.height - 1);
    this.width= 1.5;
    this.height= 5;
    this.color= "#ffd700";
    this.dy= Math.random() * (5-2) + 2;
/**************fonction pour dessinner la asteroid**********************/
    this.draw= function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
        };

/***************fonction pour faire tomber la asteroid******************/					
    this.tombe= function() {
        this.y += this.dy;
        if (this.y > canvas.height){
            this.y = 0;
        };
    };
};
