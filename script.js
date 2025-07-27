
const BotaoConverter = document.getElementById("Convertidor");
const SelectConverterFor = document.getElementById("converter-para");
const SelectConverterFrom = document.getElementById("converter-de");

function ConvertValues() {

    const inputValue = document.getElementById("valor-digitado").value;
    const ValueToConvert = document.querySelector(".currency-value-to-convert");
    const DolarToday = 5.2;
    const EuroToday = 5.6;
    const LibraToday = 6.5;

    const ValueConverted = document.querySelector(".currency-value");

    if (SelectConverterFor.value === "dolar") {
        ValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(inputValue / DolarToday);
    }

    if (SelectConverterFor.value === "euro") {
        ValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputValue / EuroToday);
    }

    if (SelectConverterFor.value === "libra") {
        ValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format(inputValue / LibraToday);}

    ValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    }).format(inputValue);

}


function ChangeCurrency() {
    const ValorParaConverter = document.getElementById("Valor-para-converter");
    const CurrencyImage = document.querySelector(".currency-img")

    if (SelectConverterFor.value === "dolar") {
        ValorParaConverter.innerHTML = "Dólar";
        CurrencyImage.src = "./assets/estados-unidos (1) 1.png";
    }

    if (SelectConverterFor.value === "euro") {
        ValorParaConverter.innerHTML = "Euro";
        CurrencyImage.src = "./assets/euro.png";
    }

    if (SelectConverterFor.value === "libra") {
        ValorParaConverter.innerHTML = "Libra";
        CurrencyImage.src = "./assets/libra 1.png";
    }

    ConvertValues()
}

function ChangeCurrencyFrom() {
    const ValorDeConverter = document.getElementById("Valor-de-converter");
    const CurrencyImageFrom = document.querySelector(".currency-img-from");

    if (SelectConverterFrom.value === "real") {
        ValorDeConverter.innerHTML = "Real";
        CurrencyImageFrom.src = "./assets/brasil 2.png";
    }
    if (SelectConverterFrom.value === "dolar") {
        ValorDeConverter.innerHTML = "Dólar";
        CurrencyImageFrom.src = "./assets/estados-unidos (1) 1.png";
    }

    if (SelectConverterFrom.value === "euro") {
        ValorDeConverter.innerHTML = "Euro";
        CurrencyImageFrom.src = "./assets/euro.png";
    }

    if (SelectConverterFrom.value === "libra") {
        ValorDeConverter.innerHTML = "Libra";
        CurrencyImageFrom.src = "./assets/libra 1.png";
    }

    ConvertValues();
}



SelectConverterFrom.addEventListener("change", ChangeCurrencyFrom)
SelectConverterFor.addEventListener("change", ChangeCurrency)
BotaoConverter.addEventListener("click", ConvertValues)