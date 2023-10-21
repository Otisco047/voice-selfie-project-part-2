var recognition = new window.webkitSpeechRecognition();

function start() {
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textBox").innerHTML = Content;
    if (Content == "take my selfie") {
        console.log("taking selfie --- ");
        speak();
        setTimeout(function () {
            img_id = "selfie1";
            takingsnap();
            save();
        }, 5000)
    }
}

function speak() {
    speak_data = "Taking Your Selfie In 5 Seconds";
    utterthis = new SpeechSynthesisUtterance(speak_data);
    window.speechSynthesis.speak(utterthis);
    Webcam.attach("#camera");
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});

function takingsnap() {
    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';
        }
        if (img_id == "selfie2") {
            document.getElementById("result").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';
        }
        if (img_id == "selfie3") {
            document.getElementById("result").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>';
        }
    })

}

function save() {
    selfiepic = document.getElementById("result").src;
    document.getElementById("link").href = selfiepic;
    document.getElementById("link").click();
}