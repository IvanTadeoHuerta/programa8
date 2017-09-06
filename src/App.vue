<template>
  <div id="app">
    <cabecera :usuario="usuario"></cabecera>
    <menuoptions :nombrePrograma="nombrePrograma"></menuoptions>
    <router-view></router-view>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Menuoptions from './components/MenuOptions.vue'

export default {
  name: 'app',
  data() {
    return {
      usuario: 'Ivan Tadeo Huerta',
      nombrePrograma: 'Programa de Inspección y Vigilancia Forestal',
      criterioBusqueda: [
        { id: 1, value: 'Municipio' },
        { id: 2, value: 'Folio' },
        { id: 4, value: 'Regio' },
        { id: 7, value: 'Estatus' }
      ]
    }
  },
  components: {
    Cabecera,
    Menuoptions
  }
}
</script>

