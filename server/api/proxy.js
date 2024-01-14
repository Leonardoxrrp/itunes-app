const corsAnywhere = require('cors-anywhere');

const proxy = corsAnywhere.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
});

const port = process.env.PORT || 8080;
proxy.listen(port, () => {
    console.log(`CORS Anywhere proxy running on port ${port}`);
});