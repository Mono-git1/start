// 4. Promise.all() dan foydalanish
// Uchta turli vaqtda bajariluvchi Promise yarating (1s, 2s, 3s) va ularning barchasini Promise.all() bilan kuting.

let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 tayyor");
    }, 1000);
});
let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 tayyor");
    }, 2000);
});
let p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3 tayyor");
    }, 3000);
});
Promise.all([p1, p2, p3])
    .then((natijalar) => {
        console.log(natijalar);
    })
    .catch((xato) => {
        console.log("Xatolik:", xato);
    });
