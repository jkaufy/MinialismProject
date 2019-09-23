var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 400, height: 400, backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();


var ufo = new PIXI.Sprite(PIXI.Texture.from("ufo.png"));
var topWall = new PIXI.Sprite(PIXI.Texture.from("top.png"));
var bottomWall = new PIXI.Sprite(PIXI.Texture.from("top.png"));


topWall.position.x = 390;
topWall.position.y = -40;
bottomWall.position.y = 400;
bottomWall.position.x = 390;



stage.addChild(ufo);
stage.addChild(topWall);
stage.addChild(bottomWall);
stage.addChild(scoreText);









function animate()
{
    requestAnimationFrame(animate);
    renderer.render(stage);
}


animate();

