
let news= [];
const getLatestNews = async () => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=kr&topic=business
    `) 

    let header = new Headers({"x-api-key":'ODJ1F8D72EWEvKSoZKKwAhLshgksP7ZdFlK1vEPAXCY'})

    let response = await fetch(url,{headers:header});
    let date = await response.json();
    news = date.articles
    console.log(news)
};
getLatestNews();