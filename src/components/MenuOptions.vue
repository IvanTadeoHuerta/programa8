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
                                <router-link to="/agregar">{{ menuNombre.Tabular.agregar }}</router-link>
                            </li>
                            <li>
                                <router-link to="/consultar">{{ menuNombre.Tabular.consultar }}</router-link>
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
    props: ['nombrePrograma'],
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
            NombrePrograma: this.nombrePrograma
        }
    }
}
</script>
