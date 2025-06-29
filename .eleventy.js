const path = require('path');
const markdownIt = require("markdown-it");


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/images');
    // Copiez les fichiers statiques de Reveal.js
    eleventyConfig.addPassthroughCopy({
        'node_modules/reveal.js/dist': 'reveal.js',
        'node_modules/reveal.js/plugin': 'reveal.js/plugin',
    });

    // Configuration pour les fichiers Markdown
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!-- excerpt -->"
    });
    // Ajoutez ce filtre personnalisé
    eleventyConfig.addFilter("splitSlides", function(content) {
        return content.split('<hr>').map(slide => slide.trim());
    });
// Ajoutez cette ligne pour créer une collection de présentations
    eleventyConfig.addCollection("presentations", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/presentations/**/*.md");
    });

    const options = {
        html: true,
        breaks: true,
        linkify: true
    };

    // Configurez markdown-it sans le plugin mermaid
    const md = markdownIt(options);
    eleventyConfig.setLibrary("md", md);

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_layouts',
            layouts: '_layouts'
        }
    };
};