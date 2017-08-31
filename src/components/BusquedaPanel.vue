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
                                    <button class="btn btn-success btn-block">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body" style="margin-top: -15px;">
                        <div class="table-responsive">
                            <table id="tabla" class="table table-fixed" border="1" width="100%">
                                <thead class="acomodar" style="margin-top: -5px;">
                                    <tr>
                                        <th width="14%">Región</th>
                                        <th width="14%">Municipio</th>
                                        <th width="14%">Folio</th>
                                        <th width="14%">Nombre del Predio</th>
                                        <th width="14%">Codigo de Identificación</th>
                                        <th width="14%">Registro Forestal Nacional</th>
                                        <th width="14%">Estatus Industria</th>
                                    </tr>
                                </thead>
                                <tbody class="acomodar showBarsV" id="bodyAllPredios">
                                    <tr>
                                        <td width="14%">Iva</td>
                                        <td width="14%">Tadeo</td>
                                        <td width="14%">Huerta</td>
                                        <td width="14%">Ejemplo</td>
                                        <td width="14%">ejemplo</td>
                                        <td width="14%">1222222222222222222222222222222</td>
                                        <td width="14%">11111111111111111111111</td>
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
    data() {
        return {

        }
    }
}
</script>

<style  scoped>

</style>
