//Create by Guanchen Liu
//Prefab:Bit
//Version1
//This script will generate bis on the sheet
//Related to the button
function Bit(game, x, y, key, frame, dir, button) {
	Phaser.Sprite.call(this, game, x, y, key, frame);
	this.anchor.set(0.5);
	this.dir = dir;
	game.physics.enable(this);
	this.scale.x = 0.4;
	this.scale.y = 0.4;
	this.button = button;
	this.body.collideWorldBounds = false;
	this.body.gravity.y = 0;
	this.body.velocity.x = -250;

}

Bit.prototype = Object.create(Phaser.Sprite.prototype);
Bit.prototype.constructor = Bit;

Bit.prototype.update = function(){
	if(Math.abs(this.body.x - this.button.body.x) < 50 && this.button.alpha == 1){
		this.kill();
	}
}