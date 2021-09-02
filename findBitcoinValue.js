// Importando as bibliotecas cheerio e axios
const cheerio = require('cheerio');
const axios = require('axios');

// Captando a cotação do Bitcoin por meio de web scraping
async function findBitcoinValue() {
	try {
		const { data } = await axios.get('https://dolarhoje.com/bitcoin-hoje/');

		const $ = cheerio.load(data);

		const bitcoinValueInReais = $('input').filter('#nacional').attr('value');

		return `R$ ${bitcoinValueInReais}`;

	} catch (err) {
		console.log(`ERROR: ${err}`);
	}

	return false;

}

module.exports = findBitcoinValue;