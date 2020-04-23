function ert(){
    let v=document.querySelector("video");
    currentTime = v.getCurrentTime();
    duration = v.getDuration();
    if(duration > 360 ){
        if(currentTime < 60){

            v.currentTime = 60;
        }
        if(currentTime >= 360){

            v.currentTime = duration;
        }


    }

}
$(document).ready(function () {

    console.log("start");
    setTimeout(1000);

    setInterval(function () {
        ert();
    }, 3000);


});
