// 8. Timeout bilan Promise
// Promise yarating va agar u belgilangan vaqt ichida bajarilmasa, timeout xatosi qaytarsin.
function promiseWithTimeout(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Timeout xatosi"));
    }, timeout);

    promise
      .then(result => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch(error => {
        clearTimeout(timer);
        reject(error);
      });
  });
}
const slowPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve("Bajarildi 🎉");
  }, 1000);
});

promiseWithTimeout(slowPromise, 2000)
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
