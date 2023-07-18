const _ = require("lodash");

// since we don't have a db, place the restrictions rules here 
const restrictionRules = [];

/**
 * @summary Return whether a particular product can ship based on restriction rules
 * @params {Object} The cart to be evaluated (including address)
 * @return {Array<Object>} An array of productId and boolean of whether each item in the cart can ship 
 * e.g. one item per product on the cart: [{ productId: product1: canShip: false }]
 */
function canShip(cart) {
  // place code here
}

const cart = {
  products: [{
      productId: "product1",
      name: "Nike Air Jordans",
      category: "Athletic Shoes",
      description: "These are the famous Air Jordans that everyone talks about",
      brand: "Nike",
      size: "XL",
      color: "red",
      price: {
        currency: "USD",
        value: 89.99
      }
    },
    {
      productId: "product2",
      name: "NRS Universal Kayak Block",
      category: "Kayak Accessory",
      description: "A foam block that protects your kayak and your car",
      brand: "NRS",
      size: "One",
      color: "black",
      price: {
        currency: "USD",
        value: 36.95
      }
    },
  ],
  address: {
    address1: "123 Main St.",
    address2: null,
    city: "St. Louis",
    state: "MO",
    zipCode: "61301",
    countryCode: "US"
  },
  name: {
    firstName: "Dave",
    lastName: "Burnham"
  }
}

const results = canShip(cart);
console.log(results);
