const apiKey = 'fdecc86d9e33401b84c937187086dc96';
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=6&apiKey=${apiKey}`;
const newsUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

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

async function bbcNews(){
    try{
        const bbcNews = await fetch(newsUrl);

        if(!bbcNews){
            console.log('Cannot fetch updates')
        }
        const bbcNewsData = await bbcNews.json();
        console.log('bbc' , bbcNewsData);
        let bbcNewsArticles = bbcNewsData.articles;
        console.log('yooo', bbcNewsArticles)

        const bbcContainer = document.getElementById('bbcWrap');
        bbcContainer.classList.add('wrap', 'd-md-grid');

        bbcNewsArticles.forEach(article => {
            const bbcContent = document.createElement('div');
            bbcContent.classList.add('bbc-content','bg-white','p-3','mt-3');

            const bbcImageWrap = document.createElement('div');
            bbcImageWrap.classList.add('bbc-image');
            const bbcImage = document.createElement('img');
            bbcImage.src = article.urlToImage;

            const bbcTextWrap = document.createElement('div');
            const bbcHeader = document.createElement('h3');
            bbcHeader.textContent = article.title;
            const bbcAnchorTag = document.createElement('a');
            bbcAnchorTag.href = article.url;
            const bbcParagraph = document.createElement('p');
            bbcParagraph.textContent = article.content;

            bbcContainer.appendChild(bbcContent);
            bbcContent.appendChild(bbcImageWrap)
            bbcImageWrap.appendChild(bbcImage);

            bbcContent.appendChild(bbcTextWrap);
            bbcTextWrap.appendChild(bbcHeader);
            bbcTextWrap.appendChild(bbcAnchorTag);
            bbcAnchorTag.appendChild(bbcParagraph);





        })
        console.log(bbcContainer , 'bbc')


    }
    catch(error){
        console.log('Try fetching again', error)

    }
}
bbcNews()