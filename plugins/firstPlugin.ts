export default defineNuxtPlugin(nuxtApp => {
    // console.log('initialize nuxt plugin')
    return {
        provide: {
            sayHello: (name: String = 'Dmiv') => alert(`Hello ${name}`)
        }
    }
})