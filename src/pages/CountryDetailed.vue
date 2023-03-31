<script>
export default {
    name: 'CountryDetailed',
}
</script>

<template>
    <Main>
        <header>
            <button><img src="../assets/arrow-left.png" />Back</button>
        </header>

        <section>

            <div id="flagDiv">
                <img id="flag" src="https://flagcdn.com/br.svg" alt="flag" />
            </div>

            <article>
                <h3>Brazil</h3>

                <div id="details">
                    <div id="detailed">
                        <p>Native Name: <span>Brazil</span></p>
                        <p>Population: <span>South America</span></p>
                        <p>Region: <span>Brasilia</span></p>
                        <p>Sub Region: <span>Brasilia</span></p>
                        <p>Capital: <span>Brasilia</span></p>

                    </div>

                    <div id="detailed">
                        <p>Top Level Domain: <span>Brasilia</span></p>
                        <p>Currencies: <span>Brasilia</span></p>
                        <p>Languages: <span>Brasilia</span></p>
                    </div>
                </div>

                <div id="border">
                    <h4>Border Countries:</h4>
                    <button id="borderButton">Paraguay</button>
                    <button id="borderButton">Bolivia</button>
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
    border-radius: 10px;
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
</style>