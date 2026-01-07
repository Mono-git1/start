// 6. Ma'lumot yuklash simulyatsiyasi
// Foydalanuvchi ma'lumotlarini server'dan yuklash imitatsiyasini yarating. Agar user ID juft bo'lsa, muvaffaqiyatli ma'lumot qaytaring, aks holda xato qaytaring.
function loadUserData(userId) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (userId % 2 === 0) {
                res("Success");
            } else {
                rej("Error");
            }
        }, 1000);
    });
}
loadUserData(2)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
loadUserData(3)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
