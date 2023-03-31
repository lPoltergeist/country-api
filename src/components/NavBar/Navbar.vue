<script>
export default {
    name: "Navbar",
}
</script>

<template>
    <header>
        <h1>Where in the world?</h1>

        <div id="darkmode">
            <img src="../../assets/moon.png" alt="dark mode" />
            <p>Dark Mode</p>
        </div>
    </header>
</template>

<style scoped>
header {
    box-shadow: 0px -10px 44px -7px rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    height: 4rem;
    justify-content: space-around;
}

h1 {
    font-size: 1.5rem;
}

#darkmode {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 7rem;

    font-size: 1rem;
    font-weight: bold;
}

p {
    font-weight: 600;
}

@media (max-width: 375px) {
        h1 {
            font-size: 1rem;
        }

        #darkmode{
            width: 6rem;
        }

        p {
            font-size: .8rem;
        }
    }
</style>