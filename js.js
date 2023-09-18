const days=document.querySelector("#days")
const Hours=document.querySelector("#Hours")
const min=document.querySelector("#min")
const Sec=document.querySelector("#Sec")


function UpdateTime() {

    const currentYear = new Date().getFullYear();
    const newYear = new Date(`October 1 ${currentYear} 00:00:00`);
    const currentDate= new Date();
    const diff = newYear- currentDate; 
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    days.innerHTML=d;
    Hours.innerHTML=h;
    min.innerHTML=m;
    Sec.innerHTML=s;
}
setInterval(UpdateTime,1000);