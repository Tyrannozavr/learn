import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
    const isAuthenticated = false
    if (to.fullPath === '/admin' || to.fullPath === '/admin/') {
        if (isAuthenticated) {
            console.log('navigate')
            return navigateTo(to.fullPath, )
        } else {
            return navigateTo('/', {redirectCode: 301})
        }
    }
})