// Funções de outros arquivos
const findBitcoin = require('./findBitcoinValue');
const findDolar = require('./findUSDolarValue');
const findDate = require('./findDate');

// Importando as bibliotecas Twit e dotenv
const Twit = require('twit');
require('dotenv').config();

// Inicializando o bot
const Bot = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
	timeout_ms: 60*1000
});

// Função principal
async function sendTweet(send=true) {
	const date = findDate();

	const bitcoinValue = await findBitcoin();
	const dolarValue = await findDolar();

	// Conteúdo do tweet que será enviado
	let tweet = `📅 ${date}\n\n🪙 1 Bitcoin - ${bitcoinValue}\n💵 1 Dólar - ${dolarValue}\n\n#bitcoin #dollar`;

	// Por padrão, o tweet será enviado imediatamente
	// Caso não deseje isso, ao invocar a função, passe false como parâmetro
	if(send) {
		Bot.post('statuses/update', { status: tweet }, (err, data, response) => {
			console.log("Dados: ", data);
		});	
	} else {
		console.log('O Tweet não será enviado');
	}
}

sendTweet()