const hamburgerMenu = document.getElementById('hamburger')
const navLinks = document.getElementById('nav-links')
hamburgerMenu.addEventListener('click' , () =>{
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active')
})

const apiKey = 'fdecc86d9e33401b84c937187086dc96';
const heroUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=2&apiKey=${apiKey}`;
const newsUrl = `https://newsapi.org/v2/everything?domains=wsj.com&pageSize=12&apiKey=${apiKey}`;

async function bigHero(){
    try{
        const hero = await fetch(heroUrl);
        if(!hero){
            console('Try again')
        }
        const heroData = await hero.json();
        const heroArticles = heroData.articles;
        console.log('me' , heroArticles);
        const heroSection = document.getElementById("heroSection");
        heroSection.classList.add('d-md-flex');
        heroArticles.pop();

        heroArticles.forEach(article => {
            const bigHeroContainer = document.createElement('div');
            bigHeroContainer.classList.add('hero-section', 'order-md-2', 'p-md-3');
            const bigHeroAnchor = document.createElement('a');
            const bigHeroImgWrap = document.createElement('div');
            bigHeroImgWrap.classList.add('hero-img', 'me-2');
            const bigHeroImg = document.createElement('img');
            bigHeroImg.src = article.urlToImage;

            const bigHeroTextWrap = document.createElement('div');
            bigHeroTextWrap.classList.add('hero-text', 'p-3', 'p-md-0', 'mt-md-2')
            const bigHeroHeader = document.createElement('h2');
            bigHeroHeader.textContent = article.title;
            const bigHeroParagraph = document.createElement('p');
            bigHeroParagraph.classList.add('pt-2','pt-md-3');
            bigHeroParagraph.textContent = article.description;

            heroSection.appendChild(bigHeroContainer);
            bigHeroContainer.appendChild(bigHeroAnchor);
            bigHeroAnchor.appendChild(bigHeroImgWrap);
            bigHeroImgWrap.appendChild(bigHeroImg);

            bigHeroAnchor.appendChild(bigHeroTextWrap);
            bigHeroTextWrap.appendChild(bigHeroHeader);
            bigHeroTextWrap.appendChild(bigHeroParagraph);    
        
        });
        
    }
    catch(error){
        console.log('Cannot fetch API' , error);
    }  
}
bigHero()

async function smallHero() {
    try{
        const smallHero = await fetch(heroUrl);
        if(!smallHero){
            console.log('Cannot Fetch')
        }
        const smallHeroData = await smallHero.json();
        const smallHeroArticles = smallHeroData.articles;
        console.log('second', smallHeroData);
        const heroSection = document.getElementById('heroSection');
        heroSection.classList.add('d-md-flex');
        smallHeroArticles.shift();

        smallHeroArticles.forEach(article =>{
            const heroContainer = document.createElement('div')
            heroContainer.classList.add('hero', 'd-flex', 'pt-4', 'ps-3', 'pe-2', 'd-md-block', 'pt-md-3');
            const heroAnchor = document.createElement('a');
            const heroImgWrap = document.createElement('div');
            heroImgWrap.classList.add('hero-img', 'me-2');
            const heroImg = document.createElement('img');
            heroImg.src = article.urlToImage;


            const heroTextWrap = document.createElement('div');
            heroTextWrap.classList.add('hero-text2', 'mt-md-3')
            const heroHeader = document.createElement('h2');
            heroHeader.textContent = article.title;
            const heroParagraph = document.createElement('p');
            heroParagraph.classList.add('pt-2', 'd-none', 'd-md-block', 'pt-md-3', 'pb-md-4');
            heroParagraph.textContent = article.description;
            const heroSpan = document.createElement('span');
            heroSpan.classList.add('span');
            heroSpan.textContent = article.publishedAt;

            heroSection.appendChild(heroContainer);
            heroContainer.appendChild(heroAnchor);
            heroAnchor.appendChild(heroImgWrap);
            heroImgWrap.appendChild(heroImg);

            heroAnchor.appendChild(heroTextWrap);
            heroTextWrap.appendChild(heroHeader);
            heroTextWrap.appendChild(heroParagraph);
            heroTextWrap.appendChild(heroSpan);
            
        }) 
    }
    catch(error){
        console.log('Error Fetching Updates', error);
    }
}
smallHero()

async function newsUpdates() {
    try{
        const bbcNews = await fetch(newsUrl);
        if(!bbcNews){
            console.log('Try again')
        }
        const bbcData = await bbcNews.json();
        const bbcArticles = bbcData.articles;
        console.log('one', bbcArticles)
        const bbcWrapper = document.getElementById('wrapper');
        bbcWrapper.classList.add('wrapper', 'row')

        bbcArticles.forEach(article =>{
            const newsItemContainer = document.createElement('div');
            newsItemContainer.classList.add('news-item', 'd-flex', 'd-md-block', 'col-md-6', 'col-lg-4');
            const newsItemAnchor = document.createElement('a');
            const newsImgWrap = document.createElement('div');
            newsImgWrap.classList.add('news-item-img', 'me-md-0');
            const newsItemImg = document.createElement('img');
            newsItemImg.src = article.urlToImage;

            const newsItemText = document.createElement('div');
            newsItemText.classList.add('news-item-content', 'ms-2', 'ms-md-0');
            const newsItemHeader = document.createElement('h3');
            newsItemHeader.classList.add('mt-2' ,'mb-2');
            newsItemHeader.textContent = article.title;
            const newsItemParagraph = document.createElement('p');
            newsItemParagraph.classList.add('d-none', 'd-lg-block');
            newsItemParagraph.textContent = article.description;
            const newsItemSpan = document.createElement('span');
            newsItemSpan.classList.add('mb-md-2')
            newsItemSpan.textContent = article.author;

            bbcWrapper.appendChild(newsItemContainer);
            newsItemContainer.appendChild(newsItemAnchor);
            newsItemAnchor.appendChild(newsImgWrap);
            newsImgWrap.appendChild(newsItemImg);

            newsItemAnchor.appendChild(newsItemText);
            newsItemText.appendChild(newsItemHeader);
            newsItemText.appendChild(newsItemParagraph);
            newsItemText.appendChild(newsItemSpan);

            const background = document.createElement('div');
            background.classList.add('background');
            bbcWrapper.appendChild(background);

        })

    }
    catch(error){
        console.log('Cannot Fetch', error)
    }
    
}
newsUpdates()