// 1. Oddiy Promise yaratish
// Oddiy Promise yarating va uni 2 soniya kutgandan keyin "Salom, dunyo!" xabari bilan resolve qiling.
const prom = new Promise((res,rej) => {
    setTimeout(function(){
        res("Salom Dunyo")
    },2000)
});
prom
    .then(res => console.log(res))