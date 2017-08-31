import config from './components/config'

const { url } = config
// const url = config.url



export default function getCargaCatalogos() {
    const URL = `${url}${config.Service.catalogos}`
}