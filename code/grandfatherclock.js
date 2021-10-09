function tick()
{
    //get the mins of the current time
    var mins = new Date().getMinutes();
    if(mins == "00"){
        alert('Do stuff');
     }
    console.log('Tick ' + mins);
}

setInterval(function() { tick(); }, 1000);