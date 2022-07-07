
let temp;
let vysledok;

document.getElementById("submit").onclick=function(){
    //zadefinovanie co teploty
    const TeplotaCbt = document.getElementById("TeplotaCbt");
    const TeplotaFBt = document.getElementById("TeplotaFBt");

    //ziskanie hodnoty teploty
    temp = document.getElementById("teplota").value;

    //zvolenie aka je teplota a vyplutie vysledku
    if(TeplotaCbt.checked){
        temp = toFahrenheit(temp);

        document.getElementById("result").innerHTML = temp+"°F";

    }else if(TeplotaFBt.checked){
        temp = toCelsius(temp);

        document.getElementById("result").innerHTML = temp+"°C";

    } else{
        alert("Zvol teplotu aku zadavas");
    }

    console.log(temp);
}


//funkcia pre premenu na celsius
function toCelsius(temp){
    return (temp-32)*(5/9);
}

//funkcia pre premenu na farenheit
function toFahrenheit(temp){
    return (temp*9/5+32);
}

