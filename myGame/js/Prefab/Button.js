//Create by Guanchen Liu
//Prefab:Button
//Version1
//This script will generate buttons on the sheet
//and detect input from the player
function Button(game, x, y, key, frame, dir) {
	Phaser.Sprite.call(this, game, x, y, key, frame);
	this.anchor.set(0.5);
	this.dir = dir;
	game.physics.enable(this);
	this.scale.x = 0.8;
	this.scale.y = 0.8;
	this.body.collideWorldBounds = false;
	this.body.gravity.y = 0;
	this.alpha = 0.1;
	this.cursors = game.input.keyboard.createCursorKeys();

}

Button.prototype = Object.create(Phaser.Sprite.prototype);
Button.prototype.constructor = Button;

Button.prototype.update = function(){
	this.alpha = 0.1;
	if(this.cursors.left.isDown){
		if(this.dir == 'left'){
			this.alpha = 1;
		}
	}
	if(this.cursors.right.isDown){
		if(this.dir == 'right'){
			this.alpha = 1;
		}
	}
	if(this.cursors.down.isDown){
		if(this.dir == 'down'){
			this.alpha = 1;
		}

	}

}