// 2. Promise bilan xato qaytarish
// Promise yarating va uni 1 soniya kutgandan keyin "Xato yuz berdi!" xabari bilan reject qiling. Keyin .catch() yordamida xatoni ushlang.
const prom = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject("Xato yuz berdi!")
    }, 1000)
})
prom
    .catch(rej => console.log(rej))