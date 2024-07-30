import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
export default {
    setup() {
        const message = ref('Hello Vue!')
        return {
            message
        }
    },
    template: `<div>{{ message }}</div>`
}