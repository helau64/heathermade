import include from "./app/_11ty/filters/include.js";
import workMedia from "./app/_11ty/collections/workMedia.js";
import { load } from "js-yaml";
import { DateTime } from "luxon";
import htmlmin from "html-minifier-terser";
import pageAssetsPlugin from 'eleventy-plugin-page-assets';
import pluginRss from "@11ty/eleventy-plugin-rss";

export default async function(eleventyConfig) {
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

  eleventyConfig.addFilter("include", include)

  // Add work collections
  eleventyConfig.addCollection("workPosts", async (collectionsApi) => {
    return collectionsApi.getFilteredByTag("work");
  });

  eleventyConfig.addCollection("workMedia", workMedia)

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
  eleventyConfig.addDataExtension("yaml", (contents) => load(contents));

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
}