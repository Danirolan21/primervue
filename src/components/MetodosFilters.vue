<template>
    <div>
        <h1 style="color: midnightblue">Metodos Filters</h1>
        <ul>
            <li v-for="num in numeros" :key='num'>
                Número: {{num}},
                Doble: {{ $filters.getNumeroDoble(num) }}
            </li>
        </ul>
        <ul>
            <li v-for="name in nombres" :key='name'>
                {{ $filters.mayusculas(name) }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MetodosFilters",
        data() {
            return {
                numeros: [23,55,36,46,5,34,4],
                nombres: ["Sofia", "Jorge", "Gabriel", "Barbara"]
            }
        }
    }

</script>