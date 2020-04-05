import articles from './articles';

export default function displayArticle(articleSlug) {
    let article = getArticleWithSlug(articleSlug, articles);

    const articleImagesPath = '../assets/img/articles/';

    if (!article) throw new Error('404');

    document.title = article.title;
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-summary').textContent = article.summary;
    document.getElementById('article-content').innerHTML = article.content;
    document.getElementById('article-image').innerHTML = /* html */`
        <img src="${articleImagesPath}${article.image}" alt="${article.imageInfo}">
    `;

    let sourcesContainer = document.getElementById('sources');

    sourcesContainer.innerHTML += '<ul>';

    article.sources.forEach(source => {
        sourcesContainer.innerHTML += /* html */`
            <li><a class="primary-color" href="${source}" target="_blank">${source}</a></li>
        `;
    });

    sourcesContainer.innerHTML += '</ul>';
}

function getArticleWithSlug(slug, articles) {
    return articles.find(article => article.slug === slug);
}
