const filter = document.getElementById("filter");
const options = document.querySelector(".options");

const getCountryInfo = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    return countries;
}

const renderCountries = async () => {
    const countries = await getCountryInfo();
    const container = document.querySelector(".country-container");
    for (const item of countries) {
        // creating elements
        const countryWrapper = document.createElement("div");
        const countryFlag = document.createElement("img");
        const countryName = document.createElement("h4");
        const detailContainer = document.createElement("div");
        const population = document.createElement("p");
        const region = document.createElement("p");
        const capital = document.createElement("p");
        // setting values for elements
        countryWrapper.classList.add("country-item");
        countryFlag.classList.add("flag");
        countryName.classList.add("capital");
        detailContainer.classList.add("details");
        countryFlag.src = item.flags.svg;
        countryName.innerText = item.name.common;
        population.innerText =  `Population: ${item.population}` ;
        region.innerText =  `Region: ${item.region}` ;
        capital.innerText = ` Capital: ${item.capital} `;
        // appending elements
        detailContainer.append(population, region, capital);
        countryWrapper.append(
            countryFlag,
            countryName,
            detailContainer
        );
        container.appendChild(countryWrapper);
    }
}

renderCountries();


filter.addEventListener("click", () => {
    options.classList.toggle('open');
});