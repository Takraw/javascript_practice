
var goTimer = function(){
    var now = new Date();
    var milli = now.getTime() - start.getTime();
    var seconds = Math.floor(milli / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    seconds = seconds - minutes * 60; 
    minutes = minutes - hours * 60;
    // 0補完
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
}

alert("Hello");