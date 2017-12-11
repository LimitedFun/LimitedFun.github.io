function GetClock(){
    var tzOffset = -5;//set this to the number of hours offset from UTC

    var d=new Date();
    var dx=d.toGMTString();
    dx=dx.substr(0,dx.length -3);
    d.setTime(Date.parse(dx))
    d.setHours(d.getHours()+tzOffset);

    var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
    if(nmin<=9) nmin="0"+nmin
    if(nsec<=9) nsec="0"+nsec;

    document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+":"+nsec+"";
}

window.onload=function(){
    GetClock();
    setInterval(GetClock,1000);
}