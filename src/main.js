import { createApp } from 'vue'
import router from './Router'
import App from './App.vue'

//COMENZAMOS SEPARANDO NUESTRA CREACION

var app = createApp(App)

app.config.globalProperties.$filters = {
    //CREAMOS DOS METODOS QUE RECIBIRAN PARAMETOS
    //Y DEVOLVERAN UN CODIGO
    mayusculas(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble(numero){
        return numero * 2;
    }
}

app.use(router).mount('#app')
