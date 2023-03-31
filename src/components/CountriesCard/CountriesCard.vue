<script>

export default {
    name: "CardBox",

    props: {
    flag: String,
    name: String,
    population: Number,
    region: String,
    capital: String,
    }
}


</script>

<template>
    <article>
        <img :src="flag" alt="countries" />
        <div id="cardinformation">
            <h2>{{ name }}</h2>

            <div id="details">
                <p>Population: <span>{{ population }}</span></p>
                <p>Region: <span>{{ region }}</span></p>
                <p>Capital: <span>{{ capital }}</span></p>
            </div>
        </div>
    </article>
</template>

<style scoped>

article{
    width: 20rem;
    box-shadow: 3px 5px 20px -2px rgba(0,0,0,0.75);
    border-radius: 10px;
    min-height: 20rem;
}

img {
    max-height: 10rem;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

#cardinformation{
    width: 90%;
    margin: 1rem 2rem 0 2rem;
}

#details {
  margin: 1rem 0 2.5rem 0;
}

p {
    font-weight: 600;
    margin-bottom: .3rem;
}

span {
    font-weight: 300;
  
}
</style>