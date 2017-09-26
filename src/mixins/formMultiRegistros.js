const formMultiregistrosMixins = {
    props: ['setAccion'],
    data() {
        return {
            accion: ''
        }
    },
    created: function(){
         this.accion = this.setAccion
    },
    watch: {
        setAccion: function () {
            this.accion = this.setAccion
        }
    }
}


export default formMultiregistrosMixins