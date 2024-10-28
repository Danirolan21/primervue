<template>
    <div>
        <h1>Directivas</h1>
        <h1>
            <!-- EL SIMBOLO DOLAR NOS PERMITE ACCEDER A ELEMENTOS DENTRO DE VUE -->
            {{$data}}
        </h1>
        <label for="">Introduzca numero</label>
        <input type="number" v-model="numero"/>
        <h2 v-if="numero > 0" style="color: green">
            POSITIVO
        </h2>
        <h2 v-else-if="numero < 0" style="color: red">
            NEGATIVO
        </h2>
        <h2 v-else style="color: blue">
            CERO
        </h2>
        <ul v-if="series.length > 0">
            <li style="list-style-type: none; color: red">FUNCIONANDO</li>
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "DirectivasComponent",
        data() {
            return {
                series: ["Futurama", "Stranger Things", "Vis a Vis", "Rick & Morty"],
                numero: 0,
                nombre: "Alumno",
                edad: 25
            }
        }
    }
</script>

<style scoped>

</style>