import allCountries from './data.js';
console.log(allCountries);
// pasizymiu vieta i kuria js pagalba printinsiu elementus
const my_main_div = document.getElementById('main_div');


allCountries.map((country, index)=>{
    console.log(index +1); // numeracija
    console.log(country.name.common);
    // kuriu elementa i kuri irasysiu salies pavadinima
    const one_country_info = document.createElement('div'); // kiekviena salis turi savo div'a
    const my_country_name = document.createElement('h2');
    const my_img = document.createElement('img');
    //idedu teksta, reiksme, kintamaji i sukurta elementa
    my_country_name.innerText = country.name.common;
    my_img.src = country.flags.png;
    //idedu i main div'a savo sukurta elementa su contentu
    my_main_div.appendChild(one_country_info); // i main div'a idedam kiekvienu saliu div'us
    one_country_info.appendChild(my_img);
    one_country_info.appendChild(my_country_name);


const my_country_capital = document.createElement('h3'); // kintamasis sostinem
    if(Array.isArray(country.capital)){ // jei array spausdinam capital
        console.log(country.capital[0]);
        my_country_capital.innerText = country.capital[0]; // jei sostine yra spausdinam
    } else {
        console.log("info nerasta...")
        my_country_capital.innerText = "Info nerasta..."
    }
    console.log("________________")
    one_country_info.appendChild(my_country_capital);
    my_main_div.appendChild(one_country_info);
});
