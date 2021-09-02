// Importando as bibliotecas cheerio e axios
const cheerio = require('cheerio');
const axios = require('axios');

// Captando a cotação do Dólar por meio de web scraping
async function findUSDolarValue() {
	try {
		const { data } = await axios.get('https://dolarhoje.com/'); 

		const $ = cheerio.load(data);

		const usDolarValueInReais = $('input').filter('#nacional').attr('value');

		return `R$ ${usDolarValueInReais}`;

	} catch (err) {
		console.log(`ERROR: ${err}`);
	}

	return false;
}

module.exports = findUSDolarValue;