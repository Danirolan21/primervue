<template>
    <div>
        <h1>Mi primera app de Vue</h1>
    </div>
</template>

<script>
    //ESTO ES CODIGO JS (ESPECIAL)
    //CADA COMPONENT QUE CREEMOS SIEMPRE DEBEMOS EXPORTARLO
    //CON UN name
    export default {
        name: "HolaMundo"
    }
</script>

<style scoped>
    h1 {
        color: blue;
    }
</style>