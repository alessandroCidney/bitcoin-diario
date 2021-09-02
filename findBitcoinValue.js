const cheerio = require('cheerio');
const axios = require('axios');

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