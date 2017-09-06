import trae from 'trae'
import config from './config'

const { url } = config
// const url = config.url

const objetoTrae = trae.create({
    baseUrl: url
})

const inspeccionService = {}

inspeccionService.cargaCatalogos = function(action, tableName ){

    return objetoTrae.get(config.Service.cargaInicial, {
        //params: { action: action, tableName: tableName }
        params: { action , tableName }
    })
    .then(res => res.data)
}






export default inspeccionService

