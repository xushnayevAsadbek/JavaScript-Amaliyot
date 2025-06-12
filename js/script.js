let numberOfSeries
// console.log(`Siz ${numberOfSeries} ta serial ko’rdingiz.`)
startApp()
const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	privat: false,
}
setFavoriteSeries()
detectingLevel()
writeGenres()
showDB(seriesDB.privat)

function startApp() {
	numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')
	while (
		numberOfSeries == '' ||
		numberOfSeries == null ||
		isNaN(numberOfSeries)
	) {
		numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')
	}
}

function setFavoriteSeries() {
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
}

function detectingLevel() {
	if (seriesDB.count < 5) {
		console.log('Kam serial ko’ripsiz')
	} else if (seriesDB.count > 5 && seriesDB.count < 10) {
		console.log('Siz classik tamoshabin ekansiz')
	} else if (seriesDB.count > 10) {
		console.log('Siz serialchi zvezda ekansiz')
	}
}
function writeGenres() {
	for (let i = 0; i < 3; i++) {
		let genre = prompt(`Sizning sevimli janringiz? ${i + 1}`, '')
		seriesDB.genres[i] = genre
	}
}
function showDB(isPrivate) {
	if (!isPrivate) {
		console.log(seriesDB)
	} else {
		console.log('Ma’lumotlar maxfiy')
	}
}

// console.log(seriesDB)
