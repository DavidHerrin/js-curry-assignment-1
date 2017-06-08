'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      const retArray = []

      for (let cart of carts) {
        const custTotalArray = { customer: cart.customer }
        let total = 0

        for (let item of cart.items) {
          for (let listing of listings) {
            if (listing.name === item) {
              total += listing.price
            }
          }
        }

        custTotalArray.total = total
        retArray.push(custTotalArray)
      }
      return retArray
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
