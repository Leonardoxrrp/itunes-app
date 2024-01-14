const corsAnywhere = require('cors-anywhere');

const proxy = corsAnywhere.createServer({
    originWhitelist: ['https://itunes-app-seven.vercel.app'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
});

const port = process.env.PORT || 8080;
proxy.listen(port, () => {
    console.log(`CORS Anywhere proxy running on port ${port}`);
});