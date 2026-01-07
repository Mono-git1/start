// 15. Promise.resolve va Promise.reject
// checkAge(age) funksiyasi yozing. Agar yosh 18 dan katta yoki teng bo'lsa Promise.resolve("Ruxsat berildi"), aks holda Promise.reject("Yosh yetarli emas") qaytarsin.
function checkAge(age) {
    if (age >= 18) {
        return Promise.resolve("Ruxsat berildi");
    } else {
        return Promise.reject("Yosh yetarli emas");
    }
}
checkAge(20)
    .then(result => console.log(result))
    .catch(error => console.error(error));

checkAge(16)
    .then(result => console.log(result))
    .catch(error => console.error(error));
