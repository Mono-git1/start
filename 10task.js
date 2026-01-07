// 10. API qo'ng'iroqlar seriyasi
// Uchta ketma-ket API qo'ng'iroqlarni amalga oshiring:
// Foydalanuvchi ma'lumotlarini oling
// Foydalanuvchining postlarini oling
// Birinchi postga commentlarni oling
async function getUserDataFlow(userId) {
    try {
        const userResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const user = await userResponse.json();
        const postsResponse = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        const posts = await postsResponse.json();

        if (posts.length === 0) {
            throw new Error("Foydalanuvchida postlar yo‘q");
        }
        const commentsResponse = await fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`
        );
        const comments = await commentsResponse.json();

        return {
            user,
            posts,
            firstPostComments: comments
        };
    } catch (error) {
        console.error("Xatolik:", error.message);
        throw error;
    }
}
getUserDataFlow(1)
    .then(data => console.log(data))
    .catch(err => console.error("Flow xatosi:", err.message));
