<template>
    <div class="container-fluid">
        <br>
        <div id="rowFind" class="row" v-show="mostrarPanelBusqueda">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <div class="form-horizontal">
                            <div class="form-group">
                                <div class="col-md-1 col-sm-12 col-xs-12">
                                    <b>Buscar por:</b>
                                </div>
                                <div class="col-md-2 col-sm-12 col-xs-12" style="padding-left: 0px;">
                                    <select class="form-control">
                                        <option selected="selected">Criterio1</option>
                                        <option value="1">Region</option>
                                        <option value="2">Localidad</option>
                                        <option value="3">Municipio</option>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12" style="padding-left: 0px;">
                                    <input type="text" placeholder="Texto a buscar" class="form-control">
                                </div>
                                <div class="col-md-1 col-sm-12 col-xs-12" style="padding-left: 0px;">
                                    <button class="btn btn-default btn-block">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body table-responsive" style="margin-top: -15px; height: 250px; overflow-y: auto; overflow-x: hidden;">
                        <div class="table-container">

                            <table class="table table-striped">
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
                                    <template v-if="registros.length > 0">
                                        <tr v-for="registro in registros">
                                            <td>Toluca</td>
                                            <td>Ocoyoacac</td>
                                            <td>10280583</td>
                                            <td>San Juan Coapanoaya</td>
                                            <td>1-9-AB2017</td>
                                            <td>AVE4039394</td>
                                            <td>EJEMPLO ESTATUS</td>
                                        </tr>
                                    </template>
                                    <tr v-else>
                                        <td colspan="7" class="text-center">No hay registros</td>
                                    </tr>
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
    props: ['accion'],
    data() {
        return {
            mostrarPanelBusqueda: true,
            tituloSeccion: 'Consultar inspección',
            registros: ['1','2','3','4','5']
        }
    },
    watch: {
        accion: function() {

            if (this.accion == 'consultar') {
                this.mostrarPanelBusqueda = true
                this.tituloSeccion = 'Consultar inspección'
            } else if (this.accion == 'agregar') {
                this.mostrarPanelBusqueda = false
                this.tituloSeccion = 'Agregar inspección'

            }
        }
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
</style>
