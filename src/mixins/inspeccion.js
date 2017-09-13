const inspeccionMixin = {
    data() {
        return {
            folio: null,
            descriptivo: '',
            tipo: null,
            reset: false

        }
    },
    created: function () {
        this.folio = null
        this.descriptivo = ''
        this.tipo = null
        this.reset = false
    },
    methods: {
        recibeDatos(folio, descriptivo, tipo) {
            this.folio = folio
            this.descriptivo = descriptivo
            this.tipo = tipo
            this.reset = !this.reset
            $('#modalMultiRegistros').modal('show')
        }
    }
}

export default inspeccionMixin