Webcam.set ({
    height: 350,
    width: 450,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById('camera');
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img id='img_captured' src='" + data_uri + "'/>"; 
    });
}

console.log("ml5 - " + ml5.version);

classifier = ml5.imageClassifier("#");

function modelLoaded() {
    console.log("model is loaded");
}

function check() {
    img = document.getElementById("img_captured");
    classifier.classify(img, gotResult);
}
function gotResult(error, Results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(Results);
        document.getElementById("result_member_name").innerHTML = Results[0].label;
        document.getElementById("result_member_accuracy").innerHTML = Results[0].confidence.toFixed(3);
    }
}