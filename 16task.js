// 16. Try-catch bilan async/await
// fetchData(url) async funksiyasi yozing. Agar url bo'sh string bo'lsa xatolik tashlang. Try-catch ishlatib xatolikni ushlang va "Xatolik: ..." formatida qaytaring.
async function fetchData(url) {
    try {
        if (!url) {
            throw new Error("URL bo'sh bo'lishi mumkin emas ");
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP xato: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return `Xatolik: ${error.message}`;
    }
}
(async () => {
    console.log(await fetchData("https://jsonplaceholder.typicode.com/posts/1"));
    console.log(await fetchData(""));
})();
