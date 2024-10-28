<template>
    <div>
        <h1 id="title">¿Par o Impar?</h1>
        <label for="">Escribe un numero: </label>
        <input type="number" v-model="numero"/><br/><br/>
        <h1 v-if="numero % 2 == 0" style='color: green'>
            {{numero}} es Par
        </h1>
        <h1 v-else style='color: red'>
            {{numero}} es Impar
        </h1>

        <!-- <button @click="comprobarParImpar()">Comprobar Par o Impar</button>
        <div v-html="html"></div> -->

        <!-- <div v-html="parImpar"></div> -->
    </div>
</template>

<script>
    export default {
        name: "NumeroParImpar",
        methods: {
            comprobarParImpar() {
                this.html = "";
                if (this.numero % 2 == 0) {
                    this.html += "<h1 style='color: green'>" + this.numero + " es Par</h1>";
                } else {
                    this.html += "<h1 style='color: red'>" + this.numero + " es Impar</h1>";
                }
            }
        },
        computed: {
            parImpar() {
                var data = "";
                if (this.numero % 2 == 0) {
                    data += "<h1 style='color: green'>" + this.numero + " es Par</h1>";
                } else {
                    data += "<h1 style='color: red'>" + this.numero + " es Impar</h1>";
                }
                return data;
            }
        },
        data() {
            return {
                numero: 0,
                html: ""
            }
        }
    }
</script>

<style scoped>
    #title {
        color: midnightblue;
    }
</style>