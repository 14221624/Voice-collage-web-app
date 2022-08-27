image_id = 1;
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) 
{
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie")
    {
        console.log("taking selfie ___ ")
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking Selfie in five, ten, 15 seconds respectively. Be Ready";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
       take_snapshot1();
       
    },5000);
    
    setTimeout(function()
    {
       take_snapshot2();
       
    },10000);

    setTimeout(function()
    {
       take_snapshot3();
       
    },15000);
}

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:95
});
camera = document.getElementById("camera");

function take_snapshot1()
{    
     Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = '<img id="selfie_image" src="' + data_uri + '">';
     })
     image_id= image_id + 1;
}

function take_snapshot2()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result2").innerHTML = '<img id="selfie_image" src="' + data_uri + '">';
     })
     image_id= image_id + 1;
    
}

function take_snapshot3()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result3").innerHTML = '<img id="selfie_image" src="' + data_uri + '">';
     })
     image_id= 1;
}