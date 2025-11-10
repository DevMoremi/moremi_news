const hamburgerMenu = document.getElementById('hamburger')
const navLinks = document.getElementById('nav-links')

hamburgerMenu.addEventListener('click' , () =>{
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active')
})
const apiKey = 'fdecc86d9e33401b84c937187086dc96';
const url =  `https://newsapi.org/v2/everything?q=tesla&pageSize=10&sortBy=popularity&apiKey=${apiKey}`

async function cableNews() {
    try{
        const response = await fetch(url);

        if(!response){
            console.log("could not fetch data")
        }
        const responseData = await response.json();
        console.log('yoo' , responseData)

        let articleItems = responseData.articles;
        console.log('woooo',  articleItems);
        const row = document.getElementById('row');

        articleItems.forEach(article => {

            const newsItemContainer = document.createElement('div');
            newsItemContainer.classList.add('news-item', 'd-flex', 'col-md-6', 'd-md-block','col-lg-4');

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('news-item-img')
            const img = document.createElement('img');
            img.src = article.urlToImage;
            imgContainer.appendChild(img);

            newsItemContainer.appendChild(imgContainer);

            const newsItemContent = document.createElement('div')
            newsItemContent.classList.add('news-item-content')
            const header = document.createElement('h3');
            header.textContent = article.title;
            header.classList.add('pb-md-1', 'pt-md-2');
            const paragraph = document.createElement('p');
            paragraph.classList.add('firstParagraph')
            const paragraphLink = document.createElement('a');
            const authorName = document.createElement('span');
            const breakTag = document.createElement('br');
            const time = document.createElement('p');
            paragraphLink.href = article.url;
            paragraphLink.textContent = article.description;
            newsItemContent.appendChild(header);
            paragraph.appendChild(paragraphLink);
            newsItemContent.appendChild(paragraph);
            newsItemContent.appendChild(authorName);
            newsItemContent.appendChild(time);
            authorName.classList.add('firstSpan');
            authorName.appendChild(breakTag);
            time.classList.add('time');
            authorName.textContent = article.author;
            time.textContent = article.publishedAt;

            newsItemContainer.appendChild(newsItemContent);

            const background = document.createElement('div');
            background.classList.add('background');
            row.appendChild(background);

            row.appendChild(newsItemContainer);

        });
        console.log('row' , row)        
    }
    catch(error){
        console.log('error', error)
    }
}
cableNews()