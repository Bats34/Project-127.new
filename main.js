rightWristx=0;
leftWristx=0;
leftWristy=0;
rightWristy=0;
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
    }
}
