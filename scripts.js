const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')



const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const btc = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro);
    }

    if (select.value === 'Bitcoin') {
        currencyValueText.innerHTML = (inputReais / btc)/1000;
    }


}

changeCurrency = () => {
    const currecyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currecyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/estados-unidos.png'
    }

    if (select.value === '€ Euro') {
        currecyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }

    if (select.value === 'Bitcoin') {
        currecyName.innerHTML = 'BTC'
        currencyImg.src = './assets/BTC.png'
    }

    convertValues()

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)