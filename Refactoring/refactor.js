/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

const salesTax = 0.08;
const shippingPrice = 4.0;

const items = [
  {name:'shirt', price: 30.99},
  {name:'sweatshirt', price: 40.99},
  {name: 'smallPoster', price: 15.99},
  {name: 'largePoster', price: 22.99},
  {name: 'mug', price: 12.99}
];

items.forEach(item => {
  let priceAfterTax = item.price * (1 + salesTax);
  let priceAfterShipping = priceAfterTax + shippingPrice;
  let priceAfterShippingRounded = priceAfterShipping.toFixed(2);
  console.log(priceAfterShippingRounded);
});



 

