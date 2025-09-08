const apiKey = 'fdecc86d9e33401b84c937187086dc96';
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=6&apiKey=${apiKey}`;

async function carousel() {
    try{
        const carouselResponse = await fetch(url);
        if(!carouselResponse){
            console.log('Cannot fetch')
        }
        const carouselResponseData = await carouselResponse.json();
        console.log('new', carouselResponseData);

        let responseDataArticles = carouselResponseData.articles;
        console.log('artick' , responseDataArticles);
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