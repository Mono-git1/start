// 9. Sequential Promise execution
// Promise'larni ketma-ket (sequential) bajarish funksiyasini yarating.
function executeSequentially(promises) {
    return promises.reduce((chain, promiseFn) => {
        return chain.then(results =>
            promiseFn().then(result => {
                results.push(result);
                return results;
            })
        );
    }, Promise.resolve([]));
}
function p1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("1-Promise ✅"), 1000);
    });
}

function p2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("2-Promise ✅"), 500);
    });
}

function p3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("3-Promise ✅"), 300);
    });
}

executeSequentially([p1, p2, p3])
    .then(results => {
        console.log("Natijalar:", results);
    })
    .catch(error => {
        console.error("Xato:", error);
    });
