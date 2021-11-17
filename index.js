var mySon=document.getElementById("mySong");
var icon=document.getElementById("icon");
icon.onclick=function()
{
    if(mySon.paused)
    {
        mySon.play;
        icon.src="pause.png";
    }
    else
    {
        mySon.pause;
        icon.src="play.png";
    }

}

