rightWristx=0;
leftWristx=0;
leftWristy=0;
rightWristy=0;
scoreLeft=0;
songStatus="";
song="";
song2="";
function preload() {
   song=loadSound("AI MUSIC/music.mp3");
   song2=loadSound("AI MUSIC/music2.mp3");
}
function setup() {
    canvas=createCanvas(420,310);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',Gotposes);
}
function draw() {
    image(video,0,0,600,500);
    songStatus=song.isPlaying();
    if(scoreLeft>0.2) {
        stroke("black");
        fill("red");
        circle(leftWristx,leftWristy,20);
        song2.stop();
        if(songStatus==false) {
            song.play();
            document.getElementById("status").innerHTML="Harry Potter Theme Song Playing!";
        }
    }
}
function modelLoaded() {
    console.log("Model has loaded!!");
} 
function Gotposes(results) {
    if(results.length>0) {
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.x;
        scoreLeft=results[0].pose.keypoints[9].score;
    }
}
