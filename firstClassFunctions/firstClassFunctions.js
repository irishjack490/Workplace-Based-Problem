const products = [
["t-shirt", "sweater", "polo"],
["mug", "small_poster", "medium_poster", "large_poster"],
["sweatpants", "shorts", "skirt", "baseball_cap"],
];

/**
 * On our digital storefront, we advertise products in three different places:
 * the carousel, the main display grid, and the sidebar.
 *
 * In each of these places, we want to format the names of our products the same way
 *
 * To reformat the names, we use map() to apply a callback function to each
 * element of the array, and return a new array with all the modified elements
 *
 * We use the same callback function on each of the three product displays,
 * but using an anonymous function is causing the code to be very repetetive.
 *
 * Can you refactor this code to be less repetitive?
 */

const products = [
't-shirt', 'sweater', 'polo',
'mug', 'small_poster', 'medium_poster', 'large_poster',
'sweatpants', 'shorts', 'skirt', 'baseball_cap'
];

function modifyProducts (products){
  
return products.charAt(0).toUpperCase(products) + products.slice(1);
}
console.log(products.map(modifyProfucts); // This returns array with the first letter capitalized

function removeUnderScore (products){
  return products.replace(/_/g, ' ');

}
console.log(products.map(removeUnderScore)); //This returns a 2nd array without underscore 

