const inspeccionMixin = {
    data() {
        return {
            folio: null,
            descriptivo: '',
            verFlechaRegreso: false,
            verBtnAgregar: true,
            tipo: null
        }
    },
    created: function () {
        this.folio = null
        this.descriptivo = ''
        this.verBtnAgregar = true
        this.verFlechaRegreso = false
        this.tipo = null
 
    },
    methods: {
        recibeDatos(folio, descriptivo, tipo) {
            this.folio = folio
            this.descriptivo = descriptivo
            this.tipo = tipo
            this.verBtnAgregar = true
            this.verFlechaRegreso = false
            $('#modalMultiRegistros').modal('show')
        },
        agregaMultiRegistro(tipoMultiRegistro) {
            this.verBtnAgregar = false
            this.verFlechaRegreso = true
        }
    },
    /*watch: {
        accionEnModal: function () {

        }
    },*/
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