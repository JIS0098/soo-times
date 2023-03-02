
let news = [];

const getLatestNews = async () => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`);

    let header = new Headers({ "x-api-key": 'ODJ1F8D72EWEvKSoZKKwAhLshgksP7ZdFlK1vEPAXCY' });

    let response = await fetch(url, { headers: header });
    let date = await response.json();
    news = date.articles;

    render();

    console.log( date)
};

getLatestNews();

const render = () => {
    let newsHTML = ""
    newsHTML = news.map((item)=>{
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media}"/>
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}/p>
            <div>${item.rights} * ${item.published_date}</div>
        </div>
    </div>`
    }).join('');



document.querySelector("#news-board").innerHTML = newsHTML

}