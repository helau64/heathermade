const lodash = require("lodash");
const slugify = require("slugify");

/**
 * // https://www.webstoemp.com/blog/basic-custom-taxonomies-with-eleventy/
 * Get all unique key values from a collection
 *
 * @param {Array} collectionArray - collection to loop through
 * @param {String} key - key to get values from
 */
function getAllKeyValues(collectionArray, key) {
    // get all values from collection
    let allValues = collectionArray.map((item) => {
        let values = item.data[key] ? item.data[key] : [];
        return values;
    });

    // flatten values array
    allValues = lodash.flattenDeep(allValues);
    // to lowercase
    allValues = allValues.map((item) => item.toLowerCase());
    // remove duplicates
    allValues = [...new Set(allValues)];
    // order alphabetically
    allValues = allValues.sort(function (a, b) {
        return a.localeCompare(b, "en", { sensitivity: "base" });
    });
    // return
    return allValues;
}

/**
 * Transform a string into a slug
 * Uses slugify package
 *
 * @param {String} str - string to slugify
 */
function strToSlug(str) {
    const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true,
    };
  
    return slugify(str, options);
}

module.exports = function(collectionApi) {
    let media = getAllKeyValues(
        collectionApi.getFilteredByTag("work"),
        "medium"
      )
  
      let mediaMap = media.map((medium => ({
        name: medium,
        slug: strToSlug(medium)
      })))
  
      return mediaMap;
};