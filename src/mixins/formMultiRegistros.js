const formMultiregistrosMixins = {
    props: ['setAccion'],
    data() {
        return {
            accion: ''
        }
    },
    watch: {
        setAccion: function () {
            this.accion = this.setAccion
        }
    }
}


export default formMultiregistrosMixins