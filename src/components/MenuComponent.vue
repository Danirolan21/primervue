<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/Cine">Cine</router-link>
            </li>
            <li>
                <router-link to="/Musica">Musica</router-link>
            </li>
            <li>
                <router-link to="/CicloVida">Ciclo de vida</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    ul#menu {
        padding: 0;
        margin: 0;
    }
    ul#menu li {
        display: inline;
    }
    ul#menu li {
        padding: 5px;
        margin: 10px;
        font-size: 24px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    ul#menu li router-link{
        text-decoration: none;
    }
</style>