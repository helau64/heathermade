const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const htmlmin = require("html-minifier-terser");
const pageAssetsPlugin = require('eleventy-plugin-page-assets');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "d LLLL yyyy"
    );
  });

  eleventyConfig.addFilter("include", require("./app/_11ty/filters/include.js"))

  // Add work collections

  eleventyConfig.addCollection("workPosts", function(collectionApi) {
    return collectionApi.getFilteredByTag("work");
  });

  eleventyConfig.addCollection("workMedia", require("./app/_11ty/collections/workMedia.js"))

  // Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all"].indexOf(tag) === -1);
	});
  
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy work post images to /_Site
  eleventyConfig.addPlugin(pageAssetsPlugin, {
    mode: "directory",
    postsMatching: "app/content/posts/work/*/*.md",
    recursive: true
  });

  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);
  
  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy("./app/admin/config.yml");
  eleventyConfig.addPassthroughCopy("./app/admin/index.html");
  eleventyConfig.addPassthroughCopy({"./app/assets/images": "./static/images"})
  eleventyConfig.addPassthroughCopy({"./app/assets/fonts": "./static/fonts"})

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./app/favicon.ico");
  eleventyConfig.addPassthroughCopy("./app/apple-touch-icon.png");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "app/",
    },
    htmlTemplateEngine: "njk",
  };
};
