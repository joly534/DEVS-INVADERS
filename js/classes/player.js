/**************************constructeur***********************/
var Player= function(x, y, vx, vy, width, height, color)
{
    this.x= x;
    this.y= y;
    this.vx= vx;
    this.vy=vy;
    this.width= width;
    this.height= height;
    this.color= color;
    this.draw= function()   //dessiner l'Payer
    {
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
};