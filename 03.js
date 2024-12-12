const netflix = ["witcher"]
const prime = ["Strangers thing"]
prime.push(netflix);
console.log(prime);
const series = [...netflix,...prime]
