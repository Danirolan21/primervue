<template>
    <div class="container">
        <ul id="menu">
            <li>
                <router-link to="/" style="color: blue; text-decoration: none">Home</router-link>
            </li>
            <li>
                <router-link to="/Cine" style="color: blue; text-decoration: none">Cine</router-link>
            </li>
            <li>
                <router-link to="/Musica" style="color: blue; text-decoration: none">Musica</router-link>
            </li>
            <li>
                <router-link to="/CicloVida" style="color: blue; text-decoration: none">Ciclo de vida</router-link>
            </li>
            <li>
                <router-link to="/Directivas" style="color: blue; text-decoration: none">Directivas</router-link>
            </li>
            <li>
                <router-link to="/PropiedadConmutada" style="color: blue; text-decoration: none">Propiedad Conmutada</router-link>
            </li>
            <li>
                <router-link to="/NumeroParImpar" style="color: blue; text-decoration: none">ParImpar</router-link>
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
    * {
        box-sizing: border-box;
    }
    ul#menu {
        margin: 0;
        padding: 0;
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
    .container {
        width: 100%;
        height: 100%;
        /* Add your background pattern here */
        background-image: repeating-radial-gradient(  #e2d1d1 50%, #e7d2d2ee 70%,#f5c7a1 95%);
        background-size: 50px 50px;
    }
</style>