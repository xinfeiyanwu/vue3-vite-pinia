import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const Pinia = createPinia().use(piniaPluginPersist) // 初始化pinia商店和注持久化插件
export default Pinia