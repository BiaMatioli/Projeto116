ombroX = 0;
ombroY = 0;

function preload(){
    passaro = loadImage("https://i.postimg.cc/pXB3yWM6/passaro-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(450, 400);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.size(450, 400);
    camera.hide();

    poseNet = ml5.poseNet(camera, modelLoaded)
    poseNet.on("pose", gotPose);
}

function draw(){
    image(camera, 0, 0, 450, 400);
    image(passaro, ombroX, ombroY, 100, 100);
}

function tirarFoto(){
    save("Foto com filtro.png");
}

function modelLoaded(){
    console.log("O modelo foi carregado");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);

        ombroX = results[0].pose.rightShoulder.x - 40;
        ombroY = results[0].pose.rightShoulder.y - 115;

        console.log(results[0].pose.rightShoulder.x);
        console.log(results[0].pose.rightShoulder.y);
    }
}