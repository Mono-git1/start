// 11. Rate Limiter
// Soniyada maksimal 3 ta so'rov yuborilishini ta'minlaydigan Promise-based rate limiter yarating.
class RateLimiter {
    constructor(maxRequests, interval) {
        this.maxRequests = maxRequests;
        this.interval = interval;
        this.timestamps = [];
    }
    async execute(promiseFn) {
        const now = Date.now();
        this.timestamps = this.timestamps.filter(
            time => now - time < this.interval
        );
        if (this.timestamps.length >= this.maxRequests) {
            const waitTime = this.interval - (now - this.timestamps[0]);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }

        this.timestamps.push(Date.now());
        return promiseFn();
    }
}
const limiter = new RateLimiter(3, 1000);

function request(id) {
    return () =>
        new Promise(resolve => {
            console.log("So‘rov:", id, "vaqt:", new Date().toLocaleTimeString());
            setTimeout(() => resolve(`Javob ${id}`), 300);
        });
}

for (let i = 1; i <= 10; i++) {
    limiter.execute(request(i)).then(console.log);
}
