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
      nombrePrograma: 'Programa de Inspección y Vigilancia Forestal'
    }
  },
  created:function (){
    console.log('Aqui se cargaran todos los catalogos , cada vez que se monte la aplicaciones');
  },
  components: {
    Cabecera,
    Menuoptions
  }
}
</script>

