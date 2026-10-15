async function searchCountry() {
    let country = document.getElementById("countryInput").value;
    let message = document.getElementById("message");

    if (country === "") {
        message.innerHTML = "Please enter a country name!";
        return;
    }

    try {
        let response = await fetch(
            `https://restcountries.com/v3.1/name/${country}`
        );

if (!response.ok) {
    throw new Error("Country not found");
}

let data = await response.json();
let c = data[0];

document.getElementById("flag").src = c.flags.png;
document.getElementById("countryName").innerHTML = c.name.common;
document.getElementById("capital").innerHTML = c.capital ? c.capital[0] : "N/A";
document.getElementById("population").innerHTML = c.population.toLocaleString();
document.getElementById("region").innerHTML = c.region;
document.getElementById("currency").innerHTML =
    c.currencies ? Object.values(c.currencies)[0].name : "N/A";

document.getElementById("result").classList.remove("hidden");
message.innerHTML = "";

    } catch (error) {
    message.innerHTML = "Country not found!";
    document.getElementById("result").classList.add("hidden");
}
}

