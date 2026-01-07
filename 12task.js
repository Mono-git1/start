// 12. Try-Catch bilan bo'lish
// Ikkita sonni qabul qiladigan divide(a, b) funksiyasi yozing. Agar b === 0 bo'lsa, xatolik tashlang va uni catch qiling. Natijada xatolik xabari qaytaring.
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("0 ga bo'lib bo'lmaydi");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}
console.log(divide(10, 2));
console.log(divide(10, 0));
