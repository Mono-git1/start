// 13. Oddiy Promise yaratish
// waitAndReturn(value, seconds) funksiyasi yarating. U berilgan sekundlar kutib, keyin value ni qaytarsin. Promise ishlatilsin.
function waitAndReturn(value, seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, seconds * 1000);
    });
}
waitAndReturn("Salom ", 2)
    .then(result => console.log(result));
