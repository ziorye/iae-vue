import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// 1. Import route components.
import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue'

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!
