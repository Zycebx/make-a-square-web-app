noseX = 0;
noseY = 0;

differance = 0;

leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    canvas = createCanvas(650,650);
    canvas.position(1050,150);
    video.position(160,300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Posenet Is Ready");
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = ", noseX, "noseY = ", noseY)
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            differance = floor(leftWristX - rightWristX);
        }    
}

function draw()
{
    background("yellow");
    document.getElementById("square_size").innerHTML = "Width And Height Of The Square Will Be = " + differance +"px";
    fill("black");
    stroke("black");
    rectMode(CENTER);
    square(noseX, noseY, differance);
}

