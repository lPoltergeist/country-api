<script>
import CardBox from '../components/CountriesCard/CountriesCard.vue'
import countriesData from '../Data/countries.json'

export default {
    name: "Home",
    components: {
        CardBox,
    },

    data() {
        return {
            countries: countriesData
        }
    },

    props: {
        themeColor: String,
    }
}

</script>

<template>
    <main>
        <header>
            <div :id="themeColor">
                <img src="../assets/magnifying-glass.png" alt="search" />
                <input :id="themeColor" placeholder="Search for a country..." type="search" />
            </div>

            <select :id="this.themeColor">
                <option value="" disabled selected>Filter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </header>

        <section>
            <CardBox  v-for="countrie in countries" :key="countrie.name" :link="countrie.name"
                :name="countrie.name" :flag="countrie.flags.svg" :population="countrie.population.toLocaleString(`en-US`)" :region="countrie.region"
                :capital="countrie.capital" />
        </section>
    </main>
</template>

<style scoped>
main {
    margin: 0 5rem;


    align-items: center;

}

header {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

div{
    background-color: #fff;
    border-radius: 10px;
    padding: 0 1rem;

    display: flex;
    align-items: center;
}

input {
    margin-left: 1rem;
    padding-left: 1rem;
    border: none;
    outline: none;
    border-radius: 10px;
    height: 2.5rem;
    width: 20rem;
}

select {
    height: 2.5rem;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 0 1rem;
    border-right: 1rem solid transparent;
}

#light {
    background-color: white;
}

#dark {
    background-color: hsl(209, 23%, 22%);;
}

section {
    max-width: 90vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem 4rem;

}

@media (max-width: 768px) {
    main {
        margin: 0 1rem;
    }

    header {
        flex-direction: column;
        align-items: start;
        margin: 2rem 0;
        height: 7rem;
    }

    #searchContainer {
        width: 100%;
    }

    select {
        margin: 1rem 0;
    }

    section {
        margin: o auto;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
}
</style>