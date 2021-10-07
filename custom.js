$('.range .rangeslider-thumb').on('mousedown mouseup', function mouseState(e) {
    if (e.type == "mousedown") {
        //code triggers on hold
        console.log("hold");
    }
    else{
        console.log("hide");
        $('.range .rangeslider-thumb').css({"left": "150px"});
        $('.range .range-output .output').text("50")
    }
});