const path = require('path');
const markdownIt = require("markdown-it");


module.exports = function(eleventyConfig) {
    // Définition globale du pathPrefix
    const pathPrefix = process.env.NODE_ENV === 'production' ? "/11tyLabSlides" : "";

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
    // gestion des url dans le fichier index - VERSION CORRIGÉE
    eleventyConfig.addShortcode("link", function(url, text) {
        // Version simple qui fonctionne avec le pathPrefix
        return `<a href="${pathPrefix}${url}">${text}</a>`;
    });

    // Filtre pour transformer les URLs (utile pour les liens d'images en markdown)
    eleventyConfig.addFilter("url", function(url) {
        return `${pathPrefix}${url}`;
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
        pathPrefix: pathPrefix,
        dir: {
            input: 'src',
            output: '_site',
            includes: '_layouts',
            layouts: '_layouts'
        }

    };
};