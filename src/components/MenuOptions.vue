<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <ul class="nav nav-tabs">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">{{ menuNombre.Tabular.principal }}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#" @click="mostrarPanelFormulario">{{ menuNombre.Tabular.agregar }}</a>
                            </li>
                            <li>
                                <a href="#"  @click="ocultarPanelFormulario">{{ menuNombre.Tabular.consultar }}</a>
                            </li>
                        </ul>
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
                    <li>
                        <a href="#">{{ menuNombre.Cartografico}}</a>
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
    name: 'menuoptions',
    data() {
        return {
            menuNombre: {
                Tabular: {
                    principal: 'Modulo Tabular',
                    consultar: 'Consultar',
                    agregar: 'Agregar'
                },
                Cartografico: 'Modulo Cartografico',
                Reportes: {
                    principal: 'Reportes',
                    seccionWeb: 'Seccion Web',
                    reporteador: 'Reporteador'
                }
            },
            NombrePrograma: 'Programa de Inspección y Vigilancia Forestal'
        }
    },
    methods: {
        mostrarPanelFormulario: function() {
            this.$emit('clicVerFormulario')
        },
        ocultarPanelFormulario: function() {
            this.$emit('clicCerrarFormulario')
        }
    },
}
</script>

<style>

</style>
