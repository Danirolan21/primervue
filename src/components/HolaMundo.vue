<template>
    <div>
        <h1>Mi primera app de Vue</h1>
        <h2>Su nombre es {{nombre}}</h2>
        <h2>El numero es {{numero}}</h2>
        <img src="./../assets/images/Aguacate.jpg" alt="Aguacate">
    </div>
</template>

<script>
    //ESTO ES CODIGO JS (ESPECIAL)
    //CADA COMPONENT QUE CREEMOS SIEMPRE DEBEMOS EXPORTARLO
    //CON UN name
    export default {
        name: "HolaMundo",
        data() {
            //AQUI DEBEMOS DECLARAR LAS VARIABLES PARA EL DIBUJO
            //LAS VARIABLES SON DECLARADAS CON FORMATO JSON 
            //DENTRO DE UN return
            return {
                nombre: "Alumno",
                numero: 14,
                miArray: [],
                objeto: {}
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: blue;
    }
    @import './../assets/css/style.css';
</style>