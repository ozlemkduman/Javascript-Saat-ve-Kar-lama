let myName=document.getElementById("myName");
let myClock=document.getElementById("myClock");

myName.innerHTML=prompt("Lütfen isminizi girin...");

function showTime(){
    let date=new Date();

    var days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    myClock.innerHTML=`
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getDay()]}
    `
}

setInterval(showTime,1000);
