import displayTheme from './displayTheme';
import displayArticle from './displayArticle';

let params = [];

window.location.search
            .substring(1)
            .split('&')
            .forEach(item => {
                let param = item.split('=');
                params.push([param[0], param[1]]);
            });
            
try {
    // we determine if we wanna display an article or a theme
    if (paramExists('a', params)) {
        // article
        displayArticle(params[0][1]);
    } else if (paramExists('t', params)) {
        // theme
        displayTheme(params[0][1]);
    } else {
        window.location.replace('../'); // go to home page
    }
} catch(error) {
    console.error(error);
    // window.location.replace('/404');
}

function paramExists(paramName, params) {
    return params.find(paramArray => paramArray[0] === paramName);
}
