// 7. Retry mexanizmi
// Agar Promise xato bilan tugasa, uni 3 marta qayta urinish mexanizmini yarating.
function retryPromise(promiseFn, retries = 3) {
  return new Promise((resolve, reject) => {
    function attempt(remaining) {
      promiseFn()
        .then(resolve)
        .catch(error => {
          if (remaining === 0) {
            reject(error);
          } else {
            console.log(`Qayta urinish... Qoldi: ${remaining}`);
            attempt(remaining - 1);
          }
        });
    }

    attempt(retries);
  });
}
let count = 0;

retryPromise(() => {
  return new Promise((resolve, reject) => {
    count++;
    console.log("Urinish:", count);

    if (count < 3) {
      reject("Xato");
    } else {
      resolve("Muvaffaqiyat");
    }
  });
}, 3)
.then(result => console.log(result))
.catch(error => console.error("Oxirgi xato:", error));

