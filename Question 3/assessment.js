function checkPhonenumber(phoneNumber) {
  const siistitty1 = phoneNumber.replace(/-/g, "") //poistettu kaikki viivat
  const siistitty2 = siistitty1.replace(/ /g, "") //poistettu kaikki white space

  const fin1 = siistitty2.slice(0, 2)
  const fin2 = siistitty2.slice(0, 3)

  if (siistitty2.length < 7) {
    return false
  }
  if (fin1 !== "04" && fin2 !== "050") {
    return false
  }
  return true
}

console.log(checkPhonenumber("0401234567")) // Pitäisi palauttaa true
console.log(checkPhonenumber("040-1234567")) // Pitäisi palauttaa true.
console.log(checkPhonenumber("666-1234567")) // Pitäisi palauttaa false.
console.log(checkPhonenumber("040-70")) // Pitäisi palauttaa false. Liian lyhyt.
console.log(checkPhonenumber(" -   -  0 - 4  0-  7 - 0 -      ")) // Pitäisi palauttaa false. Liian lyhyt.
console.log(checkPhonenumber("04444444444"))
console.log(checkPhonenumber("050"))
