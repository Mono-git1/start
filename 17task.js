// 17. Bir nechta Promise larni kutish
//  Uchta async funksiya yarating: getUsers(), getPosts(), getComments(). Har biri turli vaqtda (1s, 2s, 3s) ma'lumot qaytarsin. getAllData() funksiyasida uchala ma'lumotni parallel ravishda olib, bitta obyektda qaytaring. Promise.all() ishlatilsin.
function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => resolve(["User1", "User2"]), 1000);
    });
}

function getPosts() {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Post1", "Post2"]), 2000);
    });
}

function getComments() {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Comment1", "Comment2"]), 3000);
    });
}

async function getAllData() {
    try {
        const [users, posts, comments] = await Promise.all([
            getUsers(),
            getPosts(),
            getComments()
        ]);

        return { users, posts, comments };
    } catch (error) {
        console.error("Xatolik:", error.message);
    }
}
getAllData().then(data => console.log("Natija: ", data));
