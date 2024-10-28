import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CicloVida from './components/CicloVida.vue';

//CREAMOS UNA CONSTANTE ARRAY PARA LAS RUTAS
const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/Musica", component: MusicaComponent
    },
    {
        path: "/Cine", component: CineComponent
    },
    {
        path: "/CicloVida", component: CicloVida
    }
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENTRO DE Main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//POR ULTIMO, EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA
//EN App
export default router;