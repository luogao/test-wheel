import sideblockComponent from './sideBlock'
const defaultComponentName = 'sidebar'

const Sidebar = {
    install(Vue, options = {}) {
        const componentName = options.componentName || defaultComponentName
        Vue.component(componentName, sideblockComponent)
    }
}

export default Sidebar