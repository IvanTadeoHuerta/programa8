<template>
    <div class="container-fluid">
        <br>
        <div id="rowFind" class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <div class="form-horizontal">
                            <div class="form-group">
                                <div class="col-md-1 col-sm-12 col-xs-12">
                                    <b>Buscar por:</b>
                                </div>
                                <div class="col-md-2 col-sm-12 col-xs-12" style="padding-left: 0px;">
                                    <select class="form-control" v-model="criterioSeleccionado">
                                        <option value="-1" selected="selected">Elegir criterio</option>
                                        <option v-for="criterio in criterios" :value="criterio.id"  :key="criterio.id" >{{ criterio.value }}</option>
                                    </select>
                                    <label style="color:red" v-show="mostrarError">Elige criterio</label>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12" style="padding-left: 0px;">
                                    <input type="text" placeholder="Texto a buscar" v-model="textoIngresado" class="form-control">
                                </div>
                                <div class="col-md-1 col-sm-12 col-xs-12" style="padding-left: 0px;">
                                    <button class="btn btn-default btn-block" @click="peticionHttpBuscarInspecciones">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body table-responsive" style="margin-top: -15px; height: 250px; overflow-y: auto; overflow-x: hidden;">
                        <div class="table-container">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Región</th>
                                        <th>Municipio</th>
                                        <th>Folio</th>
                                        <th>Nombre del Predio</th>
                                        <th>Codigo de Identificación</th>
                                        <th>Registro Forestal Nacional</th>
                                        <th>Estatus Industria</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!--<template v-if="registros.length > 0">
                                        <tr @click="seleccionaRegistro(index)"
                                             v-for="(registro, index ) in registros" 
                                             :key="registro.id" 
                                             :class="{isSeleccionado: setFilaSeleccionada == index}"
                                             style="cursor:pointer">

                                                <td>{{ registro.region }}</td>
                                                <td>{{ registro.municipio }}</td>
                                                <td>{{ registro.folio  }} </td>
                                                <td>{{ registro.nombre}}</td>
                                                <td>{{registro.codigo}}</td>
                                                <td>{{registro.registro}}</td>
                                                <td>{{registro.estatus}}</td>
                                        </tr>
                                    </template>
                                    <tr v-else>
                                        <td colspan="7" class="text-center">No hay registros</td>
                                    </tr>-->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'busquedapanel',
    //props: ['accion','filaSeleccionada','opcionesBusqueda'],
    data() {
        return {
           /* mostrarPanelBusqueda: true,
            setFilaSeleccionada: this.filaSeleccionada,
            criterioSeleccionado: -1,
            mostrarError : false,
            textoIngresado: '',
            registros:  [
                      {region:'Toluca', municipio:'Santiago', folio:'10280583', nombre:'Nombre Predio', codigo:'52730', registro:'ASCXZS', estatus:'ACTIVO'},
                      {region:'Toluca', municipio:'Ocoyoacac', folio:'10280583', nombre:'Nombre Predio', codigo:'52730', registro:'ASCXZS', estatus:'ACTIVO'},
                      {region:'Toluca', municipio:'Lerma', folio:'10280583', nombre:'Nombre Predio', codigo:'52730', registro:'ASCXZS', estatus:'ACTIVO'},
                      {region:'Toluca', municipio:'San Mateo', folio:'10280583', nombre:'Nombre Predio', codigo:'52730', registro:'ASCXZS', estatus:'ACTIVO'},
                      {region:'Toluca', municipio:'Salazar', folio:'10280583', nombre:'Nombre Predio', codigo:'52730', registro:'ASCXZS', estatus:'ACTIVO'},
                      {region:'Toluca', municipio:'El Zarco', folio:'10280583', nombre:'Nombre Predio', codigo:'52730', registro:'ASCXZS', estatus:'ACTIVO'},
                      {region:'Valle de bravo', municipio:'Valle de Bravo', folio:'10280583', nombre:'Nombre Predio', codigo:'52730', registro:'ASCXZS', estatus:'ACTIVO'}
                    ],
            criterios: this.opcionesBusqueda*/
        }
    },
    methods:{
       /* seleccionaRegistro: function(id){ 
                
                if(this.setFilaSeleccionada == id){
                    this.setFilaSeleccionada = -1
                }else{
                    this.setFilaSeleccionada = id                    
                }              
                
            this.$emit('clicEnRegistro',this.setFilaSeleccionada)
            this.$bus.$emit('set-folio', this.setFilaSeleccionada)
        },
        peticionHttpBuscarInspecciones: function(){

            if(this.criterioSeleccionado == -1){
                this.mostrarError = true
            }else {
                this.mostrarError = false
                alert('Envia la peticion con criterio y texto a filtrar');
            }            
        }*/
    },
    watch: {
        /*accion: function() {
            
            if (this.accion == 'consultar') {
                
                this.mostrarPanelBusqueda = true
                
            } else if (this.accion == 'agregar') {
                this.mostrarPanelBusqueda = false
            }
        },
        mostrarPanelBusqueda: function(){
            this.setFilaSeleccionada = -1
        },
        filaSeleccionada: function(){
            if(this.filaSeleccionada == -1) this.setFilaSeleccionada = -1
        },
        criterioSeleccionado: function(){
            this.registros = []
            this.mostrarError = (this.criterioSeleccionado == -1)? true : false
        }*/
    }
}
</script>

<style  scoped>
.table-container {
    height: 15em;
}

table {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
}


table thead {
    /* head takes the height it requires, 
                and it's not scaled when table is resized */
    flex: 0 0 auto;
    width: calc(100% - 0.9em);
}


table tbody {
    /* body takes all the remaining available space */
    flex: 1 1 auto;
    display: block;

    overflow-y: auto;

}

table tbody tr {
    width: 100%;
}

table thead,
table tbody tr {
    display: table;
    table-layout: fixed;
}

.isSeleccionado{
    background-color: #95e192
}

</style>
