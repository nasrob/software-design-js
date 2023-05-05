const people = [
    { personal: 'Jean', family: 'Jennings'},
    { personal: 'Marlyn ', family: 'Wescoff ' },
    { personal: 'Ruth', family: 'Lichterman' },
    { personal: 'Betty ', family: 'Snyder ' },
    { personal: 'Frances ', family: 'Bilas ' },
    { personal: 'Kay', family: 'McNulty' }
]

const result = people.filter(person => person.family < 'M')
console.log(result)

const people2 = [
    { personal: 'Christine ', family: 'Darden ' },
    { personal: 'Mary', family: 'Jackson' },
    { personal: 'Katherine ', family: 'Johnson ' },
    { personal: 'Dorothy ', family: 'Vaughan ' }
]

for (const person of people2) {
    console.log(`${person.family}, ${person.personal}`)
}