// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart total.
function calculateTotal(items) {
  let yhteensä = 0
  const priceTaulukko = items.map((a) => a.price)
  for (const summa of priceTaulukko) {
    yhteensä += summa
  }
  return yhteensä
}

// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart average.
function calculateAvg(items) {
  let yhteensä = 0
  const priceTaulukko = items.map((a) => a.price)
  for (const summa of priceTaulukko) {
    yhteensä += summa
  }
  const keskiarvo = yhteensä / priceTaulukko.length
  return keskiarvo
}

export { calculateTotal, calculateAvg }
