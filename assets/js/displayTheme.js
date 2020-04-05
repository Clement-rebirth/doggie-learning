import themes from './themes.js';

const themeImagesPath = '../assets/img/themes/';

export default function displayTheme(themeSlug) {
    let theme = getThemeWithSlug(themeSlug, themes);

    if (!theme) throw new Error('404');

    document.title = theme.title;
    document.getElementById('theme-title').textContent = theme.title;
    document.getElementById('theme-description').textContent = theme.description;
    document.getElementById('theme-image').innerHTML = /* html */`
        <img src="${themeImagesPath}${theme.image}" alt="image du thème">
    `;

    // for each resource -> displays it (try to display them like the articles but using separators)
    let resources = theme.resources;
    let noResources = true;

    if (resources.books.length > 0) {
        displayResources('Livres', resources.books);
        noResources = false;
    }

    if (resources.articles.length > 0) {
        displayResources('Articles', resources.articles);
        noResources = false;
    }

    if (resources.videos.length > 0) {
        displayResources('Vidéos', resources.videos);
        noResources = false;
    }

    if (noResources) {
        document.getElementById('resources').innerHTML = /* html */`
            <p class="under-construction-info">Ce thème est en cours de création, si vous avez des suggestions n'hésitez pas à nous <a class="primary-color" href="mailto:clem.0076@gmail.com?subject=Doggie%20Learning%20-%20Suggestion%20-%20${encodeURI(theme.title)}">contacter</a></p>       `;
    }
}

function getThemeWithSlug(slug, themes) {
    return themes.find(theme => theme.slug === slug);
}

function displayResources(categoryName, resources) {
    let resourcesContainer = document.getElementById('theme-resources');

    resourcesContainer.innerHTML += /* html */`
        <h4 class="category-name">${categoryName}</h4>
        <div class="hr"></div>
    `;

    resources.forEach(resource => {
        resourcesContainer.innerHTML += /* html */`
            <a target="_blank" class="resource" href="${resource.link}">
                <h5 class="primary-color resource-title"><span>${resource.title}</span></h5>
                <p class="primary-color resource-description">${resource.description}</p>
            </a>
        `;
    });
}
 