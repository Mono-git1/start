// 1. Oddiy Promise yaratish
const prom = new Promise((res,rej) => {
    setTimeout(function(){
        res("Salom Dunyo")
    },2000)
});
prom
    .then(res => console.log(res))