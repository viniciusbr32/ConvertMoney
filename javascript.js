const button = document.getElementById('convert-button');
const currencySelect = document.getElementById('currency-select');

const dolar = 5.2;
const euro = 5.9;
const bitcoin = 0.0000028;

const convertValues = () => {
	const inputReais = document.getElementById('input-real').value;
	const realValueText = document.getElementById('real-value-text');
	const currencyValueText = document.getElementById('currency-value-text');

	realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(inputReais);

	if (currencySelect.value === 'US$ Dólar americano') {
		currencyValueText.innerHTML = new Intl.NumberFormat('en-us', {
			style: 'currency',
			currency: 'USD',
		}).format(inputReais / dolar);
	}

	if (currencySelect.value === '€ Euro') {
		currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'EUR',
		}).format(inputReais / euro);
	}

	if (currencySelect.value === 'Bitcoin') {
		currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BTC',
			minimumFractionDigits: 8, // Mínimo de 8 casas decimais para representar Bitcoin
		}).format(bitcoin * inputReais);
	}
};

changeCurrency = () => {
	const currencyName = document.getElementById('currency-name');
	const currencyImg = document.getElementById('currency-img');
	if (currencySelect.value === '€ Euro') {
		currencyName.innerHTML = 'Euro';
		currencyImg.src = './assets/euro.svg';
	}

	if (currencySelect.value === 'US$ Dólar americano') {
		currencyName.innerHTML = 'Dólar Americano';
		currencyImg.src = './assets/dolar.svg';
	}

	if (currencySelect.value === 'US$ Dólar americano') {
		currencyName.innerHTML = 'Dólar Americano';
		currencyImg.src = './assets/dolar.svg';
	}

	if (currencySelect.value === 'Bitcoin') {
		currencyName.innerHTML = 'Bitcoin';
		currencyImg.src = './assets/bitcoin.svg';
	}
	convertValues();
};

button.addEventListener('click', convertValues);
currencySelect.addEventListener('change', changeCurrency);
