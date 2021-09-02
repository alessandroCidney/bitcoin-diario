const cheerio = require('cheerio');
const axios = require('axios');

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