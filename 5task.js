// 5. Promise.race() dan foydalanish
// Uchta Promise yarating va Promise.race() yordamida eng tez bajariliganini toping.
const prom1 = new Promise((resolve, reject) => {
    resolve("1 chi promis")
})
const prom2 = new Promise((resolve, reject) => {
    resolve("2 chi promis")
})
const prom3 = new Promise((resolve, reject) => {
    resolve("3 chi promis")
})
Promise.race([prom1, prom2, prom3])
    .then(Natija => console.log('1-chisi: ', Natija))
    .catch(error => console.log('Hatolik: ', error))