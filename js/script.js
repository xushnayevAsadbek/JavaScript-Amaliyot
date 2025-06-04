let numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')
// console.log(`Siz ${numberOfSeries} ta serial ko’rdingiz.`)

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	privat: false,
}

for (let i = 0; i < 2; i++) {
	const seriesName = prompt('Oxirgi ko’rgan serialingiz?', '')
	const seriesRating = prompt('Uning reytingi necha?', '')
	if (
		seriesName !== null &&
		seriesRating !== null &&
		seriesName != '' &&
		seriesRating != ''
	) {
		seriesDB.series[seriesName] = seriesRating

		console.log('Done')
	} else {
		i--
	}
}
if (seriesDB.count < 5) {
	console.log('Kam serial ko’ripsiz')
} else if (seriesDB.count > 5 && seriesDB.count < 10) {
	console.log('Siz classik tamoshabin ekansiz')
} else if (seriesDB.count > 10) {
	console.log('Siz serialchi zvezda ekansiz')
}

console.log(seriesDB)
