// 14. Promise zanjiri
// processNumber(num) funksiyasi yarating:
// Birinchi .then() da raqamni 10 ga ko'paytiring
// Ikkinchi .then() da 5 ayiring
// Uchinchi .then() da 2 ga bo'ling
// Har bir bosqichni console.log() qiling
function processNumber(num) {
    return Promise.resolve(num)
        .then(value => {
            const result = value * 10;
            console.log("10 ga ko'paytirildi:", result);
            return result;
        })
        .then(value => {
            const result = value - 5;
            console.log("5 ayirildi:", result);
            return result;
        })
        .then(value => {
            const result = value / 2;
            console.log("2 ga bo'lindi:", result);
            return result;
        });
}
processNumber(3).then(finalResult => {
    console.log("Yakuniy natija:", finalResult);
});
