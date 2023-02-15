const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const cities = Object.keys(citiesAndCountries);
const countries = Object.values(citiesAndCountries);
const result = [];
let item;

for (let i = 0; i < cities.length; i++) {
	item = `${cities[i]} — это ${countries[i]}`;
	result.push(item);
}

console.log(result);