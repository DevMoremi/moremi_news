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
        // const author = document.getElementById('authorName');
        // const time = document.getElementById('time');
        // const image = document.getElementById('image');
        // const link = document.getElementById('desc')

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

            // const background = document.getElementById('background');
            // background.classList.add('background')
            // row.appendChild(background)





        
            // for(let item of article){

                // author.innerHTML = article.author
                // console.log('article' , article)
            // }


            // <div class="news-item news-item-media1 d-flex col-md-6 d-md-block col-lg-4">
            //     <div class="news-item-img">
            //         <img src="images/newsImg_1.jpg" alt="" id="image">
            //     </div>
            //     <div class="news-item-content">
            //         <h3 class="pb-md-1 pt-md-2 " id="authorName">The Verge</h3>
            //         <p> <a href="" id="desc">
            //             The Verge's website homepage is vibrant
            //             a black and white theme with bright accents of orange and magenta</p>
            //         </a>
            //         <div class="time" id="time">
            //             <span class="mee">2hours ago</span>
            
            //             <span>Aug15,2025</span>
            //         </div>
            //     </div>
            // </div>
            
        });
        console.log('row' , row)
       
        // author.textContent = responseData.articles[1].author;
        

    }
    catch(error){
        console.log('error', error)

    }
}
cableNews()