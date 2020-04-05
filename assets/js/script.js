import themes from './themes';
import articles from './articles';

// themes
const themeImagesPath = 'assets/img/themes/';

let themesContainer = document.getElementById('themes');
let gradient = 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%)';

themes.forEach(theme => {
    let aElt = document.createElement('a');
    aElt.innerHTML = /*html*/`
        <h5 class="theme-title">${theme.title}</h5>
        <p class="theme-summary">${theme.description}</p>`;
    
    aElt.classList.add('theme');
    aElt.href = `themes?t=${theme.slug}`;
    aElt.style.backgroundImage = `${gradient}, url('${themeImagesPath}${theme.image}')`;
    themesContainer.appendChild(aElt);
});

// articles
const articleImagesPath = 'assets/img/articles/' ;

let articlesContainer = document.getElementById('articles');

articles.forEach(article => {
    let aElt = document.createElement('a');
    aElt.innerHTML = /* html */`
        <div class="content">
            <h5 class="article-title"><span>${article.title}</span></h5>
            <p class="summary">${article.summary}</p>
            <span class="date">${article.date}</span>
        </div>
        <img src="${articleImagesPath}${article.image}" alt="${article.imageInfo}">
    `;
    
    aElt.href = `articles?a=${article.slug}`;
    aElt.classList.add('article');
    articlesContainer.appendChild(aElt);
});
