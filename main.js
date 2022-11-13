nose_x = 0;
nose_y = 0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/wMhQKbZS/mustache-student-math-favorite-for-friday-the-the-1.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,nose_x,nose_y,55,55);
}

function take_snapshot(){
    save("myfilterimage.png");
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x - 25;
        nose_y = results[0].pose.nose.y - 12;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}