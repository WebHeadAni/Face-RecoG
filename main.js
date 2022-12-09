Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function TP(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captureImg" src="'+ data_uri +'">';
    });
}
console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j29vaGMrV/model.json',modelloaded);
function modelloaded(){
    console.log(" Model Loaded ")
}
function Check(){
    img = document.getElementById("captureImg");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectName").innerHTML = results[0].label;
        document.getElementById("objectAcc").innerHTML = results[0].confidence.toFixed(3);
    }
}