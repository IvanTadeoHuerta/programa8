<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#">{{ menuNombre.Tabular}}</a>
                    </li>
                    <li>
                        <a href="#">{{ menuNombre.Cartografico}}</a>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">{{ menuNombre.Reportes.principal }}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">{{ menuNombre.Reportes.seccionWeb }}</a>
                            </li>
                            <li>
                                <a href="#">{{ menuNombre.Reportes.reporteador }}</a>
                            </li>
                        </ul>
                    </li>
                    <li class="pull-right"><br>
                        <b>{{ NombrePrograma }}</b>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    el:'menu',
    name: 'menuoptions',
    data() {
        return {
            menuNombre: {
                Tabular: 'Modulo Tabular',
                Cartografico: 'Modulo Cartografico',
                Reportes: {
                    principal: 'Reportes',
                    seccionWeb: 'Seccion Web',
                    reporteador: 'Reporteador'
                }
            },
            NombrePrograma: 'Programa de Inspección y Vigilancia Forestal'
        }
    }
}
</script>

<style>

</style>
