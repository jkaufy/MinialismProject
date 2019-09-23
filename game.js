var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 400, height: 400, backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var speed = 5;
var score = 0;


var ufo = new PIXI.Sprite(PIXI.Texture.from("ufo.png"));
var topWall = new PIXI.Sprite(PIXI.Texture.from("top.png"));
var bottomWall = new PIXI.Sprite(PIXI.Texture.from("top.png"));
var scoreText = new PIXI.Text('Score: ' + score ,{fontFamily : 'Arial', fontSize: 20, align : 'right'});


topWall.position.x = 390;
topWall.position.y = -40;
bottomWall.position.y = 400;
bottomWall.position.x = 390;



stage.addChild(ufo);
stage.addChild(topWall);
stage.addChild(bottomWall);
stage.addChild(scoreText);


function moveWithMouse(e)
{
    mousePosition = renderer.plugins.interaction.mouse.global;
    ufo.position.x = mousePosition.x - 20;
    ufo.position.y = mousePosition.y - 20;
}


ufo.interactive = true;
ufo.on('mousemove', moveWithMouse);


function moveWalls()
{
    
    topWall.position.x -= speed;
    bottomWall.position.x -= speed;

    if(topWall.position.x < -20)
    {
        topWall.position.y = -40;
        bottomWall.position.y = 400;

        changeWalls = Math.floor(Math.random()* 350);

        topWall.position.y -= changeWalls;
        bottomWall.position.y -= changeWalls;


        topWall.position.x = 400;
        bottomWall.position.x = 400;

        if (speed < 13)
        {
            speed += .2;
        }

        score += 1;
        scoreText.text = 'Score: ' + score;
    }
}

function animate()
{
    requestAnimationFrame(animate);
    renderer.render(stage);
    moveWalls();
}


animate();

