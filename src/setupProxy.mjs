const { createProxyMiddleWare } = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        createProxyMiddleWare("tweets?ids=1228393702244134912,1227640996038684673,1199786642791452673", {
            target: "https://api.twitter.com/2/",
            changeOrigin: true
        })
    );


    app.use(
        createProxyMiddleWare("everything?q=tesla&from=2022-03-22&sortBy=publishedAt&apiKey=d617565158634815b3dd4fbcf960f998", {
            target: "https://newsapi.org/v2/",
            changeOrigin: true
        })
    );
    
}