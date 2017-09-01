<template>
    <div class="container-fluid">
        <br><br>
        <div id="rowFind" class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <div class="form-horizontal">
                            <div class="form-group">
                                <div class="col-md-4 col-sm-12 col-xs-12">
                                    <select class="form-control">
                                        <option selected="selected">Criterio1</option>
                                        <option value="1">Region</option>
                                        <option value="2">Localidad</option>
                                        <option value="3">Municipio</option>
                                    </select>
                                </div>
                                <div class="col-md-4 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Texto a buscar" class="form-control">
                                </div>
                                <div class="col-md-1 col-sm-12 col-xs-12">
                                    <button class="btn btn-default btn-block">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                                <div class="col-md-1 col-sm-12 col-xs-12 col-md-offset-2 col-lg-offset-2">
                                    <button class="btn btn-success btn-block" @click="mostrarPanelFormulario" v-show="btnMostrarFormulario">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                    <button class="btn btn-success btn-block" @click="ocultarPanelFormulario" v-show="btnOcultarFormulario">
                                        <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body table-responsive" style="margin-top: -15px; height: 250px; overflow-y: auto; overflow-x: hidden;">
                        <div class="table-container">

                            <table class="table table-striped">
                                <thead>
                                    <th>Región</th>
                                    <th>Municipio</th>
                                    <th>Folio</th>
                                    <th>Nombre del Predio</th>
                                    <th>Codigo de Identificación</th>
                                    <th>Registro Forestal Nacional</th>
                                    <th>Estatus Industria</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="7" class="text-center">realice una busqueda</td>
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
            btnMostrarFormulario: true,
            btnOcultarFormulario: false
        }
    },
    methods: {
        mostrarPanelFormulario: function() {
            this.$emit('clicVerFormulario')
            this.btnMostrarFormulario = false
            this.btnOcultarFormulario = true
        },
        ocultarPanelFormulario: function() {
            this.$emit('clicCerrarFormulario')
            this.btnMostrarFormulario = true
            this.btnOcultarFormulario = false
        }
    },
    watch: {
        accion: function() {
            if (this.accion == '') {
                this.btnMostrarFormulario = true
                this.btnOcultarFormulario = false
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
