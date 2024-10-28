<template>
    <div>
        <h1 style="color: green">Ciclo de vida</h1>
        <h2 style="color: aquamarine">{{saludo}}</h2>
        <button @click="cambiarSaludo()">Y mañana?</button>
    </div>
</template>

<script>
    export default {
        name: "CicloVida",
        data() {
            return {
                saludo: "Hoy es lunes..."
            }
        },
        methods: {
            //EN ESTA ZONA INCLUIREMOS NUESTROS METODOS PERSONALIZADOS
            cambiarSaludo() {
                //SE UTILIZA LA PALABRA CLAVE this PARA LLAMAR
                //A LAS VARIABLES DE data()
                this.saludo = "Y mañana martes...";
            }
        },
        mounted() {
            console.log("Component Montado..");
        }, updated() {
            console.log("Component Modificado..");
        }, created() {
            console.log("Component Creado..");
        }, unmounted() {
            console.log("Component Destruido..");
        },
    }
</script>

<style>

</style>