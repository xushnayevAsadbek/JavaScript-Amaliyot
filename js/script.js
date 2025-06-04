let numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')
console.log(`Siz ${numberOfSeries} ta serial ko’rdingiz.`)

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	privat: false,
}

let seriesName = prompt('Oxirgi ko’rgan serialingiz?', '')
// seriesDB.series[seriesName] = seriesName
let seriesRating = prompt('Uning reytingi necha?', '')
seriesDB.series[seriesName] = seriesRating

console.log(seriesDB)
