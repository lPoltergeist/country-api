<script>
export default {
    name: "Navbar",

    props: {
        click: String,
        themeColor: String,
    }
}
</script>

<template>
    <header :id="themeColor">
        <h1>Where in the world?</h1>

        <div id="darkmode" @click="click">
            <img src="../../assets/moon.png" alt="dark mode" />
            <button id="darkmode-button">{{themeColor === "light" ? "Dark Mode" : "Light Mode"}}</button>
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

#darkmode-button {
    font-weight: 600;
    background: transparent;
    border: none;
    cursor: pointer;
    
}

#light {
    background-color: #f2f2f2;
}

#dark {
    background-color: hsl(209, 23%, 22%);
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