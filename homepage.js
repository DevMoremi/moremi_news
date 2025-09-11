const apiKey = 'fdecc86d9e33401b84c937187086dc96';
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=6&apiKey=${apiKey}`;
const newsUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=7&apiKey=${apiKey}`;
const cnnUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

// carousel function fetching top headline news
async function carousel() {
    try{
        const carouselResponse = await fetch(url);
        if(!carouselResponse){
            console.log('Cannot fetch')
        }
        const carouselResponseData = await carouselResponse.json();
        let responseDataArticles = carouselResponseData.articles;

        const carouselContainer = document.getElementById('carouselContainer'); 

        responseDataArticles.forEach(article => {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card' , 'carousel-item' , 'active')
            const cardBody = document.createElement('div') 
            cardBody.classList.add('card-body')
            const cardAnchor = document.createElement('a') 
            cardAnchor.href = article.url;
            const image = document.createElement('img');
            image.classList.add('card-img');
            image.src = article.urlToImage;
            const carouselCaptionContainer = document.createElement('div'); 
            carouselCaptionContainer.classList.add('carousel-caption');
            const captionParagraph = document.createElement('p');
            captionParagraph.classList.add('text');
            captionParagraph.textContent = article.title
            const captionAnchor = document.createElement('a');
            captionAnchor.href = article.url;
            const anchorButton = document.createElement('button')

            carouselContainer.appendChild(cardContainer);
            cardContainer.appendChild(cardBody);
            cardBody.appendChild(cardAnchor);
            cardAnchor.appendChild(image); 

            cardAnchor.appendChild(carouselCaptionContainer);


            carouselCaptionContainer.appendChild(captionParagraph); 
            captionParagraph.appendChild(captionAnchor);
            captionAnchor.appendChild(anchorButton);  
        });
    }
    catch(error){
        console.log('try again',  error)

    }   
}
carousel()

// BBC news function fetching tech news 
async function bbcNews(){
    try{
        const bbcNews = await fetch(newsUrl);

        if(!bbcNews){
            console.log('Cannot fetch updates')
        }
        const bbcNewsData = await bbcNews.json();
        let bbcNewsArticles = bbcNewsData.articles;

        const bbcContainer = document.getElementById('bbcWrap');
        bbcContainer.classList.add('wrap', 'd-md-grid', 'me-md-4');

        bbcNewsArticles.forEach(article => {
            const bbcContent = document.createElement('div');
            bbcContent.classList.add('bbc-content','bg-white','p-3','mt-3');
            const bbcAnchorWrap = document.createElement('a');
            bbcAnchorWrap.href = article.url;

            const bbcImageWrap = document.createElement('div');
            bbcImageWrap.classList.add('bbc-image');
            const bbcImage = document.createElement('img');
            bbcImage.src = article.urlToImage;

            const bbcTextWrap = document.createElement('div');
            const bbcHeader = document.createElement('h3');
            bbcHeader.classList.add('pt-3', 'ps-2')
            bbcHeader.textContent = article.title;
            const bbcAnchorTag = document.createElement('a');
            bbcAnchorTag.href = article.url;
            const bbcParagraph = document.createElement('p');
            bbcParagraph.classList.add('ps-2','pt-3', 'mb-0')
            bbcParagraph.textContent = article.content;

            bbcContainer.appendChild(bbcContent);
            bbcContent.appendChild(bbcAnchorWrap);
            bbcAnchorWrap.appendChild(bbcImageWrap)
            bbcImageWrap.appendChild(bbcImage);

            bbcAnchorWrap.appendChild(bbcTextWrap);
            bbcTextWrap.appendChild(bbcHeader);
            bbcTextWrap.appendChild(bbcAnchorTag);
            bbcAnchorTag.appendChild(bbcParagraph);
        })

    }
    catch(error){
        console.log('Try fetching again', error);
    }
}
bbcNews()

// function fetching news updates from cnn

async function cnnNews(){
    try{
        const cnnNews = await fetch(cnnUrl);
        if(!cnnNews){
            console.log('Try again');
        }
        const cnnNewsData = await cnnNews.json();
        let cnnNewsArticles = cnnNewsData.articles;
        console.log('me' , cnnNewsArticles)

        const cnnContainer = document.getElementById('cnnWrap');
        cnnContainer.classList.add('cnn-wrap', 'd-md-grid')



        cnnNewsArticles.forEach(article =>{
            const cnnContent = document.createElement('div');
            cnnContent.classList.add('cnn-content', 'bg-white','pb-2', 'mt-3', 'd-flex')
            const cnnAnchorWrap = document.createElement('a');

            const cnnImageWrap = document.createElement('div');
            cnnImageWrap.classList.add('cnn-image')
            const cnnImage = document.createElement('img');
            cnnImage.src = article.urlToImage;

            const cnnTextWrap = document.createElement('div');
            cnnTextWrap.classList.add('mt-2', 'me-2', 'cnn-text');
            const cnnAnchor = document.createElement('a');
            cnnAnchor.href = article.url;
            const cnnHeader = document.createElement('h3');
            cnnHeader.classList.add('pb-2')
            cnnHeader.textContent = article.title;
            const cnnSpan = document.createElement('span');
            cnnSpan.textContent = article.author;


            cnnContainer.appendChild(cnnContent);
            cnnContent.appendChild(cnnAnchorWrap);
            cnnAnchorWrap.appendChild(cnnImageWrap);
            cnnImageWrap.appendChild(cnnImage);

            cnnAnchorWrap.appendChild(cnnTextWrap);
            cnnTextWrap.appendChild(cnnAnchor);
            cnnAnchor.appendChild(cnnHeader);
            cnnTextWrap.appendChild(cnnSpan);
        })
    }
    catch(error){
        console.log('cannot fetch updates', error);
    }
    
} 
cnnNews()