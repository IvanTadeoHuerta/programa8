const inspeccionMixin = {
    data() {
        return {
            folio: null,
            descriptivo: '',
            tipo: null
        }
    },
    created: function () {
        this.folio = null
        this.descriptivo = ''
        this.tipo = null
    },
    methods: {
        recibeDatos(folio, descriptivo, tipo) {
            this.folio = folio
            this.descriptivo = descriptivo
            this.tipo = tipo
            $('#modalMultiRegistros').modal('show')
        }
    },
    filters: {
        mayusculas(texto) {
            return texto.toUpperCase()
        },
        titulo(texto) {
            return `MULTIREGISTRO ${texto}`
        }
    }
}

export default inspeccionMixin