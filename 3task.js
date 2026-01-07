// 3. Promise zanjiri (chaining)
// Uchta Promise yarating:
// Birinchisi 1 soniyadan keyin raqam 5 ni qaytarsin
// Ikkinchisi bu raqamni 2 ga ko'paytirsin
// Uchinchisi natijani ekranga chiqarsin
// 1-Promise: 1 soniyadan keyin 5 qaytaradi

new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 1000);
})
    .then((son) => {
        console.log(son)
        return son * 2;
    })
    .then((natija) => {
        console.log("Natija:", natija);
    })
    .catch((error) => {
        console.log("Xatolik:", error);
    });
