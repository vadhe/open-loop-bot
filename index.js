import axios from 'axios';
const url = 'https://api.openloop.so/bandwidth/';

const headers = {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "Bearer",
    "cache-control": "no-cache",
    "origin": "chrome-extension://effapmdildnpkiaeghlkicpfflpiambm",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Brave\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "sec-gpc": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
};
const info = async () => {
    try {
        const res = await axios.get(`${url}info`, { headers })
        console.log("info", res.data)
    } catch {
        console.log("failed fetch info")
    }
}
const ping = async () => {
    try {
        const res = await axios.post(`${url}share`, {
            quality: 65
        }, { headers })
        console.log("ping", res.data)
    } catch {
        console.log("failed to ping")
    }
}
(async () => {
    const main = async () => {
        while (true) {
            ping()
            info()
            await new Promise(resolve => setTimeout(resolve, 180000));
        }
    }
    main()
})();
