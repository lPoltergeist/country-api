<script>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import countriesData from '../Data/countries.json';

export default {
    name: 'CountryDetailed',

    setup() {
        const route = useRoute()
        const countryParams = route.params.country;


        const choosedCountry = countriesData.filter((countrie) => countrie.name === countryParams);
        const country = choosedCountry[0];

        const borders = country.borders;
        const languages = country.languages;
        const currencies = country.currencies;

        return {
            country,
            borders,
            languages,
            currencies,
        }
    },
}
</script>


<template>
    <Main>
        <header>
            <RouterLink to="/">
                <button><img src="../assets/arrow-left.png" />Back</button>
            </RouterLink>
        </header>

        <section>

            <div id="flagDiv">
                <img id="flag" :src="country.flag" alt="flag" />
            </div>

            <article>
                <h3>{{ country.name }}</h3>

                <div id="details">
                    <div id="detailed">
                        <p>Native Name: <span>{{ country.nativeName }}</span></p>
                        <p>Population: <span>{{ country.population.toLocaleString("en-US") }}</span></p>
                        <p>Region: <span>{{ country.region }}</span></p>
                        <p>Sub Region: <span>{{ country.subregion }}</span></p>
                        <p>Capital: <span>{{ country.capital }}</span></p>

                    </div>

                    <div id="detailed">
                        <p>Top Level Domain: <span>{{ country.topLevelDomain[0] }}</span></p>
                        <p>Currencies: <span v-for="currencie in currencies">{{ currencie.name + " " }}</span></p>
                        <p>Languages: <span v-for="language in languages">{{ language.name + " " }}</span></p>
                    </div>
                </div>

                <div id="border">
                    <h4>Border Countries:</h4>
                    <button v-for="border in borders" id="borderButton">{{ border }}</button>
                </div>

            </article>


        </section>

    </Main>
</template>

<style scoped>
main {
    width: 100w;
    margin: 5rem;
}

button {
    box-shadow: 0px 2px 10px -5px rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    outline: none;

    width: 6.5rem;
    height: 2rem;

    transition: 0.2s ease-in-out;
    cursor: pointer;
}

button:hover {
    scale: 1.1;
}

#flag {
    height: auto;
    width: 90%;
}

section {
    margin: 5rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#details {
    display: flex;

}

#detailed {
    margin: 2rem 0;
    background-color: transparent;

}

#detailed:first-child {
    margin-right: 5rem;
}

p {
    font-weight: 600;
    font-size: 1.1rem;
}

span {
    font-weight: 300;
    font-size: 1rem;
}

#border {
    display: flex;
    align-items: center;
    height: 3rem;
    margin-top: 2rem;
    max-width: 25rem;
    overflow: auto;
}


h4 {
    margin-right: .5rem;
}

#borderButton {
    width: fit-content;
    padding: 0 1rem;
    margin: 0 .5rem;
    border-radius: 5px;
}

@media (max-width: 768px) {
    main {
        margin: 2rem 0 1rem 0;
    }

    header {
        margin: 0 1rem;
    }

    section {
        flex-direction: column;
        justify-content: center;
        margin: 2rem .5rem;
    }

    #flag {
        width: 100%;
        margin-bottom: 1.5rem;
    }

    #details {
        flex-direction: column;
    }
}
</style>