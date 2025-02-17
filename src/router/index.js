import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import GestanteList from "../pages/GestanteList.vue";
import GestanteForm from "../pages/GestanteForm.vue";
import ExamesList from "../pages/ExameList.vue";
import ExameForm from "../pages/ExameForm.vue";
import PrescricoesList from "../pages/PrescricoesList.vue";
import PrescricaoForm from "../pages/PrescricaoForm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/gestantes", component: GestanteList },
  { path: "/gestantes/novo", component: GestanteForm },
  { path: "/exames", component: ExamesList },
  { path: "/exames/novo", component: ExameForm },
  { path: "/prescricoes", component: PrescricoesList },
  { path: "/prescricoes/novo", component: PrescricaoForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
